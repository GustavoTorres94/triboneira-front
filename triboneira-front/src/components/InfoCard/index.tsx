/* eslint-disable jsx-a11y/control-has-associated-label */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
  faTwitch,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons';
import { InfoCardProps } from '../../types';
import styles from './InfoCard.module.css';

function InfoCard({
  profileImg,
  name,
  nickname,
  birthDate,
  facebook,
  instagram,
  twitch,
  twitter,
  youtube,
  tiktok,
}: InfoCardProps) {
  return (
    <div className={ styles.container }>
      <div className={ styles.card }>
        <img src={ profileImg } alt="Streamer" />
        <h3>{ name }</h3>
        <p>{ nickname }</p>
        {birthDate && <p>{ birthDate }</p>}
        <div className={ styles.socials }>
          {
            instagram && (
              <a
                href={ instagram }
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={ faInstagram }
                  className={ styles.instagram }
                />
              </a>
            )
          }
          {
            facebook && (
              <a
                href={ facebook }
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={ faFacebook }
                  className={ styles.facebook }
                />
              </a>
            )
          }
          {
            twitter && (
              <a
                href={ twitter }
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={ faTwitter }
                  className={ styles.twitter }
                />
              </a>
            )
          }
          {
            youtube && (
              <a
                href={ youtube }
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={ faYoutube }
                  className={ styles.youtube }
                />
              </a>
            )
          }
          {
            twitch && (
              <a
                href={ twitch }
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={ faTwitch }
                  className={ styles.twitch }
                />
              </a>
            )
          }
          {
            tiktok && (
              <a
                href={ tiktok }
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={ faTiktok }
                  className={ styles.tiktok }
                />
              </a>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
