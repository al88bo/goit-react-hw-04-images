import { useState, useEffect, useRef } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { toast } from 'react-toastify';

import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Button } from '../Button/Button';

import { axiosGet } from '../../services/api';
import { PER_PAGE } from 'utilities/constants';

export const FetchingImages = ({ query, page, takePageOnClick }) => {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    setLoading(true);
    axiosGet(query, page)
      .then(({ hits, totalHits }) => {
        !totalHits && toast.info('There are no pictures on this request.');
        setImages(state => (page === 1 ? hits : [...state, ...hits]));
        setTotalPages(Math.ceil(totalHits / PER_PAGE));
      })
      .catch(({ message }) => {
        toast.error(message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [query, page]);

  return (
    <>
      {((loading && page > 1) || !loading) && <ImageGallery images={images} />}
      {!loading && page < totalPages && (
        <Button takePageOnClick={takePageOnClick} />
      )}
      {loading && (
        <ThreeDots
          height="100"
          width="100"
          color="#303f9f"
          wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
        />
      )}
    </>
  );
};
