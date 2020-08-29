import React, { useState, useRef } from "react";
// import Words from "./Components/Words";
import faker from "faker";
import Words from "./Components/Words";
import Textarea from "./Components/Textarea";
import Restartbutton from "./Components/Restartbutton";

function App() {
  const [words, setwords] = useState(" ");

  return (
    <div className="App">
      <Words />
      <Textarea state={words} />
    </div>
  );
}

export default App;
