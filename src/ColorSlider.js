import React, { Component } from "react";

const style = {
  display: "inline-block"
};

class ColorSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderColor: props.color,
      hexColor: props.hex,
      value: 1
    };
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
    this.props.getValue(e);
  };

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
        <input
          type="range"
          min="1"
          max="255"
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
        />
        <span>{this.state.value}</span>
      </div>
    );
  }
}

export default ColorSlider;
