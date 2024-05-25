/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faTwitch } from '@fortawesome/free-brands-svg-icons';
import { getAllStreams } from '../../redux/actions';
import { getLocalStorage } from '../../utils/localStorage';
import { AppDispatch, StreamCustonType } from '../../types';
import SideCard from '../SideCard';
import styles from './SideBar.module.css';

export default function SideBar() {
  const dispatch = useDispatch<AppDispatch>();
  const response = useSelector((state: any) => state.stream);
  const navigate = useNavigate();
  const [backup, setBackup] = useState<StreamCustonType[]>(
    getLocalStorage('streams') || [],
  );
  const scrollToTop = () => {
    if (window.scrollY === 0) {
      navigate('/');
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (response.data.length === 0) {
      const backupData = getLocalStorage('streams');
      if (backupData && backupData.length > 0) {
        setBackup(backupData);
      } else {
        dispatch(getAllStreams());
      }
    }
  }, [response.data, dispatch]);

  useEffect(() => {
    if (response.data.length > 0) {
      setBackup(response.data);
    }
  }, [response.data]);

  return (
    <div className={ styles.sideBarContainer }>
      <div className={ styles.sideBarHead }>
        <FontAwesomeIcon
          icon={ faHouse }
          onClick={ scrollToTop }
          aria-label="home-icon"
        />
        <a href="https://www.twitch.tv" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={ faTwitch } aria-label="Twitch-Logo" />
        </a>
      </div>
      <div className={ styles.sideBarBody }>
        {
          response.isLoading ? (
            <div>Loading...</div>
          ) : (
            response.data && response.data.length > 0 ? (
              response.data.map((e: any, index: number) => (
                <SideCard
                  key={ index }
                  streamer={ e.streamerName }
                  stream={ e }
                />
              ))
            ) : (
              backup && backup.length > 0 ? (
                backup.map((e: any, index: number) => (
                  <SideCard
                    key={ index }
                    streamer={ e.streamerName }
                    stream={ e }
                  />
                ))
              ) : (
                <div>Erro!</div>
              )
            )
          )
        }
      </div>
    </div>
  );
}
