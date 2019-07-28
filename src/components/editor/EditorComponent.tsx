import React from "react"
import {Editor} from "slate-react"
import {Value} from "slate"
import {isKeyHotkey} from "is-hotkey"
import CopySVG from "../icons/CopySVG";
import FlexBox from "../box/FlexBox";
import CloseSVG from "../icons/CloseSVG";
import initialJson from "./editor_value.json";

const initialValue = Value.fromJSON(initialJson)

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
    onClear?: () => void
    onContentChange?: () => void,
    hasClearBtn?: boolean,
    hasCloneBtn?: boolean,
}

function EditorComponent({
                             value,
                             onChange,
                             onClear,
                             placeholder = "",
                             readOnly = false,
                             hasClearBtn = false,
                             hasCloneBtn = true,
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
        // console.log(tempEditor)

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
        // console.log(tempEditor)

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
                onKeyDown={onKeyDown}
                renderMark={renderMark}
                renderBlock={renderBlock}
                placeholder={placeholder}
                value={value}
                ref={editor}
                onChange={onChange}
                onKeyUp={onKeyUp}
                style={{
                    padding: 20,
                    minHeight: 280,
                    color: "#4a4a4a",
                    paddingRight: hasClearBtn ? 40 : 20
                }}
            />
            {hasClearBtn && <button className="close-button"
                                    onClick={() => {
                                        if (onClear) {
                                            onClear()
                                        } else {
                                            onChange({value: initialValue})
                                        }
                                    }}
            >
                <CloseSVG/>
            </button>}
            {hasCloneBtn && <FlexBox className="editor-actions">
                <button>
                    <CopySVG/>
                    <style>{`
                    .editor-actions{
                        padding: 0 20px 15px;
                    }

                `}</style>
                </button>
            </FlexBox>}
            <style>{`
                .editor-box{
                   background-color: white;
                   position: relative;
                   border-radius: 4px;
                   box-shadow: 0 2px 5px #eff3fb, 0 10px 20px #eff3fb;
                }
                .editor-box p{
                    margin:0;
                }
                .editor-box button{
                    border:none;
                    background:transparent;
                }

                .editor-box button:focus{
                    outline: none;
                }
                .editor-box .editor{
                    border-radius: 4px
                }
                .editor-box svg{
                    opacity: .5;
                }
                .editor-box button:hover svg{
                    opacity: 1;
                }
                .editor-box .close-button{
                    position:absolute;
                    top: 17px;
                    right: 10px;
                }
            `}</style>
        </div>
    )
}

export default EditorComponent
