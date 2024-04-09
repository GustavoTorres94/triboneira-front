import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import SideCard from '../SideCard';
import styles from './SideBar.module.css';

export default function SideBar() {
  const response = useSelector((state: any) => state.stream);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={ styles.sideBarContainer }>
      <div className={ styles.sideBarHead }>
        <FontAwesomeIcon icon={ faHouse } onClick={ scrollToTop } />
        <a href="https://www.twitch.tv" target="_blank" rel="noreferrer">
          <img src="src/assets/twitch.svg" alt="Twitch Logo in SVG format" width="40px" />
        </a>
      </div>
      <div className={ styles.sideBarBody }>
        {
          response.isLoading ? (
            <div>Loading...</div>
          ) : (
            response.data.map((e: any, index: number) => (
              <SideCard
                key={ index }
                streamer={ e.streamerName }
                stream={ e }
              />
            ))
          )
        }
      </div>
    </div>
  );
}
