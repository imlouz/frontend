import React from 'react'
import {Editor} from 'slate-react'
import {Value} from 'slate'
import {isKeyHotkey} from 'is-hotkey'
// import {Button, Icon, Toolbar} from './editorComponents'
import {cx, css} from 'emotion'

export const Button = React.forwardRef(
    ({className, active, reversed, ...props}: any, ref) => (
        <span
            {...props}
            ref={ref}
            className={cx(
                className,
                css`
          cursor: pointer;
          color: ${reversed
                    ? active ? 'white' : '#aaa'
                    : active ? 'black' : '#ccc'};
        `
            )}
        />
    )
)

export const EditorValue = React.forwardRef(
    ({className, value, ...props}: any, ref) => {
        const textLines = value.document.nodes
            .map(node => node.text)
            .toArray()
            .join('\n')
        return (
            <div
                ref={ref}
                {...props}
                className={cx(
                    className,
                    css`
            margin: 30px -20px 0;
          `
                )}
            >
                <div
                    className={css`
            font-size: 14px;
            padding: 5px 20px;
            color: #404040;
            border-top: 2px solid #eeeeee;
            background: #f8f8f8;
          `}
                >
                    Slate's value as text
                </div>
                <div
                    className={css`
            color: #404040;
            font: 12px monospace;
            white-space: pre-wrap;
            padding: 10px 20px;
            div {
              margin: 0 0 0.5em;
            }
          `}
                >
                    {textLines}
                </div>
            </div>
        )
    }
)
export const Icon = React.forwardRef(({className, ...props}: any, ref) => (
    <span
        {...props}
        ref={ref}
        className={cx(
            'material-icons',
            className,
            css`
        font-size: 18px;
        vertical-align: text-bottom;
      `
        )}
    />
))
export const Instruction = React.forwardRef(({className, ...props}: any, ref) => (
    <div
        {...props}
        ref={ref}
        className={cx(
            className,
            css`
        white-space: pre-wrap;
        margin: 0 -20px 10px;
        padding: 10px 20px;
        font-size: 14px;
        background: #f8f8e8;
      `
        )}
    />
))
export const Menu = React.forwardRef(({className, ...props}: any, ref) => (
    <div
        {...props}
        ref={ref}
        className={cx(
            className,
            css`
        & > * {
          display: inline-block;
        }
        & > * + * {
          margin-left: 15px;
        }
      `
        )}
    />
))
export const Toolbar = React.forwardRef(({className, ...props}: any, ref) => (
    <Menu
        {...props}
        ref={ref}
        className={cx(
            className,
            css`
        position: relative;
        padding: 1px 18px 17px;
        margin: 0 -20px;
        border-bottom: 2px solid #eee;
        margin-bottom: 20px;
      `
        )}
    />
))
const DEFAULT_NODE = 'paragraph'

/**
 * Define hotkey matchers.
 *
 * @type {Function}
 */

const isBoldHotkey = isKeyHotkey('mod+b')
const isItalicHotkey = isKeyHotkey('mod+i')
const isUnderlinedHotkey = isKeyHotkey('mod+u')
const isCodeHotkey = isKeyHotkey('mod+`')

interface IProps {
    value: Value,
    onChange: (Value) => void
}


