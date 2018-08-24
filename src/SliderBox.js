import React, { Component } from "react";
import ColorSlider from "./ColorSlider";

class SliderBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ColorSlider color={"red"} hex={"#ff4d4d"} />
        <ColorSlider color={"green"} hex={"#33cc33"} />
        <ColorSlider color={"blue"} hex={"#0066ff"} />
      </div>
    );
  }
}
export default SliderBox;
