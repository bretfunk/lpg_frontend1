import * as React from "react";
import Modal from "react-bootstrap4-modal";

type State = {
  jumbotronTitleModal: boolean;
  jumbotronParagraphModal: boolean;
  jumbotronTitle: string;
  jumbotronParagraph: string;
};

export class LandingJumbotron extends React.Component<{}, State> {
  constructor(props: State) {
    super(props);
    this.state = {
      jumbotronTitleModal: false,
      jumbotronParagraphModal: false,
      jumbotronTitle: "Jumbotron Title",
      jumbotronParagraph:
        "This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique."
    };
  }

  handleClick = (e: string) => {
    switch (e) {
      case "jumbotronParagraphModal": {
        this.setState({
          jumbotronParagraphModal: this.state.jumbotronParagraphModal
            ? false
            : true
        });
      }
      case "jumbotronTitleModal": {
        this.setState({
          jumbotronTitleModal: this.state.jumbotronTitleModal ? false : true
        });
      }
    }
  };
  render() {
    const {
      jumbotronTitle,
      jumbotronTitleModal,
      jumbotronParagraph,
      jumbotronParagraphModal
    } = this.state;
    return (
      <>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1
              className="display-3"
              onClick={() => this.handleClick("jumbotronTitleModal")}
            >
              {jumbotronTitle}
            </h1>
            <p
              className="lead"
              onClick={() => this.handleClick("jumbotronParagraphModal")}
            >
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
          visible={jumbotronTitleModal}
          onClickBackdrop={() => this.handleClick("jumbotronTitleModal")}
        >
          <div className="modal-header">
            <h5 className="modal-title">Jumbotron Title</h5>
          </div>
          <div className="modal-body">
            <input
              type="text"
              onChange={e => this.setState({ jumbotronTitle: e.target.value })}
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => this.handleClick("jumbotronTitleModal")}
            >
              Submit
            </button>
          </div>
        </Modal>

        <Modal
          visible={jumbotronParagraphModal}
          onClickBackdrop={() => this.handleClick("jumbotronParagraphModal")}
        >
          <div className="modal-header">
            <h5 className="modal-title">Jumbotron Paragraph</h5>
          </div>
          <div className="modal-body">
            <input
              type="textarea"
              onChange={e =>
                this.setState({ jumbotronParagraph: e.target.value })
              }
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => this.handleClick("jumbotronParagraphModal")}
            >
              Submit
            </button>
          </div>
        </Modal>
      </>
    );
  }
}
