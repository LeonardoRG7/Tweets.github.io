import React from "react";
import "../scss/Header.scss";
import logoHeader from "../img/twitter-logo.png";

export default function Header() {
  return (
    <div className="Header">
      <img src={logoHeader} alt="Logo Header" />
      <h1>Tweets simulator</h1>
    </div>
  );
}
