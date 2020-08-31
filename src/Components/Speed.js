import React from "react";

export default function Speed({ symbols, sec, onFinish, totalSymbols }) {
  if (onFinish && sec != 0 && symbols != 0) {
    console.log(symbols);
    console.log(totalSymbols);

    const wpm = symbols / 5 / (sec / 60);
    const accuracy = (symbols / totalSymbols) * 100;
    {
      return (
        <div className="speed animate__animated animate__fadeInLeft">
          <h1>Speed - {Math.round(wpm)} WPM</h1>
          <h1>Accuracy - {Math.round(accuracy)}%</h1>
        </div>
      );
    }
  }
  return null;
}
