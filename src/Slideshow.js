import React, { useState } from 'react';
import './Slideshow.css';

function Slideshow(props) {
  const [slideIndex, setSlide] = useState(0);
  const currentSlide = props.slides[slideIndex];

  return (
    <div className="slideshow">
      <div className="slide">
        <div className="slide-number">
          {slideIndex + 1} / {props.slides.length}
        </div>

        <img src={currentSlide.image} alt={currentSlide.description} />

        <span className="prev" onClick={() => setSlide((slideIndex + props.slides.length - 1) % props.slides.length)}>
          &#10094;
        </span>
        <span className="next" onClick={() => setSlide((slideIndex + 1) % props.slides.length)}>
          &#10095;
        </span>
      </div>

      <div className="caption-container">
        <p className="caption">{currentSlide.description}</p>
      </div>

      <div className="thumbnail-row">
        {props.slides.map((slide, i) => {
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

export default Slideshow;
