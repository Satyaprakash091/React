import React, { useContext } from "react";
import { mainContext } from "./main";

const Component2 = () => {
  const {bgColor,textColor} = useContext(mainContext);
  return (
    <>
    <div className='box'
          style={{
            width: "100px",
            height: "100px",
            border: "2px solid red",
            backgroundColor: bgColor
          }}
        >
          <h3 style={{ color: textColor,margin:'32px'}}>C2</h3>
        </div>
      {/* {isDark ? (
        <div className='box'
          style={{
            width: "100px",
            height: "100px",
            border: "2px solid red",
            backgroundColor: "black"
          }}
        >
          <h3 style={{ color: "white",margin:'32px'}}>C2</h3>
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
          <h3 style={{color: "black",margin:'32px'}}>C2</h3>
        </div>
      )} */}
    </>
  );
};

export default Component2;
