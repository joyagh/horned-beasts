import React from "react";
import HornedBeast from "./HornedBeast";
import data from "./data.json";
import Card from "react-bootstrap/Card";
import SelectedBeast from "./SelectedBeast";

class Main extends React.Component {
  render() {
    return (
      <>
        <Card>
          <h2>Horned Animals: </h2>
          {console.log(data)}
          <div>
            {data.map((beast, index) => (
              <>
              <SelectedBeast />
              <HornedBeast
              key = {index}
              title={beast.title}
              imgUrl={beast.image_url}
              description={beast.description}
              />
              </>
            ))}
          </div>
        </Card>
      </>
    );
  }
}

export default Main;
