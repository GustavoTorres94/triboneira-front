import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllStreams } from '../../redux/actions';
import { AppDispatch } from '../../types';
import styles from './Home.module.css';

function Home() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllStreams());
  }, [dispatch]);

  return (
    <div className={ styles.homeContainer }>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
