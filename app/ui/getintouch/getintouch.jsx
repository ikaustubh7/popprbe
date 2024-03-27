import React from 'react';
import styles from './styles.module.css';

function Getintouch() {
  return (
    <div>
      <a href="/" className={`${styles.navCta} ${styles.button} ${styles.buttonOutlined}`}>
       
        <span>
          <svg className={styles.buttonOutlinedBg} enableBackground="new 0 0 165.96363636363637 56" viewBox="0 0 165.96363636363637 56" xmlns="http://www.w3.org/2000/svg">
            <clipPath id={styles.buttonSvg_UFRJOOSVJ}>
              <path className={styles.buttonStroke} d="m137.96363636363637 1c14.9 0 27 12.1 27 27s-12.1 27-27 27h-109.96363636363637c-14.9 0-27-12.1-27-27s12.1-27 27-27zm0-1h-109.96363636363637c-15.5 0-28 12.5-28 28 0 15.5 12.5 28 28 28h109.96363636363637c15.5 0 28-12.5 28-28 0-15.5-12.5-28-28-28z"></path>
            </clipPath>
            <g clipPath={`url(#${styles.buttonSvg_UFRJOOSVJ})`}>
              <g className={styles.buttonCircles}>
                <g className={styles.buttonCirclesO}>
                  <circle pathLength="1" className={`${styles.buttonCircle} ${styles.layer1}`} strokeWidth="165.96363636363637" cx="82.98181818181818" cy="28" r="82.98181818181818"></circle>
                  <circle pathLength="1" className={`${styles.buttonCircle} ${styles.layer2}`} strokeWidth="165.96363636363637" cx="82.98181818181818" cy="28" r="82.98181818181818"></circle>
                  <circle pathLength="1" className={`${styles.buttonCircle} ${styles.layer3}`} strokeWidth="165.96363636363637" cx="82.98181818181818" cy="28" r="82.98181818181818"></circle>
                  <circle pathLength="1" className={`${styles.buttonCircle} ${styles.layer4}`} strokeWidth="165.96363636363637" cx="82.98181818181818" cy="28" r="82.98181818181818"></circle>
                </g>
                <circle pathLength="1" className={`${styles.buttonCircle} ${styles.hover}`} strokeWidth="165.96363636363637" cx="82.98181818181818" cy="28" r="82.98181818181818"></circle>
              </g>
            </g>
          </svg>
        </span>
      </a>
    </div>
  );
}

export default Getintouch;
