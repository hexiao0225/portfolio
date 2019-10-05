import React from 'react';
import Intro from './Intro';
import RandomThoughts1 from './img/RandomThoughts1.jpg';

const props = {
  title: 'Artists Book',
  description: 'some description on Artists Book',
  fill: '#013F92'
};

export const ArtistsBook = ArtistsBookDescription => (
  <div>
    <Intro props={props}></Intro>
    <img
      src={RandomThoughts1}
      style={{ width: '300px', height: '300px' }}
    ></img>
  </div>
);

export default ArtistsBook;
