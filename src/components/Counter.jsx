import React, { useState } from "react";
import "./counter.css";
const Counter = () => {



  const [count, setCount] = useState(0);

  return (

    <div style={{ backgroundColor:"rgb(181, 255, 255)",height:'100vh',paddingTop:'20%'}}>
    <div className="main">
      <div className="all">
        <div className="container">
          <button className="btn2" onClick={() => setCount(count - 1)}>
            -
          </button>
          <div className="counter">
            {" "}
            <span className="spancount">{count}</span>{" "}
          </div>
          <button className="btn1" onClick={() => setCount(count + 1)}>
            +
          </button>
        </div>

        <div className="reset">
          {" "}
          <button className="reset" onClick={() => setCount(0)}>
            reset
          </button>
        </div>
      </div>
    </div></div>
  );
};

export default Counter;
