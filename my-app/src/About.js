import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const About = () => (
  <Container>
    <Row className="Row-With-Top-Padding">
      <Col xs={12} s={12} md={4} lg={4}>
        <h1>About</h1>
      </Col>
      <Col>
        <p>
          Currently based in San Francisco, Xiao is a front-end developer, and
          second year master student at Carnegie Mellon University,
          Entertainment Technology Center. She is interested in exploring the
          intersection between design and technology. Outside of work, she likes
          Ikebana, going to art museums and browsing awwwards.com.
        </p>
      </Col>
    </Row>
    <Row className="Row-With-Top-Padding">
      <Col xs={12} s={12} md={4} lg={4}>
        <h1>Education</h1>
      </Col>
      <Col>
        <p>Carnegie Mellon University | Expected May 2020</p>
        <p>School of the Art Institute of Chicago | May 2018</p>
      </Col>
    </Row>
  </Container>
);

export default About;
