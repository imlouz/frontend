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
    placeholder?: string
    autoFocus?: boolean
    onChange?: (Value) => void
    onContentChange?: () => void
}

function EditorComponent({
                             value,
                             onChange,
                             placeholder = "",
                             readOnly = false,
                             autoFocus = false,
                             editor,
                             onContentChange
                         }: IProps): JSX.Element {
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
                className="editor"
                readOnly={readOnly}
                autoFocus={autoFocus}
                placeholder={placeholder}
                value={value}
                ref={editor}
                onChange={onChange}
                onKeyUp={onKeyUp}
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
                   margin-right: 7px;
                   box-shadow: inset 0 0 2px -1px rgba(0,0,0,0.4);
                }
                .editor-box + .editor-box {
                    margin-left: 7px;
                    margin-right: 0;
                }
            `}</style>
        </div>
    )
}

export default EditorComponent
