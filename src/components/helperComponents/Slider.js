import React, { useEffect, useState, useCallback } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import Loader from './Loader';

const Slider = ({data}) => {
  const [current, setCurrent] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const {images, id} = data;

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = useCallback(() => {
    setCurrent(current >= images.length - 1 ? 0 : current + 1);
  }, [current, images.length]);

  const renderImages = () => {
    return images.map((image, index) => {
      if(index === 0){
        return (
          <div
            className={
              image.id === current
                ? 'image__container active'
                : 'image__container'
            }
            key={image.id}>
            <img onLoad={() => setIsLoaded(true)} src={image.path} alt={image.alt} />
          </div>
        )
      }
      return (
        <div
          className={
            image.id === current
              ? 'image__container active'
              : 'image__container'
          }
          key={image.id}>
          <img src={image.path} alt={image.alt} />
        </div>
      );
    })
  }

  useEffect(() => {
    const slide = setTimeout(nextSlide, 5000);

    return () => {
      clearTimeout(slide);
    };
  }, [current, nextSlide]);

  useEffect(() => {
    return () => {
      setIsLoaded(false)
      setCurrent(0)
    }
  }, [id])


  return (
    <section className="Slider">
      <button className="left-arrow" onClick={prevSlide}>
        <FaArrowAltCircleLeft />
      </button>

      <button className="right-arrow" onClick={nextSlide}>
        <FaArrowAltCircleRight />
      </button>
      {isLoaded ? null : <Loader />}
      {renderImages()}
    </section>
  );
};

export default Slider;
