import React, { Component } from "react";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      r: props.red,
      g: props.green,
      b: props.blue
    };
  }

  static getDerivedStateFromProps = (props, state) => {
    console.log(props);
    if (
      props.red !== state.r ||
      props.green !== state.g ||
      props.blue !== state.b
    ) {
      return {
        r: props.red,
        g: props.green,
        b: props.blue
      };
    }
  };

  render() {
    let { r, g, b } = this.state;
    return (
      <div
        style={{
          background: "rgb(" + r + ", " + g + ", " + b + ")",
          height: "200px",
          width: "200px"
        }}
      />
    );
  }
}

export default ColorBox;
