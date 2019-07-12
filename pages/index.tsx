import React, {useCallback, useRef, useState} from 'react'
import {debounce} from "lodash"
import EditorComponent from '../components/editor/EditorComponent';
import {Value} from "slate";
import initialJson from '../components/editor/editor_value.json'
import MainLayout from "../components/layout/MainLayout";
import * as editorUtils from "../helpers/editorUtils";
import FlexBox from "../components/box/FlexBox";

const initialValue = Value.fromJSON(initialJson);

export default function IndexPage(): JSX.Element {
    const [leftValue, setLeftValue] = useState<Value>(initialValue)
    const [rightValue, setRightValue] = useState<Value>(initialValue)
    const leftEditor = useRef<any>();
    const rightEditor = useRef<any>();

    const convertToRight = useCallback(debounce(
        editorUtils.converyToCrylic(leftEditor, rightEditor), 300), [])

    const onLeftChange = useCallback(({value}) => {
        setLeftValue(value)
    }, [])

    return (
        <MainLayout pageTitle="Tekshir.uz">
            <FlexBox>
                <div style={{width: '50%'}}>
                    <EditorComponent
                        editor={leftEditor}
                        value={leftValue}
                        onChange={onLeftChange}
                        onContentChange={convertToRight}
                    />
                </div>
                <div style={{width: '50%', paddingLeft: 60}}>
                    <EditorComponent
                        editor={rightEditor}
                        value={rightValue}
                        readOnly
                    />
                </div>
            </FlexBox>
        </MainLayout>
    )
}