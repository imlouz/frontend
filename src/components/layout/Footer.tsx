import React from "react";
import FlexBox from "../box/FlexBox";
import Link from "next/link";
import ContainerBox from "../box/ContainerBox";
import {useRouter} from 'next/router';
import {eq} from "lodash";

export default function Footer() {
    const {route} = useRouter();
    console.log("r --- ", route);
    return (
        <footer className="main-footer">
            <ContainerBox>
                <FlexBox>
                    <p className="copyright">
                        © Imlo.uz 2019. Barcha huquqlar himoyalangan.
                    </p>
                    <nav className="footer-menu">
                        <ul>
                            {!eq(route, '/') && <li>
                                <Link href="/">
                                    <a>Bosh sahifa</a>
                                </Link>
                            </li>}
                            {!eq(route, '/about') && <li>
                                <Link href="/about">
                                    <a>Loyiha haqida</a>
                                </Link>
                            </li>}
                        </ul>
                    </nav>
                </FlexBox>
            </ContainerBox>
            <style jsx>{`
                        .main-footer {
                          height: 92px;
                          display:flex;
                          align-items:center;
                          background-color: #ffffff;
                        }
                        .copyright{
                              font-size: 16px;
                              letter-spacing: -0.23px;
                              color: #6a7990;
                              margin:0;
                        }
                        .footer-menu{
                              font-size: 16px;
                              margin:0;
                              text-align: right;
                              flex:1;
                        }
                        
                        .footer-menu ul{
                              margin:0;
                        }
                        .footer-menu li{
                            list-style:none;
                            display: inline-block;
                            margin:0;
                        }
                        
                        .footer-menu li a{
                            color: #6a7990;
                            letter-spacing: -0.23px;
                            padding: 5px 10px;
                            text-decoration: none;
                        }
                        .footer-menu li a:hover{
                            text-decoration: underline;
                        }
                    `}</style>
        </footer>
    )
}