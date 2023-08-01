import React from 'react';
import Form from 'react-bootstrap/Form'

class Form extends React.Component {
     constructor(props){
          super(props);
          this.state = {
               horns: 'horns',
          }
     }
     
}

// hornNums = [1, 2, 3, 100];

numHandleChange = (event) => {
   this.setState({
     horns: event.target.value 
   });
   }


render () {
     return {
     <Form.Control
     id = "horns"
     type = "select"
     value
         
     }
}

export default Form;