import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
// import DynamicLoader from '../components/DynamicComponentLoader';
import EditorComponent from '../components/EditorComponent';
import "./index.css"
// const EditorComponent = lazy(() => import('../components/EditorComponent'));
interface IProps {

}

export default function IndexPage(props: IProps) {
    console.log(props)
    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            </Head>
            <h1>Hello World</h1>
            <Link href='/about'><a>About us</a></Link>
            <div>
                <EditorComponent />
            </div>
        </>
    )
}