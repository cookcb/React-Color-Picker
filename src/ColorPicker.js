import React, { Component } from "react";
import ColorBox from "./ColorBox";
import ColorSlider from "./ColorSlider";

const styles = {
  background: "#ffb84d",
  width: "500px",
  height: "350px"
};

class ColorPicker extends Component {
  retrieveColorValue = (color, value) => {};

  render() {
    return (
      <div style={styles}>
        <div>
          <ColorSlider
            color={"red"}
            hex={"#ff4d4d"}
            getValue={this.retrieveColorValue.bind(this)}
          />
          <ColorSlider color={"green"} hex={"#33cc33"} />
          <ColorSlider color={"blue"} hex={"#0066ff"} />
        </div>
        <ColorBox red={"0"} green={"0"} blue={"0"} />
      </div>
    );
  }
}

export default ColorPicker;
