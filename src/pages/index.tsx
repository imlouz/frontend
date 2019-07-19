import React, {useCallback, useRef, useState} from "react"
import {debounce} from "lodash"
import EditorComponent from "../components/editor/EditorComponent"
import {Value} from "slate"
import initialJson from "../components/editor/editor_value.json"
import MainLayout from "../components/layout/MainLayout"
import * as editorUtils from "../helpers/editorUtils"
import FlexBox from "../components/box/FlexBox"
import CopySVG from "../components/icons/CopySVG";
import CloseSVG from "../components/icons/CloseSVG";

const initialValue = Value.fromJSON(initialJson)

export default function IndexPage(): JSX.Element {
    const [leftValue, setLeftValue] = useState<Value>(initialValue)
    const [rightValue, setRightValue] = useState<Value>(initialValue)
    const leftEditor = useRef<any>()
    const rightEditor = useRef<any>()

    const convertToRight = useCallback(
        debounce(editorUtils.converyToCrylic(leftEditor, rightEditor), 300),
        []
    )

    const onLeftChange = useCallback(({value}) => {
        setLeftValue(value)
    }, [leftValue])

    return (
        <MainLayout pageTitle="Tekshir.uz">
            <FlexBox style={{justifyContent: "space-between"}}>
                <EditorComponent
                    editor={leftEditor}
                    placeholder="Matnni bu yerga kiriting"
                    autoFocus={true}
                    hasClearBtn={true}
                    value={leftValue}
                    onChange={onLeftChange}
                    onContentChange={convertToRight}
                />
                <EditorComponent
                    placeholder="Oʻgirilgan matn bu yerda chiqadi"
                    editor={rightEditor}
                    value={rightValue}
                    readOnly/>
            </FlexBox>
        </MainLayout>
    )
}
