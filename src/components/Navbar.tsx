import { navigationPaths } from "../data/paths";
import "./Navbar.css";
import { useState } from "react";

export function Navbar() {
  const [isExpanded, setIExpanded] = useState<boolean>(false);

  return (
    <>
      <button
        className="hamburger-button"
        onClick={() => setIExpanded(!isExpanded)}
      >
        {" "}
        <div
          className={`hamburger-icon ${isExpanded ? "open": ""}` }
          onClick={() => setIExpanded(!isExpanded)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <nav className={isExpanded ? "" : "hidden"}>
        {navigationPaths.map((nav) => {
          if (nav.name === "LinkedIn" || nav.name === "Github") {
            return (
              <div key={nav.id} className="nav-item">
                <a href={nav.path} target="_blank">
                  <div className={nav.name}></div>
                  {nav.name}
                </a>
              </div>
            );
          } else {
            return (
              <div key={nav.id} className="nav-item">
                <a onClick={() => setIExpanded(false)} href={nav.path}>
                  {nav.name}
                </a>
              </div>
            );
          }
        })}
      </nav>
    </>
  );
}
