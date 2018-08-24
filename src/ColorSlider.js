import React, { Component } from "react";

const style = {
  display: "inline-block"
};

class ColorSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderColor: props.color,
      hexColor: props.hex
    };
  }

  render() {
    return (
      <div>
        <div
          style={{
            background: this.state.hexColor,
            width: "15px",
            height: "15px",
            display: "inline-block"
          }}
        />
        <input type="range" min="1" max="255" />
      </div>
    );
  }
}

export default ColorSlider;
