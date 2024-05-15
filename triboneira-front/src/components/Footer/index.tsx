/* eslint-disable react/jsx-max-depth */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={ styles.footer }>
      <div className={ styles.footerContent }>
        <div className={ styles.infos }>
          <a
            href="https://ajuda.gaules.gg/hc/pt-br"
            target="_blank"
            rel="noreferrer"
          >
            FAQ
          </a>
          <a
            href="https://ajuda.gaules.gg/hc/pt-br/requests/new"
            target="_blank"
            rel="noreferrer"
          >
            Ajuda
          </a>
          <a
            href="https://www.linkedin.com/company/gaules/?originalSubdomain=br"
            target="_blank"
            rel="noreferrer"
          >
            Trabalhe Conosco
          </a>
        </div>
        <div className={ styles.icons }>
          <a
            href="https://www.omeletecompany.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="https://www.gaules.gg/img/footer/omelete-co.svg" alt="Omelete.Co site Logo" />
          </a>
          <a
            href="https://www.omelete.com.br/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="https://www.gaules.gg/img/footer/omelete.svg" alt="Omelete Site Logo" />
          </a>
          <a
            href="https://www.ccxp.com.br/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="https://www.gaules.gg/img/footer/ccxp.svg" alt="CCXP site Logo" />
          </a>
          <a
            href="https://www.theenemy.com.br/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="https://www.gaules.gg/img/footer/the-enemy.svg" alt="The Enemy site Logo" />
          </a>
          <a
            href="https://www.gaules.gg/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="https://www.gaules.gg/img/footer/gaules.svg" alt="Gaules Site Logo" />
          </a>
        </div>
        <div className={ styles.socials }>
          <div className={ styles.socialsTitle }>
            <p>Redes Sociais:</p>
          </div>
          <div className={ styles.socialsIcons }>
            <a
              href="https://www.facebook.com/gaules"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={ faFacebook } />
            </a>
            <a
              href="https://www.instagram.com/gaules/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={ faInstagram } />
            </a>
            <a
              href="https://www.linkedin.com/company/gaules/?originalSubdomain=br"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={ faLinkedin } />
            </a>
            <a
              href="https://twitter.com/Gaules"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={ faTwitter } />
            </a>
          </div>
        </div>
      </div>
      <div className={ styles.myInfo }>
        <a
          href="https://www.linkedin.com/in/gustavotdepaula/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={ faLinkedin } />
        </a>
        <a
          href="https://github.com/GustavoTorres94"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={ faGithub } />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
