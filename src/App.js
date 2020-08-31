import React, { useState } from "react";
import Speed from "./Components/Speed";
import Words from "./Components/Words";
import random from "random-sentence";
import "./App.css";
import Timer from "./Components/Timer";

function App() {
  const [dummywords, setdummywords] = useState(random({ min: 10, max: 20 }));
  const [inputwords, setinputwords] = useState("");
  const [correctsymbols, setcorrectsymbols] = useState(0);
  const [seconds, setseconds] = useState(0);
  const [started, setstarted] = useState(false);
  const [finished, setfinished] = useState(false);

  // HANDLE CHANGE IN THE TEXT AREA
  const handleChange = (e) => {
    setTimer();
    setinputwords(e.target.value);
    setcorrectsymbols(countCorrectSymbols(inputwords)); //ALERT TO BE CONSIDERED
    onFinish(inputwords);
  };

  // RESET THE TEXT AFTER THE RESTART BUTTON IS PRESSED
  const resetText = () => {
    setinputwords("");
    setseconds(0);
    setcorrectsymbols(0);
    setfinished(false);
    setstarted(false);
    setdummywords(random({ min: 10, max: 20 }));
  };

  const countCorrectSymbols = (userinput) => {
    const text = dummywords.replace(/\s/g, "");
    return userinput
      .replace(/\s/g, "")
      .split("")
      .filter((item, index) => item === text[index]).length;
  };

  const setTimer = () => {
    if (!started) {
      setstarted(true);
      window.timer = setInterval(() => {
        setseconds((prevsec) => {
          return prevsec + 1;
        });
      }, 1000);
    }
  };
  const onFinish = (userinput) => {
    if (userinput.length == dummywords.length) {
      clearInterval(window.timer);
      setfinished(true);
    }
  };

  return (
    <div className="App">
      {/* <h1>Typing Frenzy</h1> */}
      <h5 className="py-5">
        {" "}
        Type the below words as fast as you can to calculate the speed
      </h5>
      <Timer seconds={seconds} />
      <Words userInput={inputwords} dummyText={dummywords} />
      <input
        className="typing"
        value={inputwords}
        onChange={handleChange}
        placeholder="Start Typing"
      ></input>
      <button className="btn btn-secondary reset-button" onClick={resetText}>
        {" "}
        Restart Typing{" "}
      </button>
      <Speed
        symbols={correctsymbols}
        sec={seconds}
        onFinish={finished}
        totalSymbols={inputwords.replace(/\s/g, "").length}
      />
    </div>
  );
}

export default App;
