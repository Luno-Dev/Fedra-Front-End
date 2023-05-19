import React from 'react';
import { useRouter } from 'next/router';
import Link from "next/link";

const ActiveLink = ({children, href}) => {
    const router = useRouter()

    const style = {
        color: router.asPath === href? "#00ABF0" : ""
    }

    const handleClick = (e) => {
        e.preventDefault()
        router.push(href)
    }

    return (
        <Link className="ms-auto nav-link" href={href} onClick={handleClick} style={style}>
            {children}
        </Link>
    );
};

export default ActiveLink;