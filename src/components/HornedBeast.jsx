import React from "react";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likeCount: 0,
    };
  }
  handleLike = () => {
    this.setState({
      likeCount: this.state.likeCount + 1,
    });
  };
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>

        <img src={this.props.imgUrl} />
        <p>{this.props.description}</p>
        <p onClick={this.handleLike}>Like💚</p>
        <p>This has been liked {this.state.likeCount} times.</p>
      </div>
    );
  }
}

export default HornedBeast;
