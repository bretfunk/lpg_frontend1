import * as React from "react";
import Modal from "react-bootstrap4-modal";

type State = {
  footerModal: boolean;
  footerText: string;
};

export class LandingFooter extends React.Component<{}, State> {
  constructor(props: State) {
    super(props);
    this.state = {
      footerModal: false,
      footerText: "YourBusinessName 2019"
    };
  }

  handleClick = () => {
    this.setState({ footerModal: this.state.footerModal ? false : true });
  };

  render() {
    return (
      <>
        <footer className="container">
          <p onClick={() => this.handleClick()}>
            &copy; {this.state.footerText}
          </p>
        </footer>

        <Modal
          visible={this.state.footerModal}
          onClickBackdrop={() => this.handleClick()}
        >
          <div className="modal-header">
            <h5 className="modal-title">Footer Text</h5>
          </div>
          <div className="modal-body">
            <input
              type="text"
              value={this.state.footerText}
              onChange={e => this.setState({ footerText: e.target.value })}
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => this.handleClick()}
            >
              Submit
            </button>
          </div>
        </Modal>
      </>
    );
  }
}
