import React from 'react'
import Link from 'next/link'

interface IProps {

}

export default function IndexPage(props: IProps) {
    console.log(props)
    return (
        <>
            <h1>About Project</h1>
            <Link href='/'><a>Home page</a></Link>
        </>
    )
}