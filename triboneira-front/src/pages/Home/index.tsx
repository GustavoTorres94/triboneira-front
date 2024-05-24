import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllStreams } from '../../redux/actions';
import { AppDispatch } from '../../types';
import RankingTable from '../../components/RankingTable';
import ControlledCarousel from '../../components/Carousel';
import NewsSumary from '../../components/NewsSumary';
import AdBanner from '../../components/AdBanner';
import {
  newsArray,
  powerRanking,
  comunityRanking,
  news,
  nikeArrImg,
  kabumArrImg,
} from '../../utils';
import styles from './Home.module.css';

function Home() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllStreams());
  }, []);

  return (
    <div className={ styles.homeContainer }>
      <div className={ styles.newsContainer }>
        <AdBanner
          text="Tribo Nike"
          imageArr={ nikeArrImg }
          linkTo="https://www.nike.com.br/sc/tribo"
        />
        <ControlledCarousel newsArr={ newsArray } />
        <AdBanner
          text="Tribo Kabum"
          imageArr={ kabumArrImg }
          linkTo="https://www.kabum.com.br/hotsite/gaules/"
        />
      </div>
      <div className={ styles.rankingContainer }>
        <div className={ styles.tableSide }>
          <div className={ styles.powerRanking }>
            <RankingTable title="Power Ranking do Apokão" ranking={ powerRanking } />
          </div>
          <div className={ styles.comunityRanking }>
            <RankingTable title="Ranking da Comunidade" ranking={ comunityRanking } />
          </div>
        </div>
        <div className={ styles.oldernewsContainer }>
          <NewsSumary news={ news } />
        </div>
      </div>
    </div>
  );
}

export default Home;
