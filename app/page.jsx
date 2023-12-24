import React from "react";
import "./globals.css";
import myImg from "../public/openYourEyesMorty.png";
import Image from "next/image";

const HomePage = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        Welcome to Pages directory next.js
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Image src={myImg} alt="Open Your Eyes Morty" />
      </div>
      <div className="home-article">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          veniam earum ipsa voluptates amet accusantium debitis magnam saepe
          consequatur dolor maxime hic accusamus quia, deleniti quasi optio
          doloribus nulla recusandae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quo
          eveniet voluptatibus voluptates incidunt aliquid, odio dolore alias
          accusantium repudiandae aperiam non deserunt eius, laudantium
          voluptatem provident assumenda porro eligendi.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
