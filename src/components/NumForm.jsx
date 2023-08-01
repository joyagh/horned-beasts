import React from "react";
import Form from "react-bootstrap/Form";

class NumForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      horns: '',
    };
  }

  // horn numbers = 1,2,3,100
  handleNumberChange = (event) => {
    let num = event.target.value;
    this.props.handleNum();
  }
  render() {
    return (
      <>
        <Form.Select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="100">100</option>
        </Form.Select>
        {console.log(Form.Select)}
      </>
    );
  }
}

export default NumForm;
