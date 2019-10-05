import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
  <div className="Page-Intro-Cover" style={{ backgroundColor: props.fill }}>
    <Container>
      <Row className="Row-With-Top-Padding">
        <Col xs={12} s={12} md={4} lg={4}>
          <h1>{props.title}</h1>
        </Col>
        <Col>
          <p>{props.description}</p>
          <ScrollIndicator></ScrollIndicator>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Intro;
