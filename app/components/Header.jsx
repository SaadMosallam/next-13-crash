import Link from "next/link";
import myImg from "../../public/openYourEyesMorty.png";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link href="/">
          <Image width={100} src={myImg} alt="Open Your Eyes Morty" />
          Open Your Eyes Morty
        </Link>
      </div>

      <div className="links">
        <Link href="/about">About</Link>
        <Link href="/about/team">Our Team</Link>
        <Link href="/code/repos">Code</Link>
      </div>
    </header>
  );
};

export default Header;
