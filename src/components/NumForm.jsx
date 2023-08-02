import React from "react";
import Form from "react-bootstrap/Form";

class NumForm extends React.Component {
  constructor(props) {
    super(props);
    
  }

  // horn numbers = 1,2,3,100
  handleNumberChange = (event) => {
    let num = +event.target.value;
    this.props.handleNum(num);
    console.log(num);
  }
  render() {
    return (
      <>
        <Form.Select onChange={this.handleNumberChange}>
          <option value="0" >Pick the Number of Horns</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="100">100</option>
        </Form.Select>
        {console.log( "line 26 form")}
      </>
    );
  }
}

export default NumForm;
