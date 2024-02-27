import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <div >
      <div className={ styles.header }>
        <img className={ styles.header__logo } src="./src/assets/logo__tribo.png" alt="Logo da Tribo Gaulesa" />
        <h1 >
          Triboneira!
        </h1>
        <p className={ styles.subtitle }>A Tribo cuida da Tribo!</p>
        <div className={ styles.infoRegisterLogin }>
            <p>Já possuí Cadastro?</p>
            <NavLink to="/login" className={ styles.link }>Login</NavLink>
            <NavLink to="/register" className={ styles.link }>Cadastre-se</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
