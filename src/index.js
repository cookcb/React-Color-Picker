import React from "react";
import ReactDOM from "react-dom";
import ColorPicker from "./ColorPicker";

import "./styles.css";

function App() {
  return <ColorPicker />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
