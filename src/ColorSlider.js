import React, { Component } from "react";

const style = {
  display: "inline",
  width: "50%"
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
      <div style={style}>
        <div
          style={{
            background: this.state.hexColor,
            width: "15px",
            height: "15px"
          }}
        />
        <div
          style={{
            width: "75%"
          }}
        >
          <input type="range" min="1" max="255" />
        </div>
      </div>
    );
  }
}

export default ColorSlider;
