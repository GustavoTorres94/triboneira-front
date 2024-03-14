import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import Button from '../Buttons';

function Navbar() {
  return (
    <div className={ styles.navContainer }>
      <div className={ styles.navSpace }>
        <nav className={ styles.navLink }>
          <NavLink to="/"><Button text="Home" type="button" /></NavLink>
          <NavLink to="/about"><Button text="Sobre a Tribo" type="button" /></NavLink>
          <NavLink to="/contact"><Button text="Contato" type="button" /></NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