function EditorComponent({value, onChange}: IProps) {
    let editor;
    const ref = ed => {
        editor = ed
    }
    const hasMark = type => {
        return value.activeMarks.some(mark => mark.type === type)
    }

    const hasBlock = type => {
        return value.blocks.some(node => node.type === type)
    }


    const onKeyDown = (event, editor, next) => {
        let mark

        if (isBoldHotkey(event)) {
            mark = 'bold'
        } else if (isItalicHotkey(event)) {
            mark = 'italic'
        } else if (isUnderlinedHotkey(event)) {
            mark = 'underlined'
        } else if (isCodeHotkey(event)) {
            mark = 'code'
        } else {
            return next()
        }

        event.preventDefault()
        editor.toggleMark(mark)
    }

    /**
     * When a mark button is clicked, toggle the current mark.
     *
     * @param {Event} event
     * @param {String} type
     */

    const onClickMark = (event, type) => {
        event.preventDefault()
        editor.toggleMark(type)
    }

    /**
     * When a block button is clicked, toggle the block type.
     *
     * @param {Event} event
     * @param {String} type
     */

    const onClickBlock = (event, type) => {
        event.preventDefault()

        const {value} = editor
        const {document} = value

        // Handle everything but list buttons.
        if (type !== 'bulleted-list' && type !== 'numbered-list') {
            const isActive = hasBlock(type)
            const isList = hasBlock('list-item')

            if (isList) {
                editor
                    .setBlocks(isActive ? DEFAULT_NODE : type)
                    .unwrapBlock('bulleted-list')
                    .unwrapBlock('numbered-list')
            } else {
                editor.setBlocks(isActive ? DEFAULT_NODE : type)
            }
        } else {
            // Handle the extra wrapping required for list buttons.
            const isList = hasBlock('list-item')
            const isType = value.blocks.some(block => {
                return !!document.getClosest(block.key, parent => parent.type === type)
            })

            if (isList && isType) {
                editor
                    .setBlocks(DEFAULT_NODE)
                    .unwrapBlock('bulleted-list')
                    .unwrapBlock('numbered-list')
            } else if (isList) {
                editor
                    .unwrapBlock(
                        type === 'bulleted-list' ? 'numbered-list' : 'bulleted-list'
                    )
                    .wrapBlock(type)
            } else {
                editor.setBlocks('list-item').wrapBlock(type)
            }
        }
    }
    /**
     * Render a mark-toggling toolbar button.
     *
     * @param {String} type
     * @param {String} icon
     * @return {Element}
     */

    const renderMarkButton = (type, icon) => {
        const isActive = hasMark(type)

        return (
            <Button
                active={isActive}
                onMouseDown={event => onClickMark(event, type)}
            >
                <Icon>{icon}</Icon>
            </Button>
        )
    }

    /**
     * Render a block-toggling toolbar button.
     *
     * @param {String} type
     * @param {String} icon
     * @return {Element}
     */

    const renderBlockButton = (type, icon) => {
        let isActive = hasBlock(type)

        if (['numbered-list', 'bulleted-list'].includes(type)) {
            const {document, blocks} = value

            if (blocks.size > 0) {
                const parent: any = document.getParent(blocks.first().key)
                isActive = hasBlock('list-item') && parent && parent.type === type
            }
        }

        return (
            <Button
                active={isActive}
                onMouseDown={event => onClickBlock(event, type)}
            >
                <Icon>{icon}</Icon>
            </Button>
        )
    }

    /**
     * Render a Slate block.
     *
     * @param {Object} props
     * @param editor
     * @param next
     * @return {Element}
     */

    const renderBlock = (props, editor, next) => {
        const {attributes, children, node} = props
        console.log(editor)
        switch (node.type) {
            case 'block-quote':
                return <blockquote {...attributes}>{children}</blockquote>
            case 'bulleted-list':
                return <ul {...attributes}>{children}</ul>
            case 'heading-one':
                return <h1 {...attributes}>{children}</h1>
            case 'heading-two':
                return <h2 {...attributes}>{children}</h2>
            case 'list-item':
                return <li {...attributes}>{children}</li>
            case 'numbered-list':
                return <ol {...attributes}>{children}</ol>
            default:
                return next()
        }
    }

    /**
     * Render a Slate mark.
     *
     * @param {Object} props
     * @return {Element}
     */

    const renderMark = (props, editor, next) => {
        const {children, mark, attributes} = props
        console.log(editor)

        switch (mark.type) {
            case 'bold':
                return <strong {...attributes}>{children}</strong>
            case 'code':
                return <code {...attributes}>{children}</code>
            case 'italic':
                return <em {...attributes}>{children}</em>
            case 'underlined':
                return <u {...attributes}>{children}</u>
            default:
                return next()
        }
    }

    return (<div className={"editor"}>
        <Toolbar>
            {renderMarkButton('bold', 'format_bold')}
            {renderMarkButton('italic', 'format_italic')}
            {renderMarkButton('underlined', 'format_underlined')}
            {renderMarkButton('code', 'code')}
            {renderBlockButton('heading-one', 'looks_one')}
            {renderBlockButton('heading-two', 'looks_two')}
            {renderBlockButton('block-quote', 'format_quote')}
            {renderBlockButton('numbered-list', 'format_list_numbered')}
            {renderBlockButton('bulleted-list', 'format_list_bulleted')}
        </Toolbar>
        <Editor
            spellCheck
            autoFocus
            placeholder='Enter some plain text...'
            value={value}
            ref={ref}
            onChange={onChange}
            onKeyDown={onKeyDown}
            renderBlock={renderBlock}
            renderMark={renderMark}
        />
    </div>)
}

export default EditorComponent









