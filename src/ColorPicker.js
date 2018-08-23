import React, { Component } from "react";
import SliderBox from "./SliderBox";

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
      </div>
    );
  }
}

export default ColorPicker;
