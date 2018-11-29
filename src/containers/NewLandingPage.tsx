import * as React from "react";
import { Input } from "../components/form/Input/index";
import { FormGroup } from "../components/layout/FormGroup";

export class NewLandingPage extends React.Component {
  render() {
    return (
      <>
        <h1>New Landing Page</h1>
        <form>
          <FormGroup label="Jumbotron Header">
            <Input
              type="text"
              name="test"
              onChange={() => alert("it works!")}
            />
          </FormGroup>
          <FormGroup label="Jumbotron paragraph text">
            <Input
              type="text"
              name="test"
              onChange={() => alert("it works!")}
            />
          </FormGroup>
          <FormGroup label="Picture 1">
            <Input
              type="file"
              name="test"
              onChange={() => alert("it works!")}
            />
          </FormGroup>
          <FormGroup label="Picture 2">
            <Input
              type="file"
              name="test"
              onChange={() => alert("it works!")}
            />
          </FormGroup>
          <FormGroup label="Picture 3">
            <Input
              type="file"
              name="test"
              onChange={() => alert("it works!")}
            />
          </FormGroup>
          <FormGroup label="Email">
            <Input
              type="email"
              name="email"
              onChange={() => alert("it works!")}
            />
          </FormGroup>
          <FormGroup label="Highlight 1">
            <Input
              type="text"
              name="test"
              onChange={() => alert("it works!")}
            />
          </FormGroup>
          <FormGroup label="Highlight 2">
            <Input
              type="text"
              name="test"
              onChange={() => alert("it works!")}
            />
          </FormGroup>
          <FormGroup label="Highlight 3">
            <Input
              type="text"
              name="test"
              onChange={() => alert("it works!")}
            />
          </FormGroup>
          <input type="submit" name="Submit" />
        </form>
      </>
    );
  }
}
