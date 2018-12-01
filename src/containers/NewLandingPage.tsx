import * as React from "react";
import Modal from "react-bootstrap4-modal";
import { Landing1 } from "../components/LandingPages/Landing1";
import { LandingError } from "../components/LandingPages/LandingError";

type State = {
  choice: string;
  choosing: boolean;
};

type Props = {
  choice: string;
};

// remove any
// add ...props
const PageSelector: React.SFC<any> = props => {
  switch (props.choice) {
    case "Landing1": {
      return <Landing1 />;
    }
    default: {
      return <LandingError />;
    }
  }
};

export class NewLandingPage extends React.Component<{}, State> {
  constructor(props: State) {
    super(props);
    this.state = {
      choosing: true,
      choice: ""
    };
  }

  handleClick = (page: string) => {};

  render() {
    return (
      <div>
        <h1>Choose Style</h1>
        <button
          onClick={() => this.setState({ choice: "Landing1", choosing: false })}
        >
          Style 1
        </button>
        {!this.state.choosing && <PageSelector choice={this.state.choice} />}
      </div>
    );
  }
}
