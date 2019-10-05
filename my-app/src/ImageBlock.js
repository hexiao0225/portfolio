import React from 'react';

export const ImageBlock = ({ src, description = ' ' }) => (
  <div>
    <img src={src} alt="Image"></img>
    <p>{description}</p>
  </div>
);

export default ImageBlock;
