import * as React from "react";
import Modal from "react-bootstrap4-modal";
import { Navbar } from "../components/layout/Navbar";
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
      <>
        {this.state.choosing && (
          <>
            <Navbar />
            <div className="container">
              <h1 className="m-3">Choose A Landing Page Style:</h1>
              <div className="row">
                <div className="m-3">
                  <img
                    src="../images/Landing1.png"
                    onClick={() =>
                      this.setState({ choice: "Landing1", choosing: false })
                    }
                  />
                </div>
                <div className="m-3">
                  <img
                    src="../images/Landing1.png"
                    onClick={() =>
                      this.setState({ choice: "Landing1", choosing: false })
                    }
                  />
                </div>
                <div className="m-3">
                  <img
                    src="../images/Landing1.png"
                    onClick={() =>
                      this.setState({ choice: "Landing1", choosing: false })
                    }
                  />
                </div>
                <div className="m-3">
                  <img
                    src="../images/Landing1.png"
                    onClick={() =>
                      this.setState({ choice: "Landing1", choosing: false })
                    }
                  />
                </div>
                <div className="m-3">
                  <img
                    src="../images/Landing1.png"
                    onClick={() =>
                      this.setState({ choice: "Landing1", choosing: false })
                    }
                  />
                </div>
                <div className="m-3">
                  <img
                    src="../images/Landing1.png"
                    onClick={() =>
                      this.setState({ choice: "Landing1", choosing: false })
                    }
                  />
                </div>
              </div>
            </div>
          </>
        )}
        {!this.state.choosing && <PageSelector choice={this.state.choice} />}
      </>
    );
  }
}
