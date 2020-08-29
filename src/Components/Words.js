import React, { useState } from "react";
import faker from "faker";

export default function Words(props) {
  const [words, setwords] = useState(" ");

  return (
    <div>
      <p>{faker.random.words()}</p>
      <h1>Hello</h1>
    </div>
  );
}
