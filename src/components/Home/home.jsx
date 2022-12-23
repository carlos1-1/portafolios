import React from "react";
import "../Home/home.scss";
import Sky from "../sky";
import Welcome from "../Welcome/welcome";

export default function Home() {
  return (
    <div className="main-container">
      <Sky />
      <Welcome />
    </div>
  );
}
