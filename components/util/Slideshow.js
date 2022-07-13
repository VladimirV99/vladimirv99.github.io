import { useState, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import styles from '@/styles/Slideshow.module.scss';

function Slideshow({ slides }) {
  const [slideIndex, setSlide] = useState(0);
  const currentSlide = slides[slideIndex];
  const [fullscreen, setFullscreen] = useState(false);

  const openFullscreen = show => {
    setFullscreen(show);
    if (show) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  };

  return (
    <Fragment>
      <div className={styles.slideshow}>
        <div className={styles.slide}>
          <div className={styles.slideNumber}>
            {slideIndex + 1} / {slides.length}
          </div>

          <img src={currentSlide.image} alt={currentSlide.description} />

          <span className={styles.slideFullscreen} onClick={() => openFullscreen(true)}>
            <FontAwesomeIcon icon={faExpand} />
          </span>

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
      {fullscreen && (
        <div className={styles.fullscreen} onClick={() => openFullscreen(false)}>
          <img src={currentSlide.image} alt={currentSlide.description}></img>
        </div>
      )}
    </Fragment>
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
