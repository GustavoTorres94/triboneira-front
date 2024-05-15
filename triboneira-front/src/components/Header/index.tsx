import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getLocalStorage, KEY_LOCAL_STORAGE } from '../../utils/localStorage';
import { deleteUserFromLocalStorage } from '../../redux/actions';
import styles from './Header.module.css';

function Header() {
  const { username } = useSelector((state: any) => state.users);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(deleteUserFromLocalStorage(KEY_LOCAL_STORAGE));
  };

  return (
    <div>
      <div className={ styles.header }>
        <img
          className={ styles.header__logo }
          src="https://static-cdn.jtvnw.net/jtv_user_pictures/ea0fe422-84bd-4aee-9d10-fd4b0b3a7054-profile_image-150x150.png"
          alt="Logo da Tribo Gaulesa"
        />
        <h1>
          Triboneira!
        </h1>
        <p className={ styles.subtitle }>A Tribo cuida da Tribo!</p>
        {
          getLocalStorage('loggedUser') ? (
            <div className={ styles.infoRegisterLogin }>
              <p>
                Olá,
                { username }
              </p>
              <NavLink to="/dashboard" className={ styles.link }>Dashboard</NavLink>
              <NavLink
                to="/login"
                className={ styles.link }
                onClick={ handleLogout }
              >
                Logout
              </NavLink>
            </div>) : (
              <div className={ styles.infoRegisterLogin }>
                <p>Já possuí Cadastro?</p>
                <div className={ styles.linkInfo }>
                  <NavLink to="/login" className={ styles.link }>Login</NavLink>
                  <NavLink to="/register" className={ styles.link }>Cadastre-se</NavLink>
                </div>
              </div>)
        }
      </div>
    </div>
  );
}

export default Header;
// https://static-cdn.jtvnw.net/jtv_user_pictures/ea0fe422-84bd-4aee-9d10-fd4b0b3a7054-profile_image-150x150.png
