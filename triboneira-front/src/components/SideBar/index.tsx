/* eslint-disable jsx-a11y/control-has-associated-label */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faTwitch } from '@fortawesome/free-brands-svg-icons';
import SideCard from '../SideCard';
import styles from './SideBar.module.css';

export default function SideBar() {
  const response = useSelector((state: any) => state.stream);
  const navigate = useNavigate();
  const scrollToTop = () => {
    if (window.scrollY === 0) {
      navigate('/');
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={ styles.sideBarContainer }>
      <div className={ styles.sideBarHead }>
        <FontAwesomeIcon
          icon={ faHouse }
          onClick={ scrollToTop }
          aria-label="home-icon"
        />
        <a href="https://www.twitch.tv" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={ faTwitch } />
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
