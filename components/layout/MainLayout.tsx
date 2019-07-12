import React from "react";
import Link from "next/link"
import IndexStyles from "./IndexStyles";

interface IProps {
    children: React.ReactChildren | React.ReactChild | React.ReactNode
}

export default function MainLayout(props: IProps):JSX.Element {
    return <div>
        {props.children}
        <footer>
            <nav>
                <ul>
                    <li><Link href="/"><a >Bosh sahifa</a></Link></li>
                    <li><Link href="/about"><a >Loyiha haqida</a></Link></li>
                </ul>
                <style jsx>{`
                    ul{
                        list-style:none;
                        padding:0;
                        margin:0;
                        display:flex;
                        align-items: center;
                        justify-content: center;
                    }
                    ul > li{
                        padding: 10px;
                    }
                `}</style>
            </nav>
        </footer>
        <IndexStyles/>
    </div>
}