import React, { Component } from "react";

const style = {
  textTransform: "uppercase"
};

class ColorHex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      red: this.props.red,
      green: this.props.green,
      blue: this.props.blue,
      hexColor: ""
    };
    this.getHexString = this.getHexString.bind(this);
  }

  static getDerivedStateFromProps = (props, state) => {
    if (
      props.red !== state.red ||
      props.green !== state.green ||
      props.blue !== state.blue
    ) {
      return {
        red: props.red,
        green: props.green,
        blue: props.blue
      };
    }
    return null;
  };

  getHexString = (red, green, blue) => {
    let hexValue =
      "#" +
      this.convertToHex(red) +
      this.convertToHex(green) +
      this.convertToHex(blue);
    return hexValue;
  };

  convertToHex = decimal => {
    return parseInt(decimal).toString(16);
  };

  render() {
    return (
      <div style={style}>
        <h1>
          {this.getHexString(this.state.red, this.state.green, this.state.blue)}
        </h1>
      </div>
    );
  }
}

export default ColorHex;
