import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div>
      <nav>
        <ul className="d-flex list-unstyled gap-3">
          <li>
            <Link to="/">Logo</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
