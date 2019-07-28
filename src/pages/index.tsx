import React, {useCallback, useRef, useState} from "react"
import {debounce} from "lodash"
import EditorComponent from "../components/editor/EditorComponent"
import {Value} from "slate"
import initialJson from "../components/editor/editor_value.json"
import MainLayout from "../components/layout/MainLayout"
import * as editorUtils from "../helpers/editorUtils"
import FlexBox from "../components/box/FlexBox"
import Link from "next/link";

const initialValue = Value.fromJSON(initialJson)

export default function IndexPage(): JSX.Element {
    const [leftValue, setLeftValue] = useState<Value>(initialValue)
    const [rightValue, setRightValue] = useState<Value>(initialValue)
    const leftEditor = useRef<any>()
    const rightEditor = useRef<any>()

    const convertToRight = useCallback(
        debounce(editorUtils.converyToCrylicWithApi(leftEditor, rightEditor), 300),
        []
    )

    const onLeftChange = useCallback(({value}) => {
        setLeftValue(value)
    }, [leftValue])


    const onClearEditors = useCallback(() => {
        setLeftValue(initialValue)
        setRightValue(initialValue)
    }, [])

    return (
        <MainLayout pageTitle="Tekshir.uz">
            <FlexBox style={{justifyContent: "space-between"}}>
                <FlexBox direction={"column"} style={{width:"49%"}}>
                    <FlexBox className="editor-header">
                        <Link href="/">Avtomatik tarzda</Link>
                        <Link href="/?type=lat2cyr">Lotin</Link>
                        <Link href="/?type=cyr2lat">Kiril</Link>
                    </FlexBox>
                    <EditorComponent
                        editor={leftEditor}
                        onClear={onClearEditors}
                        placeholder="Matnni bu yerga kiriting"
                        autoFocus={true}
                        hasClearBtn={true}
                        value={leftValue}
                        onChange={onLeftChange}
                        onContentChange={convertToRight}
                    />
                </FlexBox>

                <FlexBox direction={"column"} style={{width:"49%"}}>
                    <FlexBox className="editor-header">
                        <Link href="/?type=lat2cyr">Kiril</Link>
                        <Link href="/?type=cyr2lat">Lotin</Link>
                    </FlexBox>
                    <EditorComponent
                        placeholder="Oʻgirilgan matn bu yerda chiqadi"
                        editor={rightEditor}
                        value={rightValue}
                    />
                </FlexBox>
                <style>{`
                    .editor-header a{
                        color: #8d9aaf;
                        text-decoration: none;
                        padding: 10px
                    }
                `}</style>
            </FlexBox>
        </MainLayout>
    )
}
