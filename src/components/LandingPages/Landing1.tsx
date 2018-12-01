import * as React from "react";
import Modal from "react-bootstrap4-modal";
import { LandingNavbar } from "../../components/form/LandingNavbar";
import { LandingJumbotron } from "../../components/form/LandingJumbotron";
import { LandingColumns } from "../../components/form/LandingColumns";

export const Landing1: React.SFC = props => (
  <form onSubmit={() => alert("form submitted!")}>
    <LandingNavbar />
    <LandingJumbotron />
    <LandingColumns />
    <button className="btn btn-primary">Submit</button>
  </form>
);
