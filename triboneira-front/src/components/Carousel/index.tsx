/* eslint-disable react/jsx-max-depth */
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NewsSliderType } from '../../types';
import styles from './Carousel.module.css';

type ControlledCarouselProps = {
  newsArr: NewsSliderType[];
};

function ControlledCarousel({ newsArr }: ControlledCarouselProps) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <div className={ styles.slidePosition }>
      <Carousel activeIndex={ index } onSelect={ handleSelect } slide={ false }>
        {
          newsArr.map((news) => (
            <Carousel.Item key={ news.id }>
              <img
                className={ `${styles.carouselConfig} d-block w-100` }
                src={ news.image }
                alt={ news.title }
              />
              <Carousel.Caption>
                <div className={ styles.infoDisplay }>
                  <p><strong>{news.category}</strong></p>
                  <p><strong>{news.releaseTime}</strong></p>
                </div>
                <h3><strong>{news.title}</strong></h3>
                <small><strong>{news.description}</strong></small>
              </Carousel.Caption>
            </Carousel.Item>
          ))
        }
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;
// https://static.draft5.gg/news/2024/04/08160300/arT_FURIA_IEM_Chengdu_2024.jpg
