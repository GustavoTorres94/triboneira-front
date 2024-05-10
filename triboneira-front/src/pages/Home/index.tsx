import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllStreams } from '../../redux/actions';
import { AppDispatch, NewsSliderType } from '../../types';
import newsArray from '../../utils/newsArr';
import ControlledCarousel from '../../components/Carousel';
import styles from './Home.module.css';

function Home() {
  const dispatch = useDispatch<AppDispatch>();

  // useEffect(() => {
  //   dispatch(getAllStreams());
  // }, [dispatch]);

  return (
    <div className={ styles.homeContainer }>
      <div className={ styles.newsContainer }>
        <ControlledCarousel newsArr={ newsArray } />
      </div>
    </div>
  );
}

export default Home;
