import * as React from "react";
import Modal from "react-bootstrap4-modal";

type State = {
  columnOne: string;
  columnTwo: string;
  columnThree: string;
  headingOne: string;
  headingTwo: string;
  headingThree: string;
  columnsModal: boolean;
};

export class LandingColumns extends React.Component<{}, State> {
  constructor(props: State) {
    super(props);
    this.state = {
      columnsModal: false,
      headingOne: "Heading One",
      headingTwo: "Heading Two",
      headingThree: "Heading Three",
      columnOne:
        "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
      columnTwo:
        "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
      columnThree:
        "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui."
    };
  }

  handleClick = () => {
    this.setState({ columnsModal: this.state.columnsModal ? false : true });
  };

  render() {
    const { columnsModal } = this.state;
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h2>{this.state.headingOne}</h2>
              <p onClick={e => this.handleClick()}>{this.state.columnOne}</p>
              <p>
                <a className="btn btn-secondary" href="#" role="button">
                  View details &raquo;
                </a>
              </p>
            </div>
            <div className="col-md-4">
              <h2>{this.state.headingTwo}</h2>
              <p onClick={e => this.handleClick()}>{this.state.columnTwo}</p>
              <p>
                <a className="btn btn-secondary" href="#" role="button">
                  View details &raquo;
                </a>
              </p>
            </div>
            <div className="col-md-4">
              <h2>{this.state.headingThree}</h2>
              <p onClick={e => this.handleClick()}>{this.state.columnThree}</p>
              <p>
                <a className="btn btn-secondary" href="#" role="button">
                  View details &raquo;
                </a>
              </p>
            </div>
          </div>
        </div>

        <Modal visible={columnsModal} onClickBackdrop={e => this.handleClick()}>
          <div className="modal-body">
            <h5 className="modal-title">Heading One</h5>
            <input
              type="text"
              style={{ width: "100%" }}
              value={this.state.headingOne}
              onChange={e => this.setState({ headingOne: e.target.value })}
            />
            <textarea
              value={this.state.columnOne}
              rows={8}
              style={{ width: "100%" }}
            />
            <h5 className="modal-title">Heading Two</h5>
            <input
              type="text"
              style={{ width: "100%" }}
              value={this.state.headingTwo}
              onChange={e => this.setState({ headingTwo: e.target.value })}
            />
            <textarea
              value={this.state.columnTwo}
              rows={8}
              style={{ width: "100%" }}
            />
            <h5 className="modal-title">Heading Three</h5>
            <input
              type="text"
              style={{ width: "100%" }}
              value={this.state.headingThree}
              onChange={e => this.setState({ headingThree: e.target.value })}
            />
            <textarea
              value={this.state.columnThree}
              rows={8}
              style={{ width: "100%" }}
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              value={this.state.headingOne}
              className="btn btn-primary"
              onClick={e => this.handleClick()}
            >
              Submit
            </button>
          </div>
        </Modal>
      </>
    );
  }
}
