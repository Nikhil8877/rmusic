import React from "react";

const Navigate = ({ width, height, color }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.79062 2.09314C1.63821 1.98427 1.43774 1.96972 1.27121 2.05542C1.10467 2.14112 1 2.31271 1 2.5V12.5C1 12.6873 1.10467 12.8589 1.27121 12.9446C1.43774 13.0303 1.63821 13.0157 1.79062 12.9069L8.79062 7.90687C8.92202 7.81301 9 7.66148 9 7.5C9 7.33853 8.92202 7.18699 8.79062 7.09314L1.79062 2.09314Z"
        fill={color}
      />
      <path d="M13 13H14V2H13V13Z" />
    </svg>
  );
};

export default Navigate;
