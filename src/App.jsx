import React from "react";
import data from "./components/data.json";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import SelectedBeast from "./components/SelectedBeast";
import "bootstrap/dist/css/bootstrap.min.css";
import NumForm from "./components/NumForm";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      currentSelectedBeast: { isOpen: false },
      selectedFilter: 0,
      data,
    };
  }
  getSelectedBeast = (beast) => {
    this.setState({ currentSelectedBeast: { beast, isOpen: true } });
  };
  closeModal = () => {
    this.setState({ currentSelectedBeast: { isOpen: false } });
  };
  handleNumberChange = (num) => {
    this.setState({ selectedFilter: num }, () => {
      const filterData = data.filter((beast) => {
        switch (this.state.selectedFilter) {
          case 1:
            return beast.horns === 1;
          case 2:
            return beast.horns === 2;
          case 3:
            return beast.horns === 3;
          case 100:
            return beast.horns === 100;
          default:
            return beast;
        }
        //  if (this.state.selectedFilter === 0) {
        //    return beast;
        //  } else if (this.state.selectedFilter === 1) {
        //    return beast.horns === 1;
        //  } else if (this.state.selectedFilter === 2) {
        //    return beast.horns === 2;
        //  } else if (this.state.selectedFilter === 3) {
        //   return beast.horns === 3;
        //  }
      });
      console.log(filterData, "line 37");
      this.setState({ data: filterData });
    });
  };
  render() {
    return (
      <div>
        {console.log(this.state.currentSelectedBeast)}
        <Header />
        <NumForm handleNum={this.handleNumberChange} />
        {console.log(this.state.selectedFilter, "line 34")}
        <Main data={this.state.data} getSelectedBeast={this.getSelectedBeast} />
        {this.state.currentSelectedBeast.isOpen && (
          <SelectedBeast
            currentSelectedBeast={this.state.currentSelectedBeast}
            closeModal={this.closeModal}
          />
        )}
        <Footer />
      </div>
    );
  }
}

export default App;
