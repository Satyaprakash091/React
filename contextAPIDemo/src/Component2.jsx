import React, { useContext } from "react";
import { mainContext } from "./main";

const Component2 = () => {
  const isDark = useContext(mainContext);
  return (
    <>
      {isDark ? (
        <div className='box'
          style={{
            width: "100px",
            height: "100px",
            border: "2px solid red",
            backgroundColor: "black"
          }}
        >
          <h3 style={{ color: "white",margin:'32px'}}>Text</h3>
        </div>
      ) : (
        <div className='box'
          style={{
            width: "100px",
            height: "100px",
            border: "2px solid red",
            backgroundColor: "white"
          }}
        >
          <h3 style={{color: "black",margin:'32px'}}>Text</h3>
        </div>
      )}
    </>
  );
};

export default Component2;
