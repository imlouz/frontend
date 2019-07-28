import React from "react";
import FlexBox from "../box/FlexBox";
import LogoSVG from "../icons/LogoSVG";
import ContainerBox from "../box/ContainerBox";
import Link from "next/link";

export default function Header() {
    return (
        <header className="main-header">
            <ContainerBox>
                <FlexBox>
                    <Link href="/">
                        <a>
                            <LogoSVG height={36}/>
                        </a>
                    </Link>
                </FlexBox>
            </ContainerBox>
            <style jsx>{`
                        .main-header {
                          height: 70px;
                          display:flex;
                          align-items:center;
                          background-color: #ffffff;
                          box-shadow: 0 2px 2px #eff3fb,0 10px 15px #eff3fb;
                        }
                    `}</style>
        </header>
    )
}