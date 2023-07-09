import React from 'react';
import { useRouter } from 'next/router';
import Link from "next/link";

const ActiveLink = ({ children, href }) => {
    const router = useRouter()
    const active = router.asPath === href

    const style = active ? "ms-auto nav-link activeLink" : "ms-auto nav-link"

    const handleClick = (e) => {
        e.preventDefault()
        router.push(href)
    }

    return (
        <Link className={style} href={href} onClick={handleClick}>
            {children}
        </Link>
    );
};

export default ActiveLink;