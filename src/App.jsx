import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import SelectedBeast from './components/SelectedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  constructor(props) {
    super();
    this.state = {
      selectedBeast: {},
    }
  }
  getSelectedBeast(beast) {
   this.setState({selectedBeast: beast}) 
  }
  render() {
    
    return (
      <div>
        <Header />
        <Main getSelectedBeast = {getSelectedBeast}/>
        <SelectedBeast />
        <Footer />
      </div>
    );
  }
}

export default App;