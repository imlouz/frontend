import React from "react"
import {Editor} from "slate-react"
import {Value} from "slate"
import {isKeyHotkey} from "is-hotkey"
import {Button, Icon} from "./EditorComponentHelper"

const DEFAULT_NODE = "paragraph"

/**
 * Define hotkey matchers.
 *
 * @type {Function}
 */

const isBoldHotkey = isKeyHotkey("mod+b")
const isItalicHotkey = isKeyHotkey("mod+i")
const isUnderlinedHotkey = isKeyHotkey("mod+u")
const isCodeHotkey = isKeyHotkey("mod+`")

interface IProps {
    value: Value
    editor: any
    readOnly?: boolean
    onChange?: (Value) => void
    onContentChange?: () => void
}

function EditorComponent({
                             value,
                             onChange,
                             readOnly = false,
                             editor,
                             onContentChange
                         }: IProps): JSX.Element {
    // const ref = ed => {
    //     editor = ed
    // }
    // const hasMark = type => {
    //     return value.activeMarks.some(mark => mark.type === type)
    // }
    //
    // const hasBlock = type => {
    //     return value.blocks.some(node => node.type === type)
    // }

    const onKeyDown = (event, tempEditor, next) => {
        let mark

        if (isBoldHotkey(event)) {
            mark = "bold"
        } else if (isItalicHotkey(event)) {
            mark = "italic"
        } else if (isUnderlinedHotkey(event)) {
            mark = "underlined"
        } else if (isCodeHotkey(event)) {
            mark = "code"
        } else {
            return next()
        }

        event.preventDefault()
        tempEditor.toggleMark(mark)
    }

    const onKeyUp = event => {
        event.preventDefault()

        onContentChange()
    }

    /**
     * When a mark button is clicked, toggle the current mark.
     *
     * @param {Event} event
     * @param {String} type
     */

    // const onClickMark = (event, type) => {
    //     event.preventDefault()
    //     editor.current.toggleMark(type)
    //     onContentChange()
    // }
    //
    // /**
    //  * When a block button is clicked, toggle the block type.
    //  *
    //  * @param {Event} event
    //  * @param {String} type
    //  */
    //
    // const onClickBlock = (event, type) => {
    //     event.preventDefault()
    //     const tempEditor = editor.current
    //     const { value } = tempEditor
    //     const { document } = value
    //
    //     // Handle everything but list buttons.
    //     if (type !== "bulleted-list" && type !== "numbered-list") {
    //         const isActive = hasBlock(type)
    //         const isList = hasBlock("list-item")
    //
    //         if (isList) {
    //             tempEditor
    //                 .setBlocks(isActive ? DEFAULT_NODE : type)
    //                 .unwrapBlock("bulleted-list")
    //                 .unwrapBlock("numbered-list")
    //         } else {
    //             tempEditor.setBlocks(isActive ? DEFAULT_NODE : type)
    //         }
    //     } else {
    //         // Handle the extra wrapping required for list buttons.
    //         const isList = hasBlock("list-item")
    //         const isType = value.blocks.some(block => {
    //             return !!document.getClosest(block.key, parent => parent.type === type)
    //         })
    //
    //         if (isList && isType) {
    //             tempEditor
    //                 .setBlocks(DEFAULT_NODE)
    //                 .unwrapBlock("bulleted-list")
    //                 .unwrapBlock("numbered-list")
    //         } else if (isList) {
    //             tempEditor
    //                 .unwrapBlock(type === "bulleted-list" ? "numbered-list" : "bulleted-list")
    //                 .wrapBlock(type)
    //         } else {
    //             tempEditor.setBlocks("list-item").wrapBlock(type)
    //         }
    //     }
    //
    //     onContentChange()
    // }
    // /**
    //  * Render a mark-toggling toolbar button.
    //  *
    //  * @param {String} type
    //  * @param {String} icon
    //  * @return {Element}
    //  */
    //
    // const renderMarkButton = (type, icon) => {
    //     const isActive = hasMark(type)
    //
    //     return (
    //         <Button active={isActive} onMouseDown={event => onClickMark(event, type)}>
    //             <Icon>{icon}</Icon>
    //         </Button>
    //     )
    // }
    //
    // /**
    //  * Render a block-toggling toolbar button.
    //  *
    //  * @param {String} type
    //  * @param {String} icon
    //  * @return {Element}
    //  */
    //
    // const renderBlockButton = (type, icon) => {
    //     let isActive = hasBlock(type)
    //
    //     if (["numbered-list", "bulleted-list"].includes(type)) {
    //         const { document, blocks } = value
    //
    //         if (blocks.size > 0) {
    //             const parent: any = document.getParent(blocks.first().key)
    //             isActive = hasBlock("list-item") && parent && parent.type === type
    //         }
    //     }
    //
    //     return (
    //         <Button active={isActive} onMouseDown={event => onClickBlock(event, type)}>
    //             <Icon>{icon}</Icon>
    //         </Button>
    //     )
    // }

    /**
     * Render a Slate block.
     *
     * @param {Object} props
     * @param tempEditor
     * @param next
     * @return {Element}
     */

    const renderBlock = (props, tempEditor, next) => {
        const {attributes, children, node} = props
        // console.log(editor)
        switch (node.type) {
            case "block-quote":
                return <blockquote {...attributes}>{children}</blockquote>
            case "bulleted-list":
                return <ul {...attributes}>{children}</ul>
            case "heading-one":
                return <h1 {...attributes}>{children}</h1>
            case "heading-two":
                return <h2 {...attributes}>{children}</h2>
            case "list-item":
                return <li {...attributes}>{children}</li>
            case "numbered-list":
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

    const renderMark = (props, tempEditor, next) => {
        const {children, mark, attributes} = props
        // console.log(editor)

        switch (mark.type) {
            case "bold":
                return <strong {...attributes}>{children}</strong>
            case "code":
                return <code {...attributes}>{children}</code>
            case "italic":
                return <em {...attributes}>{children}</em>
            case "underlined":
                return <u {...attributes}>{children}</u>
            default:
                return next()
        }
    }

    return (
        <div className="editor-box">
            <Editor
                spellCheck
                className="editor"
                readOnly={readOnly}
                autoFocus
                placeholder="Enter some plain text..."
                value={value}
                ref={editor}
                onChange={onChange}
                onKeyDown={onKeyDown}
                onKeyUp={onKeyUp}
                renderBlock={renderBlock}
                renderMark={renderMark}
                style={{
                    padding: 20,
                    minHeight: 250
                }}
            />
            <style jsx>{`
                .editor-box{
                   width: 50%;
                   background-color: white;
                   position: relative;
                   margin-right: 5px;
                }
                .editor-box + .editor-box {
                    margin-left: 5px;
                    margin-right: 0;
                }
            `}</style>
        </div>
    )
}

export default EditorComponent
