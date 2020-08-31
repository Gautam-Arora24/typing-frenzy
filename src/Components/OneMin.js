import React from "react";
import Ticker from "react-ticker";

export default function OneMin() {
  return (
    <div>
      <div className="container">
        <Ticker mode="smooth" speed="10">
          {({ index }) => (
            <>
              <h4 className="text-white ">Coming Soon... </h4>
            </>
          )}
        </Ticker>
      </div>
    </div>
  );
}
