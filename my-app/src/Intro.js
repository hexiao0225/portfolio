import React from 'react';
import './App.css';

const ScrollIndicator = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 42"
    width="32"
    height="42"
    fill="#fff"
  >
    <desc>Scroll Indicator</desc>
    <polygon points="30.605 25.641 16.5 39.746 16.5 1.048 15.5 1.048 15.5 39.746 1.396 25.641 0.689 26.348 16 41.66 31.312 26.348 30.605 25.641"></polygon>
  </svg>
);

export const Intro = ({ props }) => (
  <div>
    <div className="Page-Intro-Cover" style={{ backgroundColor: props.fill }}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <ScrollIndicator></ScrollIndicator>
    </div>
  </div>
);

export default Intro;
