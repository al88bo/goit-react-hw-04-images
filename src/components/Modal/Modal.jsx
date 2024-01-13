import css from './Modal.module.css';
import { useEffect } from 'react';

export const Modal = ({ alt, largeImageUrl, setIsModalOpen }) => {
  useEffect(() => {
    const handlePressEsc = e => e.code === 'Escape' && setIsModalOpen(false);
    window.addEventListener('keydown', handlePressEsc);
    window.document.body.style.overflow = 'hidden';
    return () => {
      window.document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handlePressEsc);
    };
  }, [setIsModalOpen]);

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  return (
    <div className={css.overlay} onClick={handleOverlayClick}>
      <div className={css.modal}>
        <img src={largeImageUrl} alt={alt} />
      </div>
    </div>
  );
};
