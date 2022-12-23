import "../../Transition/transition.scss";
import React, { useState, useEffect } from "react";
import Sky from "../../sky";
import Proyects from "../Proyects";

export default function TransitionProyects() {
  const [transit, setTransit] = useState(false);

  useEffect(() => {
    const meteorite = document.querySelector(".meteorite");

    function handleAnimationEnd() {
      setTransit(true);
    }

    meteorite.addEventListener("animationend", handleAnimationEnd);

    return () =>
      meteorite.removeEventListener("animationend", handleAnimationEnd);
  }, []);

  useEffect(() => {
    setTransit(false);
  }, []);

  return (
    <>
      <Sky />
      {!transit && (
        <>
          <div className="meteorite meteorite-1" />
          <div className="meteorite meteorite-2" />
          <div className="meteorite meteorite-3" />
        </>
      )}
      {transit && <Proyects />}
    </>
  );
}
