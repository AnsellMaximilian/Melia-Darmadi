import React from "react";
import Head from "next/head";
import Link from "next/link";
import BrandSVG from "./BrandSVG";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export default function Layout({ children, makanan, makananDetail }) {
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
            <Link href="/">
              <a className="nav-brand">
                <Image
                  src={"/images/brand.svg"}
                  alt="brand"
                  width={90 * 0.9}
                  height={50 * 0.9}
                />
              </a>
            </Link>
            <div className="nav-list">
              <Link href="/makanan">
                <a className={makanan ? "active" : ""}>Makanan</a>
              </Link>
              <Link href="/">
                <a className={makananDetail ? "active" : ""}>Pudding</a>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="footer">
        <div className="container">
          <div className="footer__content">
            <div className="footer__socials">
              <a href="#" className="footer__social-item">
                <div>
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
              </a>
              <a href="#" className="footer__social-item">
                <div>
                  <FontAwesomeIcon icon={faWhatsapp} />
                </div>
              </a>
              <a href="#" className="footer__social-item">
                <div>
                  <FontAwesomeIcon icon={faFacebook} />
                </div>
              </a>
            </div>
            <div className="footer__brand">
              <Link href="/">
                <a>
                  <BrandSVG negative />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
