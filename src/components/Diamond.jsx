import React from "react";
import { useEffect, useState } from "react";
import '../App'

const Diamond = () => {
  const [animateClasses, setAnimateClasses] = useState({
    head: "",
    leftHand: "",
    center: "",
    rightHand: "",
    middleFoot: "",
    rightFoot: "",
    leftFoot: "",
  });

  useEffect(() => {
    // Trigger the animations once the component is mounted
    setAnimateClasses({
      head: "animate-head",
      leftHand: "animate-left-hand",
      center: "animate-center",
      rightHand: "animate-right-hand",
      middleFoot: "animate-middle-foot",
      rightFoot: "animate-right-foot",
      leftFoot: "animate-left-foot",
    });
  }, []);
  return (
    <>
      <svg
        version="1.1"
        id="diamond"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="75 20 300 110"
        preserveAspectRatio="xMidYMid meet" 
        // style={{ width: "800px", height: "50%"}}
      >
        <style type="text/css">
          {`
            .st0 { fill: black; }
            .st1 { fill: black; }
          `}
        </style>
        <g>
          {/* Your SVG elements */}
          <path
            id="back"
            className="st0"
            d="M283.9,28.2l0.7-0.3l0.3,0.9l15.6,6.6c0.7,0.3,1.1,1,1.1,1.6l0,0v5.5l0.5,1.4l-1.3,0.5l-70.4,72
		c-0.7,0.7-1.9,0.7-2.5,0l0,0l-69.1-71.9l-1.3-0.5l0.5-1.4v-5.5c0-0.8,0.5-1.5,1.2-1.7l15-6.5l0.3-1l0.8,0.3l3.6-2.8
		c0.2-0.1,0.4-0.3,0.6-0.3l29.9-10c0.2-0.1,0.4-0.1,0.5-0.1l0,0h38.6c0.3,0,0.5,0,0.7,0.1l30.8,10c0.3,0.1,0.5,0.3,0.7,0.4
		L283.9,28.2L283.9,28.2z"
          />
          <polygon
            id="head"
            className={`st1 ${animateClasses.head}`}
            points="204.6,38.1 204.8,37.8 205.9,38.5 253.3,38.5 254.5,37.8 254.7,38.1 283.9,27.9 282.6,26.6 
            250.2,16.1 209.6,16.1 178.2,26.6 176.5,27.9"
          />
          <polygon
            id="right-hand"
            className={`st1 ${animateClasses.rightHand}`}
            points="286,30.4 255.2,41.2 263.2,54 301.6,40.6 301.6,37"
          />
          <polygon
            id="right-foot"
            className={`st1 ${animateClasses.rightFoot}`}
            points="297.9,46.7 265.2,58.2 237.2,108.7"
          />
          <polygon
            id="left-foot"
            className={`st1 ${animateClasses.leftFoot}`}
            points="221,107.6 194,58.1 162.6,46.8"
          />
          <polygon
            id="left-hand"
            className={`st1 ${animateClasses.leftHand}`}
            points="158.1,40.8 195.1,54.2 203.1,41.4 173.2,30.6 158.1,37.2"
          />
          <polygon
            id="center"
            className={`st1 ${animateClasses.center}`}
            points="206.1,42.1 198.6,54.4 260.2,54.4 252.5,42.1"
          />
          <polygon
            id="middle-foot"
            className={`st1 ${animateClasses.middleFoot}`}
            points="198.6,58.4 229.4,114.8 260.6,58.5"
          />
        </g>
      </svg>
    </>
  );
};

export default Diamond;
