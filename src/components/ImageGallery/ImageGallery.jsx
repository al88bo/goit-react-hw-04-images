import { useState } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Modal } from '../Modal/Modal';
import { LARGE_IMAGE_URL_ATTR, ALT_ATTR } from '../../utilities/constants';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ images }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [largeImageUrl, setlargeImageUrl] = useState(null);
  const [alt, setAlt] = useState(null);

  const handleOnClickImage = e => {
    if (e.target.hasAttribute(LARGE_IMAGE_URL_ATTR)) {
      setIsModalOpen(true);
      setlargeImageUrl(e.target.getAttribute(LARGE_IMAGE_URL_ATTR));
      setAlt(e.target.getAttribute(ALT_ATTR));
    }
  };

  return (
    <>
      <ul className={css['image-gallery']} onClick={handleOnClickImage}>
        {images?.map(image => (
          <ImageGalleryItem key={image.id} image={image} />
        ))}
      </ul>
      {isModalOpen && (
        <Modal
          alt={alt}
          largeImageURL={largeImageUrl}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </>
  );
};
