import React, { useState } from "react";

export default function Timer({ seconds }) {
  const [counter, setCounter] = React.useState(0);
  return (
    <div className="Timer">
      <h1 className="text-center">Timer: {seconds}s</h1>
    </div>
  );
}
