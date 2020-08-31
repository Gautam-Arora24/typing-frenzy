import React from "react";
import "../App.css";
import Ticker from "react-ticker";

export default function Landing() {
  return (
    <div className="Landing">
      <div className="container">
        <Ticker mode="smooth" speed="15">
          {({ index }) => (
            <>
              <h4 className="text-white ">
                This awesome typing game will improve your typing skills. Be
                Ready to Type!{" "}
              </h4>
            </>
          )}
        </Ticker>
      </div>
    </div>
  );
}
