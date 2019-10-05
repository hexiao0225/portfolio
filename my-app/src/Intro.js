import React from 'react';

const ScrollIndicator = () => (
  <svg
    fill="#fff"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 42"
    width="32"
    height="42"
  >
    <desc>Scroll Indicator</desc>
    <polygon points="30.605 25.641 16.5 39.746 16.5 1.048 15.5 1.048 15.5 39.746 1.396 25.641 0.689 26.348 16 41.66 31.312 26.348 30.605 25.641"></polygon>
  </svg>
);

export const Intro = ({ ScrollIndicator }) => (
  <div>
    <ScrollIndicator></ScrollIndicator>
  </div>
);

export default Intro;
