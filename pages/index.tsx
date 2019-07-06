import React, {useState} from 'react'
import Head from 'next/head'
import EditorComponent from '../components/EditorComponent';
import "./index.css"
import {Value} from "slate";
import initialJson from '../components/editor_value.json'
import MainLayout from "../components/layout/MainLayout";

const initialValue = Value.fromJSON(initialJson);

export default function IndexPage() {
    const [leftValue, setLeftValue] = useState<Value>(initialValue)
    const [rightValue, setRightValue] = useState<Value>(initialValue)

    const onLeftChange = ({value}) => {
        setLeftValue(value)
    }
    const onRightChange = ({value}) => {
        setRightValue(value)
    }
    return (
        <MainLayout>
            <Head>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
            </Head>
            <h1>Tekshir.uz</h1>
            <div className="flex-box">
                <EditorComponent value={leftValue} onChange={onLeftChange}/>
                <EditorComponent value={rightValue} onChange={onRightChange}/>
            </div>

            <style jsx>{`
                    .flex-box{
                        display:flex;
                        min-height:450px;
                    }
                `}</style>
        </MainLayout>
    )
}