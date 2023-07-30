import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../components/SelectedBeast.css";

class SelectedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideModal: "hideModal",
    };
  }
  onClick = () => {
    this.props.closeModal();
  };
  render() {
    return (
      <div className={`modal ${this.state.hideModal}`}>
        <Modal.Dialog>
          <Modal.Header closeButton onClick={this.onClick}>
            <Modal.Title>
              {this.props.currentSelectedBeast.beast.title}
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div className="modalImg">
              <img
                src={this.props.currentSelectedBeast.beast.image_url}
                alt={this.props.currentSelectedBeast.beast.title}
              />
            </div>

            <p>{this.props.currentSelectedBeast.beast.description}</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.onClick}>
              Close
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }
}

export default SelectedBeast;
