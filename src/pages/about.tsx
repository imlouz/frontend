import React from "react"
import Link from "next/link"
import MainLayout from "../components/layout/MainLayout"

interface IProps {}

export default function IndexPage(props: IProps): JSX.Element {
    // console.log(props)
    return (
        <MainLayout pageTitle={"Loyiha haqida"}>
            <Link href="/">
                <a>Bosh sahifa</a>
            </Link>
        </MainLayout>
    )
}
