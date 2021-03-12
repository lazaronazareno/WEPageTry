import React from "react";
import { useState } from "react";
import "./styles.scss";

function Burger() {
  const [menuActive, setMenuState] = useState(false);
  return (
    <div>
      <button
        type="button"
        className={`burger ${menuActive ? "burgerchanged" : ""}`}
        onClick={() => setMenuState(!menuActive)}
      >
        <div className={`bar1 ${menuActive ? "changed1" : ""}`} />
        <div className={`bar2 ${menuActive ? "changed2" : ""}`} />
        <div className={`bar3 ${menuActive ? "changed3" : ""}`} />
      </button>
    </div>
  );
}

export default Burger;
