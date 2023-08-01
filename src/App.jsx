import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import SelectedBeast from './components/SelectedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';
import NumForm from './components/NumForm';

class App extends React.Component {

  constructor(props) {
    super();
    this.state = {
      currentSelectedBeast: {isOpen: false},
    }
  }
  getSelectedBeast = (beast) => {
   this.setState({currentSelectedBeast: {beast, isOpen: true}}) 
  }
  closeModal = () => {
    this.setState({currentSelectedBeast: {isOpen: false}})
  }
  render() {
    
    return (
      <div>
        {console.log(this.state.currentSelectedBeast)}
        <Header />
        <Main getSelectedBeast = {this.getSelectedBeast}/>
        {this.state.currentSelectedBeast.isOpen  && <SelectedBeast currentSelectedBeast = {this.state.currentSelectedBeast} closeModal = {this.closeModal}/>}
        <NumForm />
        <Footer />
      </div>
    );
  }
}

export default App;