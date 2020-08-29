import React, { useState } from "react";
import Restartbutton from "./Restartbutton";

export default function Textarea(props) {
  const [words, setwords] = useState(" ");
  const handleChange = (e) => e.target.value;

  return (
    <div>
      <textarea
        placeholer="Start Typing..."
        value={words}
        onChange={handleChange}
      ></textarea>

      <Restartbutton />
    </div>
  );
}
