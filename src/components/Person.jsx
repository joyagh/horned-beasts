import React from 'react';

class Person extends React.Component {
  render() {
    let name = "Justine";

    return (
      <div>
        <h2>{name}</h2>
      </div>
    );
  }
}

export default Person;
