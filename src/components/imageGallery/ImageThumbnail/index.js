import React from 'react';
import Image from 'gatsby-image';
import { ImageThumnailWrapper } from './styles';

export default function ImageThumbnail({ isActive, onClick, image }) {
  const handelClick = () => {
    onClick(image);
  };
  return (
    <ImageThumnailWrapper onClick={handelClick} isActive={isActive}>
      <Image fluid={image.localFile.childImageSharp.fluid} />
    </ImageThumnailWrapper>
  );
}
