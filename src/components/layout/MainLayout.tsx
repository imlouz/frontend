import React from "react"
import Link from "next/link"
import StyleMainLayout from "./StyleMainLayout"
import Head from "next/head"

interface IProps {
    customHead?: React.ReactChildren | React.ReactChildren
    pageTitle?: string
    children: React.ReactChildren | React.ReactChild | React.ReactNode
}

export default function MainLayout({ pageTitle, customHead, children }: IProps): JSX.Element {
    return (
        <div>
            <Head>
                <title>{pageTitle || "Tekshir.uz"}</title>
                <link
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    rel="stylesheet"
                />
                {customHead}
            </Head>
            <header>
                <h1>Tekshir.uz</h1>
            </header>
            {children}
            <footer>
                <nav>
                    <ul>
                        <li>
                            <Link href="/">
                                <a>Bosh sahifa</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <a>Loyiha haqida</a>
                            </Link>
                        </li>
                    </ul>
                    <style jsx>{`
                        ul {
                            list-style: none;
                            padding: 0;
                            margin: 0;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }
                        ul > li {
                            padding: 10px;
                        }
                    `}</style>
                </nav>
            </footer>
            <StyleMainLayout />
        </div>
    )
}
