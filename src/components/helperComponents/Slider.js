import React, { useEffect, useState, useCallback } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const Slider = ({ data }) => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? data.length - 1 : current - 1);
  };

  const nextSlide = useCallback(() => {
    setCurrent(current === data.length - 1 ? 0 : current + 1);
  }, [current, data.length]);

  useEffect(() => {
    const slide = setTimeout(nextSlide, 5000);

    return () => {
      clearTimeout(slide);
    };
  }, [current, nextSlide]);

  return (
    <section className="Slider">
      <button className="left-arrow" onClick={prevSlide}>
        <FaArrowAltCircleLeft />
      </button>

      <button className="right-arrow" onClick={nextSlide}>
        <FaArrowAltCircleRight />
      </button>

      {data.map(image => {
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
      })}
    </section>
  );
};

export default Slider;
