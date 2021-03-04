import React, { useState, useEffect } from 'react';
import Image from 'gatsby-image';
import { ImageGalleryWrapper } from './styles';
import ImageThumbnail from './ImageThumbnail';

export function ImageGallery({ selectedVariantImageId, images }) {
  const initImagesThumnail =
    images.find(({ id }) => id === selectedVariantImageId) || images[0];
  const [activeImageThumbnail, setActiveImageThumbnail] = useState(
    initImagesThumnail
  );

  useEffect(() => {
    setActiveImageThumbnail(initImagesThumnail);
  }, [selectedVariantImageId, setActiveImageThumbnail, initImagesThumnail]);

  const handelClick = image => {
    setActiveImageThumbnail(image);
  };

  return (
    <ImageGalleryWrapper>
      <div>
        <Image fluid={activeImageThumbnail.localFile.childImageSharp.fluid} />
      </div>
      <div>
        {images.map(image => {
          return (
            <ImageThumbnail
              key={image.id}
              isActive={activeImageThumbnail.id === image.id}
              onClick={handelClick}
              image={image}
            />
          );
        })}
      </div>
    </ImageGalleryWrapper>
  );
}
