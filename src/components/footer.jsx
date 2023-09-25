import React from "react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <div>
      <ul className="d-flex list-unstyled gap-3">
        <li>
          <Link to="/">Biz haqimizda</Link>
        </li>
        <li>
          <Link to="/contact">tel: 93 854 99 09</Link>
        </li>
      </ul>
    </div>
  );
}
