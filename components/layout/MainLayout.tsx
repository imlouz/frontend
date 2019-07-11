import React from "react";
import Link from "next/link"

interface IProps {
    children: React.ReactChildren | React.ReactChild | React.ReactNode
}

export default function MainLayout(props: IProps) {
    return <div>
        {props.children}
        <footer>
            <nav>
                <ul>
                    <li><Link><a href="/">Bosh sahifa</a></Link></li>
                    <li><Link><a href="/about">Loyiha haqida</a></Link></li>
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
    </div>
}