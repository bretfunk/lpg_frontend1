import * as React from "react";
import Modal from "react-bootstrap4-modal";
import { LandingNavbar } from "../../components/form/LandingNavbar";
import { LandingJumbotron } from "../../components/form/LandingJumbotron";
import { LandingColumns } from "../../components/form/LandingColumns";
import { LandingFooter } from "../../components/form/LandingFooter";
import { SubmitNavbar } from "../layout/SubmitNavbar";

export const Landing1: React.SFC = props => (
  <form onSubmit={() => alert("form submitted!")}>
    <LandingNavbar />
    <LandingJumbotron />
    <LandingColumns />
    <LandingFooter />
    <SubmitNavbar />
  </form>
);
