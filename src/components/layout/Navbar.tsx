import * as React from "react";

export const Navbar: React.SFC = props => (
  <>
    <nav className="navbar navbar-dark bg-dark flex-md-nowrap p-0 shadow">
      <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">
        5min
      </a>
      <ul className="navbar-nav px-3">
        <div className="row">
          <li className="nav-item text-nowrap pr-3">
            <a className="nav-link" href="/dashboard">
              Dashboard
            </a>
          </li>
          <li className="nav-item text-nowrap pr-3">
            <a className="nav-link" href="/landingpages/new">
              New Page
            </a>
          </li>
          <li className="nav-item text-nowrap pr-3">
            <a className="nav-link" href="#">
              Sign out
            </a>
          </li>
        </div>
      </ul>
    </nav>
  </>
);
