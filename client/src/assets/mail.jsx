import React from "react";

const MailIcon = ({ width, height, color }) => {
  return (
    <svg
      fill={color}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22,3H2A1,1,0,0,0,1,4V20a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V4A1,1,0,0,0,22,3ZM21,19H3V5H21ZM4.132,7.5A1,1,0,0,1,5.5,7.132L12,10.848l6.5-3.716A1,1,0,1,1,19.5,8.868l-7,4a1,1,0,0,1-.992,0l-7-4A1,1,0,0,1,4.132,7.5Zm4.575,5.789a1,1,0,0,1,0,1.414l-2,2a1,1,0,0,1-1.414-1.414l2-2A1,1,0,0,1,8.707,13.293Zm10,2a1,1,0,1,1-1.414,1.414l-2-2a1,1,0,0,1,1.414-1.414Z" />
    </svg>
  );
};

export default MailIcon;
