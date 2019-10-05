import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Footer = () => (
  <Container>
    <Row>
      <Col>
        <p>Made with React and love in San Francisco</p>
      </Col>
      <Col>
        <p>Contact: xiaohe@andrew.cmu.edu</p>
      </Col>
    </Row>
  </Container>
);

export default Footer;
