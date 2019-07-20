import React from "react"
import Head from "next/head"
import Header from "./Header";
import Footer from "./Footer";
import ContainerBox from "../box/ContainerBox";
import FlexBox from "../box/FlexBox";

interface IProps {
    customHead?: React.ReactChildren | React.ReactChildren
    pageTitle?: string
    children: React.ReactChildren | React.ReactChild | React.ReactNode
}

export default function MainLayout({pageTitle, customHead, children}: IProps): JSX.Element {
    return (
        <FlexBox direction="column" style={{minHeight: '100vh'}}>
            <Head>
                <title>{pageTitle || "Tekshir.uz"}</title>
                <link
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    rel="stylesheet"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta charSet="utf-8"/>
                {customHead}
            </Head>
            <Header/>
            <ContainerBox className="main-container">
                {children}
            </ContainerBox>
            <Footer/>
            <style jsx global>
                {`
                    body {
                        margin: 0;
                    }
                    html,
                    input,
                    textarea {
                        font-family: "Roboto", sans-serif;
                        line-height: 1.4;
                        background: #FDFDFD;
                    }
                     p {
                        margin: 0 0 15px;
                    }

                    pre {
                        padding: 10px;
                        background-color: #eee;
                        white-space: pre-wrap;
                    }

                    :not(pre) > code {
                        font-family: monospace;
                        // background-color: #eee;
                        padding: 3px;
                    }

                    img {
                        max-width: 100%;
                        max-height: 20em;
                    }

                    blockquote {
                        border-left: 2px solid #ddd;
                        margin-left: 0;
                        margin-right: 0;
                        padding-left: 10px;
                        color: #aaa;
                        font-style: italic;
                    }

                    blockquote[dir="rtl"] {
                        border-left: none;
                        padding-left: 0;
                        padding-right: 10px;
                        border-right: 2px solid #ddd;
                    }

                    table {
                        border-collapse: collapse;
                    }

                    td {
                        padding: 10px;
                        border: 2px solid #ddd;
                    }

                    input {
                        box-sizing: border-box;
                        font-size: 0.85em;
                        width: 100%;
                        padding: 0.5em;
                        border: 2px solid #ddd;
                        background: #fafafa;
                    }

                    input:focus {
                        outline: 0;
                        border-color: blue;
                    }

                    [data-slate-editor] > * + * {
                        margin-top: 0;
                    }
                `}
            </style>
        </FlexBox>
    )
}
