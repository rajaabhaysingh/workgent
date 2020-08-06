import React, { memo } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-header">this is header</div>
      <div className="App-body">this is body</div>
    </div>
  );
}

export default memo(App);
