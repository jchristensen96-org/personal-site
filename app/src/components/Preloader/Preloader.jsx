import { useEffect } from 'react';

const Preloader = ({ images }) => {
  useEffect(() => {
    images.forEach((imageSrc) => {
      const img = new Image();
      img.src = imageSrc;
    });
  }, [images]);

  return null;
};

export default Preloader;
