import * as React from "react";
import { Navbar } from "../components/layout/Navbar";

export const Home: React.SFC = props => (
  <>
    <nav className="navbar navbar-dark bg-dark flex-md-nowrap p-0 shadow">
      <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="/">
        5min
      </a>
      <ul className="navbar-nav px-3">
        <div className="row">
          <li className="nav-item text-nowrap pr-3">
            <a className="nav-link" href="/landingpages/new">
              Try It Now
            </a>
          </li>
          <li className="nav-item text-nowrap pr-3">
            <a className="nav-link" href="#">
              Sign In
            </a>
          </li>
        </div>
      </ul>
    </nav>

    <div className="jumbotron">
      <div className="container">
        <h1 className="display-3">Hello, world!</h1>
        <p>
          This is a template for a simple marketing or informational website. It
          includes a large callout called a jumbotron and three supporting
          pieces of content. Use it as a starting point to create something more
          unique.
        </p>
        <p>
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Learn more &raquo;
          </a>
        </p>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h2>Heading</h2>
          <p>
            Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
            tellus ac cursus commodo, tortor mauris condimentum nibh, ut
            fermentum massa justo sit amet risus. Etiam porta sem malesuada
            magna mollis euismod. Donec sed odio dui.{" "}
          </p>
          <p>
            <a className="btn btn-secondary" href="#" role="button">
              View details &raquo;
            </a>
          </p>
        </div>
        <div className="col-md-4">
          <h2>Heading</h2>
          <p>
            Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
            tellus ac cursus commodo, tortor mauris condimentum nibh, ut
            fermentum massa justo sit amet risus. Etiam porta sem malesuada
            magna mollis euismod. Donec sed odio dui.{" "}
          </p>
          <p>
            <a className="btn btn-secondary" href="#" role="button">
              View details &raquo;
            </a>
          </p>
        </div>
        <div className="col-md-4">
          <h2>Heading</h2>
          <p>
            Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Vestibulum id ligula porta felis euismod semper.
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh, ut fermentum massa justo sit amet risus.
          </p>
          <p>
            <a className="btn btn-secondary" href="#" role="button">
              View details &raquo;
            </a>
          </p>
        </div>
      </div>
    </div>
    <hr />

    <footer className="container">
      <p>&copy; Company 2017-2018</p>
    </footer>
  </>
);
