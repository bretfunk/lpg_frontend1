import * as React from "react";
import Modal from "react-bootstrap4-modal";

type State = {
  jumbotronModal: boolean;
  jumbotronTitle: string;
  jumbotronParagraph: string;
};

export class LandingJumbotron extends React.Component<{}, State> {
  constructor(props: State) {
    super(props);
    this.state = {
      jumbotronModal: false,
      jumbotronTitle: "Jumbotron Title",
      jumbotronParagraph:
        "This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique."
    };
  }

  handleClick = () => {
    this.setState({
      jumbotronModal: this.state.jumbotronModal ? false : true
    });
  };

  render() {
    const { jumbotronModal, jumbotronTitle, jumbotronParagraph } = this.state;
    return (
      <>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-3" onClick={() => this.handleClick()}>
              {jumbotronTitle}
            </h1>
            <p className="lead" onClick={() => this.handleClick()}>
              {jumbotronParagraph}
            </p>
            <p>
              <a className="btn btn-primary" href="#" role="button">
                Learn more &raquo;
              </a>
            </p>
          </div>
        </div>

        <Modal
          visible={jumbotronModal}
          onClickBackdrop={() => this.handleClick()}
        >
          <div className="modal-header">
            <h5 className="modal-title">Jumbotron Title</h5>
          </div>
          <div className="modal-body">
            <input
              type="text"
              style={{ width: "100%" }}
              value={this.state.jumbotronTitle}
              onChange={e => this.setState({ jumbotronTitle: e.target.value })}
            />
          </div>
          <div className="modal-header">
            <h5 className="modal-title">Jumbotron Paragraph</h5>
          </div>
          <div className="modal-body">
            <textarea
              rows={8}
              style={{ width: "100%" }}
              value={this.state.jumbotronParagraph}
              onChange={e =>
                this.setState({ jumbotronParagraph: e.target.value })
              }
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
