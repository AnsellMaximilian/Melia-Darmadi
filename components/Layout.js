import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import BrandSVG from './BrandSVG'

export default function Layout({children}) {
    return (
        <div>
            <Head>
                <title>Melia Darmadi</title>
                <meta name="description" content="Website Melia Darmadi" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="main-header">
                <div className="container">
                    <nav className="navbar">
                        <div className="nav-list">
                            <Link href="/">
                                <a>
                                    <BrandSVG/>
                                </a>
                            </Link>
                            <Link href="/makanan">
                                <a>Makanan</a>
                            </Link>
                            <Link href="/">
                                <a>Pudding</a>
                            </Link>
                        </div>
                
                    </nav>
                </div>
            </header>

            <main className="container">
                {children}
            </main>

            <footer>
            </footer>
        </div>
    )
}
