import React from "react";
import HornedBeast from "./HornedBeast";
import Card from "react-bootstrap/Card";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  onClickBeast(beast) {
    console.log(beast);
    this.props.getSelectedBeast(beast);
  }
  render() {
    return (
      <>
        <Card>
          <h2>Horned Animals: </h2>
          
          <div>
            {this.props.data.map((beast, index) => (
              <div
                onClick={() => {
                  this.onClickBeast(beast);
                  console.log(beast);
                }}
                key={index}
              >
                <HornedBeast
                  title={beast.title}
                  imgUrl={beast.image_url}
                  description={beast.description}
                />
              </div>
            ))}
          </div>
        </Card>
      </>
    );
  }
}

export default Main;
