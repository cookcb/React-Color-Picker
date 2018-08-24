import React, { Component } from "react";
import SliderBox from "./SliderBox";
import ColorBox from "./ColorBox";

const styles = {
  background: "#ffb84d",
  width: "500px",
  height: "350px"
};

class ColorPicker extends Component {
  render() {
    return (
      <div style={styles}>
        <SliderBox />
        <ColorBox red={"0"} green={"0"} blue={"0"} />
      </div>
    );
  }
}

export default ColorPicker;
