import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import SideCard from '../SideCard';
import styles from './SideBar.module.css';

export default function SideBar() {
  return (
    <div className={ styles.sideBarContainer }>
      <div className={ styles.sideBarHead }>
        <FontAwesomeIcon icon={ faHouse } />
      </div>
      <div className={ styles.sideBarBody }>
        <SideCard image="./src/assets/logo__tribo.png" streamer="Gaules" />
        <SideCard image="./src/assets/logo__tribo.png" streamer="Gaules" />
        <SideCard image="./src/assets/logo__tribo.png" streamer="Gaules" />
        <SideCard image="./src/assets/logo__tribo.png" streamer="Gaules" />
        <SideCard image="./src/assets/logo__tribo.png" streamer="Gaules" />
        <SideCard image="./src/assets/logo__tribo.png" streamer="Gaules" />
        <SideCard image="./src/assets/logo__tribo.png" streamer="Gaules" />
        <SideCard image="./src/assets/logo__tribo.png" streamer="Gaules" />
        <SideCard image="./src/assets/logo__tribo.png" streamer="Gaules" />
        <SideCard image="./src/assets/logo__tribo.png" streamer="Gaules" />
        <SideCard image="./src/assets/logo__tribo.png" streamer="Gaules" />
        <SideCard image="./src/assets/logo__tribo.png" streamer="Gaules" />
        <SideCard image="./src/assets/logo__tribo.png" streamer="Gaules" />
      </div>
    </div>
  );
}
