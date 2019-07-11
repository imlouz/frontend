import React, {useRef, useState} from 'react'
import Head from 'next/head'
import {debounce} from "lodash"
import EditorComponent from '../components/EditorComponent';
import "./index.css"
import {Value} from "slate";
import initialJson from '../components/editor_value.json'
import MainLayout from "../components/layout/MainLayout";
import * as parseUtils from "../helpers/parseUtils";

const initialValue = Value.fromJSON(initialJson);

export default function IndexPage() {
    const [leftValue, setLeftValue] = useState<Value>(initialValue)
    const [rightValue, setRightValue] = useState<Value>(initialValue)
    const leftEditor = useRef<any>();
    const rightEditor = useRef<any>();

    const latinParseFn = () => {
        let htmlContent = leftEditor.current.el.innerHTML;
        htmlContent += "<";

        htmlContent = htmlContent.replace(/(>?)(.[^>]+)(<)/g,
            (all: string, b: string, c: string, f: string): string => {
                let parsed_str = parseUtils.parseToCrylic(c);
                parsed_str = parsed_str.replace(/&([^;]+);/g, (all: string, first: string) =>
                    "&" + parseUtils.parseToLatin(first) + ";")
                return String(b + parsed_str + f);
            })
        htmlContent = htmlContent.slice(0, -1);
        rightEditor.current.el.innerHTML = htmlContent
    }
    // const crylicParseFn = () => {
    //     let htmlContent = rightEditor.current.el.innerHTML;
    //
    //     htmlContent += "<";
    //
    //     htmlContent = htmlContent.replace(/(>?)(.[^>]+)(<)/g,
    //         (all: string, b: string, c: string, f: string): string => {
    //             let parsed_str = parseUtils.parseToLatin(c);
    //             return String(b + parsed_str + f);
    //         })
    //     htmlContent = htmlContent.slice(0, -1);
    //
    //     leftEditor.current.el.innerHTML = htmlContent
    // }
    const debounceLatinFn  = debounce(latinParseFn, 500)
    // const debounceCrylicFn  = debounce(crylicParseFn, 500)

    const onLeftChange = ({value}) => {
        setLeftValue(value)
        debounceLatinFn()
    }
    //
    // const onRightChange = ({value}) => {
    //     setRightValue(value)
    //
    // }
    return (
        <MainLayout>
            <Head>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
            </Head>
            <h1>Tekshir.uz</h1>
            <div className="flex-box">
                <EditorComponent editor={leftEditor} value={leftValue} onChange={onLeftChange} onKeyUp={debounceLatinFn}/>
                <EditorComponent editor={rightEditor} value={rightValue} readOnly/>
            </div>

            <style jsx>{`
                    .flex-box{
                        display:flex;
                        min-height:450px;
                    }
                    .flex-box  .editor{
                        flex:50%;
                    }
             
                `}</style>
        </MainLayout>
    )
}