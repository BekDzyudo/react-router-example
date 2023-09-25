import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export function About() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>About</h1>
      <button onClick={() => navigate(-1)} className="btn btn-success">
        Back
      </button>
      <ul className="d-flex list-unstyled gap-3">
        <li>
          <Link to="company">Company</Link>
        </li>
        <li>
          <Link to="team">Team</Link>
        </li>
        <li>
          <Link to="param">Param</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
