import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Intro from './Intro';
import ImageBlock from './ImageBlock';
import Miyake1 from './img/Miyake1.png';
import Miyake2 from './img/Miyake2.png';
import Miyake3 from './img/Miyake3.png';
import Miyake4 from './img/Miyake4.png';

import RandomThoughts1 from './img/RandomThoughts1.jpg';

const props = {
  title: 'Artists Book',
  description: 'some description on Artists Book',
  fill: '#013F92'
};

const IsseyMiyakeProps = {
  title: 'Issey Miyake',
  description: 'something',
  fill: '#fff'
};

export const ArtistsBook = ArtistsBookDescription => (
  <div>
    <Intro props={props}></Intro>
    <Container>
      <Row className="Row-With-Top-Padding">
        <Col xs={12} s={12} md={4} lg={4}>
          <h1>{IsseyMiyakeProps.title}</h1>
        </Col>
        <Col>
          <p>{IsseyMiyakeProps.description}</p>
        </Col>
      </Row>
      <Row className="Row-With-Top-Padding">
        <Col xs={0} s={0} md={1} lg={2}></Col>
        <Col>
          <ImageBlock src={Miyake1}></ImageBlock>
          <ImageBlock src={Miyake2}></ImageBlock>
          <ImageBlock src={Miyake3}></ImageBlock>
          <ImageBlock src={Miyake4}></ImageBlock>
        </Col>
        <Col xs={0} s={0} md={1} lg={2}></Col>
      </Row>
    </Container>
  </div>
);

export default ArtistsBook;
