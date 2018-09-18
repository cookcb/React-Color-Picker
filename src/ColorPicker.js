import React, { Component } from "react";
import ColorBox from "./ColorBox";
import ColorSlider from "./ColorSlider";
import ColorHex from "./ColorHex";

const container = {
  background: "#ffb84d",
  width: "600px",
  height: "350px",
  display: "grid",
  gridTemplateColumns: "10rem 10rem"
};

class ColorPicker extends Component {
  state = {
    r: 0,
    g: 0,
    b: 0
  };

  getRedColorValue = event => {
    this.setState({ r: event.target.value });
  };

  getGreenColorValue = event => {
    this.setState({ g: event.target.value });
  };

  getBlueColorValue = event => {
    this.setState({ b: event.target.value });
  };

  render() {
    let { r, g, b } = this.state;
    return (
      <div style={container}>
        <h1 style={{ gridColumn: "span 2" }}>React Color Sliders</h1>
        <div style={{}}>
          <ColorSlider
            color={"red"}
            hex={"#ff4d4d"}
            getValue={this.getRedColorValue.bind(this)}
          />
          <ColorSlider
            color={"green"}
            hex={"#33cc33"}
            getValue={this.getGreenColorValue.bind(this)}
          />
          <ColorSlider
            color={"blue"}
            hex={"#0066ff"}
            getValue={this.getBlueColorValue.bind(this)}
          />
          <ColorHex style={{}} red={r} green={g} blue={b} />
        </div>
        <ColorBox style={{}} red={r} green={g} blue={b} />
      </div>
    );
  }
}

export default ColorPicker;
