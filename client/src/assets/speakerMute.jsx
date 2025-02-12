import React from "react";

const SpeakerMute = ({ width, height, color }) => {
  return (
    <svg
      fill={color}
      width={width}
      height={height}
      viewBox="0 0 36 36"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>{"volume-mute-solid"}</title>
      <path
        className="clr-i-solid clr-i-solid-path-1"
        d="M24.87,6.69A12.42,12.42,0,0,1,28.75,26.3l1.42,1.42A14.43,14.43,0,0,0,25.74,4.88a1,1,0,0,0-.87,1.8Z"
      />
      <path
        className="clr-i-solid clr-i-solid-path-2"
        d="M27.3,27.67h0l-3.84-3.84-.57-.57h0L4.63,5,3.21,6.41,8.8,12H3a1,1,0,0,0-1,1V23a1,1,0,0,0,1,1H8.83l9.51,8.3A1,1,0,0,0,20,31.55V23.2l5.59,5.59c-.17.1-.34.2-.51.29a1,1,0,0,0,.9,1.79c.37-.19.72-.4,1.08-.62l2.14,2.14L30.61,31l-3.25-3.25Z"
      />
      <path
        className="clr-i-solid clr-i-solid-path-3"
        d="M22.69,12.62A6.27,6.27,0,0,1,25.8,18a6.17,6.17,0,0,1-1.42,3.92l1.42,1.42a8.16,8.16,0,0,0,2-5.34,8.28,8.28,0,0,0-4.1-7.11,1,1,0,1,0-1,1.73Z"
      />
      <path
        className="clr-i-solid clr-i-solid-path-4"
        d="M20,4.62a1,1,0,0,0-1.66-.75l-6.42,5.6L20,17.54Z"
      />
      <rect x={0} y={0} width={36} height={36} fillOpacity={0} />
    </svg>
  );
};

export default SpeakerMute;
