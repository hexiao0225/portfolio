import React from 'react';

const Blob = ({ fill = '#fff' }) => (
  <svg
    width="600"
    height="600"
    viewBox="0 0 600 600"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="translate(300,300)">
      <path
        d="M157.6,-128.8C202.6,-69.2,236.3,-3.8,225.8,55.1C215.2,114.1,160.3,166.5,95.7,196.9C31.1,227.3,-43.2,235.8,-100.6,208.4C-158,180.9,-198.4,117.7,-211.8,50.7C-225.2,-16.2,-211.5,-87,-171.7,-145.4C-131.9,-203.8,-65.9,-249.9,-4.8,-246.1C56.3,-242.2,112.6,-188.4,157.6,-128.8Z"
        fill={fill}
      />
    </g>
  </svg>
);

export const Cover = blob => (
  <div>
    <Blob fill={'#013f92'}></Blob>
    <h1>Hi, I am Xiao.</h1>
    <h4>I'm a front end developer</h4>
  </div>
);

export default Cover;
