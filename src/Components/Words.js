import React, { useState } from "react";

export default function Words({ userInput, dummyText }) {
  const Text = dummyText.split("");

  return (
    <div className="words">
      {Text.map((item, index) => {
        let color;
        if (index < userInput.length) {
          color = item === userInput[index] ? "green" : "red";
        }

        return (
          <span key={index} style={{ backgroundColor: color }}>
            {item}
          </span>
        );
      })}
    </div>
  );
}
