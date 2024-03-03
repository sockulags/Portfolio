import { navigationPaths } from "../data/paths";
import "./Navbar.css";

export function Navbar() {
  return (
    <nav>
      {navigationPaths.map((nav) => {
        if (nav.name === "LinkedIn" || nav.name === "Github") {
          return (
            <div key={nav.id} className="nav-item">             
              <a href={nav.path} target="_blank"> <div className={nav.name}></div>{nav.name}</a>
            </div>
          );
        } else {
          return (
            <div key={nav.id} className="nav-item">
              <a href={nav.path}>{nav.name}</a>
            </div>
          );
        }
      })}
    </nav>
  );
}
