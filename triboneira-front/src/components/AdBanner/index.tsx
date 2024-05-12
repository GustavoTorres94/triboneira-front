import { useState, useEffect } from 'react';
import { AdBannerProps } from '../../types';
import styles from './AdBanner.module.css';

function AdBanner({ text, imageArr, linkTo }: AdBannerProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        if (prevIndex === imageArr.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [imageArr]);

  return (
    <div className={ styles.adBannerContainer }>
      <a href={ linkTo } target="_blank" rel="noreferrer">
        <img
          src={ imageArr[currentImageIndex] }
          alt={ `Ad do Banner ${currentImageIndex}` }
        />
        <p>{ text }</p>
      </a>
    </div>
  );
}

export default AdBanner;
