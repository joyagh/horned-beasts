import React from "react";
import HornedBeast from "./HornedBeast";
import data from "./data.json";

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
      <div>
        <h2>Horned Animals: </h2>
        <div>{imgComponents}</div>
      </div>
    );
  }
}

export default Main;
