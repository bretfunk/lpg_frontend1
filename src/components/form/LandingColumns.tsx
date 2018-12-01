import * as React from "react";
import Modal from "react-bootstrap4-modal";

type Props = {
  headingOne: string;
  headingTwo: string;
  headingThree: string;
  headingOneModal: boolean;
  headingTwoModal: boolean;
  headingThreeModal: boolean;
};

export class LandingColumns extends React.Component<{}, Props> {
  constructor(props: Props) {
    super(props);
    this.state = {
      headingOne:
        "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
      headingTwo:
        "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
      headingThree:
        "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
      headingOneModal: false,
      headingTwoModal: false,
      headingThreeModal: false
    };
  }

  handleClick = (e: any, modal: string) => {
    e.stopPropagation();
    switch (modal) {
      case "headingOneModal": {
        this.setState({
          headingOneModal: this.state.headingOneModal ? false : true
        });
      }
      case "headingTwoModal": {
        this.setState({
          headingTwoModal: this.state.headingTwoModal ? false : true
        });
      }
      case "headingThreeModal": {
        this.setState({
          headingThreeModal: this.state.headingThreeModal ? false : true
        });
      }
    }
  };
  render() {
    const { headingOneModal, headingTwoModal, headingThreeModal } = this.state;
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h2>Heading</h2>
              <p onClick={e => this.handleClick(e, "headingOneModal")}>
                {this.state.headingOne}
              </p>
              <p>
                <a className="btn btn-secondary" href="#" role="button">
                  View details &raquo;
                </a>
              </p>
            </div>
            <div className="col-md-4">
              <h2>Heading</h2>
              <p onClick={e => this.handleClick(e, "headingTwoModal")}>
                {this.state.headingTwo}
              </p>
              <p>
                <a className="btn btn-secondary" href="#" role="button">
                  View details &raquo;
                </a>
              </p>
            </div>
            <div className="col-md-4">
              <h2>Heading</h2>
              <p onClick={e => this.handleClick(e, "headingThreeModal")}>
                {this.state.headingThree}
              </p>
              <p>
                <a className="btn btn-secondary" href="#" role="button">
                  View details &raquo;
                </a>
              </p>
            </div>
          </div>
        </div>
        ;
        <Modal
          visible={headingOneModal}
          onClickBackdrop={e => this.handleClick(e, "headingOneModal")}
        >
          <div className="modal-header">
            <h5 className="modal-title">Heading One</h5>
          </div>
          <div className="modal-body">
            <input
              type="text"
              onChange={e => this.setState({ headingOne: e.target.value })}
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={e => this.handleClick(e, "headingOneModal")}
            >
              Submit
            </button>
          </div>
        </Modal>
        <Modal
          visible={headingTwoModal}
          onClickBackdrop={e => this.handleClick(e, "headingTwoModal")}
        >
          <div className="modal-header">
            <h5 className="modal-title">Heading Two</h5>
          </div>
          <div className="modal-body">
            <input
              type="text"
              onChange={e => this.setState({ headingTwo: e.target.value })}
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={e => this.handleClick(e, "headingTwoModal")}
            >
              Submit
            </button>
          </div>
        </Modal>
        <Modal
          visible={headingThreeModal}
          onClickBackdrop={e => this.handleClick(e, "headingThreeModal")}
        >
          <div className="modal-header">
            <h5 className="modal-title">Heading Three</h5>
          </div>
          <div className="modal-body">
            <input
              type="textarea"
              onChange={e => this.setState({ headingThree: e.target.value })}
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={e => this.handleClick(e, "headingThreeModal")}
            >
              Submit
            </button>
          </div>
        </Modal>
      </>
    );
  }
}
