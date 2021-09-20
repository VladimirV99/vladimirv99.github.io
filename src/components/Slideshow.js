import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Slideshow.css';

function Slideshow({ slides }) {
  const [slideIndex, setSlide] = useState(0);
  const currentSlide = slides[slideIndex];

  return (
    <div className="slideshow">
      <div className="slide">
        <div className="slide-number">
          {slideIndex + 1} / {slides.length}
        </div>

        <img src={currentSlide.image} alt={currentSlide.description} />

        <span className="prev" onClick={() => setSlide((slideIndex + slides.length - 1) % slides.length)}>
          &#10094;
        </span>
        <span className="next" onClick={() => setSlide((slideIndex + 1) % slides.length)}>
          &#10095;
        </span>
      </div>

      <div className="caption-container">
        <p className="caption">{currentSlide.description}</p>
      </div>

      <div className="thumbnail-row">
        {slides.map((slide, i) => {
          return (
            <div key={i} className="thumbnail-column">
              <img
                className={'thumbnail' + (slideIndex === i ? ' active' : '')}
                src={slide.image}
                onClick={() => setSlide(i)}
                alt={slide.description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

Slideshow.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  )
};

export default Slideshow;
