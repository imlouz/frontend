import React from "react";
import FlexBox from "../box/FlexBox";
import Link from "next/link";
import ContainerBox from "../box/ContainerBox";
import {useRouter} from 'next/router';
import {eq} from "lodash";

export default function Footer() {
    const {route: currentPath} = useRouter();
    return (
        <footer className="main-footer">
            <ContainerBox>
                <FlexBox>
                    <p className="copyright">
                        © Imlo.uz 2019. Barcha huquqlar himoyalangan.
                    </p>
                    <FooterNav currentPath={currentPath}/>
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
                        
                    `}</style>
        </footer>
    )
}

interface IFooterNavProps {
    currentPath: string,
}

function FooterNav({currentPath}: IFooterNavProps) {
    return <nav className="footer-menu">
        <ul>
            <li>
                <MenuItem href="/" currentPath={currentPath}>
                    Bosh sahifa
                </MenuItem>
            </li>
            <li>
                <MenuItem href="/contact" currentPath={currentPath}>
                    Biz bilan aloqa
                </MenuItem>
            </li>
            <li>
                <MenuItem href="/about" currentPath={currentPath}>
                    Loyiha haqida
                </MenuItem>
            </li>
            <li>
                <MenuItem href="/help" currentPath={currentPath}>
                    Yordam
                </MenuItem>
            </li>
        </ul>
        <style>{`
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
                padding: 7px 15px;
                text-decoration: none;
            }
            .footer-menu li span{
                background-color: #f7f9fd;
                border-radius: 20px;
                padding: 7px 15px;
                letter-spacing: -0.23px;
                font-size: 16px;
                color: #6a7990;
            }
            
            .footer-menu li.active a{
                color: #6a7990;
                letter-spacing: -0.23px;
                padding: 5px 10px;
                text-decoration: none;
            }
            .footer-menu li a:hover{
                text-decoration: underline;
            }
                   
        `}</style>
    </nav>
}

interface ILinkProps {
    href: string,
    currentPath: string,
    children: React.ReactNode
}

function MenuItem({href, currentPath, children}: ILinkProps) {
    return (!eq(currentPath, href) ?
            <Link href={href}>
                <a>{children}</a>
            </Link> :
            <span>{children}</span>
    )
}