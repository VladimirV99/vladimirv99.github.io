import { useState } from 'react';
import PropTypes from 'prop-types';

import styles from '@/styles/Slideshow.module.scss';

function Slideshow({ slides }) {
  const [slideIndex, setSlide] = useState(0);
  const currentSlide = slides[slideIndex];

  return (
    <div className={styles.slideshow}>
      <div className={styles.slide}>
        <div className={styles.slideNumber}>
          {slideIndex + 1} / {slides.length}
        </div>

        <img src={currentSlide.image} alt={currentSlide.description} />

        <span className={styles.prev} onClick={() => setSlide((slideIndex + slides.length - 1) % slides.length)}>
          &#10094;
        </span>
        <span className={styles.next} onClick={() => setSlide((slideIndex + 1) % slides.length)}>
          &#10095;
        </span>
      </div>

      <div className={styles.captionContainer}>
        <p className={styles.caption}>{currentSlide.description}</p>
      </div>

      <div className={styles.thumbnailRow}>
        {slides.map((slide, i) => {
          return (
            <div key={i} className={styles.thumbnailColumn}>
              <img
                className={styles.thumbnail + ' ' + (slideIndex === i ? styles.active : '')}
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
