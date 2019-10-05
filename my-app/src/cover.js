import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Blob = ({ fill = '#fff' }) => (
  <svg
    width="800"
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
  <div className="Cover">
    <Container>
      <Row>
        <h1>Xiao He</h1>
      </Row>
      <Row>
        <Col xs={8} md={8}>
          <Blob className="Cover-Blob" fill={'#013f92'}></Blob>
          <div className="Cover-Title"></div>
        </Col>
        <Col>
          <h1>Hi, I am Xiao.</h1>
          <p>I'm a front end developer</p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Cover;
