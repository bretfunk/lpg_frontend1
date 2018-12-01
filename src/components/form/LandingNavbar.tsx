import * as React from "react";
import Modal from "react-bootstrap4-modal";

type Props = {
  businessName: string;
  businessModal: boolean;
};

export class LandingNavbar extends React.Component<{}, Props> {
  constructor(props: Props) {
    super(props);
    this.state = {
      businessName: "Business",
      businessModal: false
    };
  }
  handleClick = () => {
    this.setState({ businessModal: this.state.businessModal ? false : true });
  };
  render() {
    return (
      <>
        <nav className="navbar navbar-dark bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="#"
            onClick={this.handleClick}
          >
            {this.state.businessName}
          </a>
        </nav>

        <Modal
          visible={this.state.businessModal}
          onClickBackdrop={() => this.handleClick()}
        >
          <div className="modal-header">
            <h5 className="modal-title">Business Name</h5>
          </div>
          <div className="modal-body">
            <input
              type="text"
              onChange={e => this.setState({ businessName: e.target.value })}
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
