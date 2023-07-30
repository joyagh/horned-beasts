import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../components/SelectedBeast.css";

class SelectedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideModal: 'hideModal',
    };
  }
  onClick=() => {this.setState({hideModal: "hideModal"})}
  render() {
    return (
      <div className={`modal ${this.state.hideModal}`}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick = {this.onClick}>Close</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }
}

export default SelectedBeast;
