import React from "react";
import HornedBeast from "./HornedBeast";
import data from "./data.json";
import Card from "react-bootstrap/Card";

class Main extends React.Component {
  render() {
    let imgComponents = [];
    data.forEach((beast) => {
      imgComponents.push(
        <HornedBeast
          title={beast.title}
          imgUrl={beast.image_url}
          description={beast.description}
        />
      );
    });
    return (
      <Card>
        <h2>Horned Animals: </h2>

        <div>{imgComponents}</div>
      </Card>
    );
  }
}

export default Main;
