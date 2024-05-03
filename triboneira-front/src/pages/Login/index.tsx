/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-max-depth */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Buttons';
import { setUsersInLocalStorage } from '../../redux/actions';
import styles from './Login.module.css';

function Login() {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const tooglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setUsersInLocalStorage(login.email));
    alert('Login efetuado com sucesso');
    navigate('/about');
  };

  return (
    <div className={ styles.container }>
      <div className={ styles.loginContainer }>
        <form onSubmit={ handleSubmit }>
          <div className={ styles.email }>
            <label htmlFor="email">
              <p>Email ou Nick</p>
              <div className={ styles.emailInput }>
                <FontAwesomeIcon icon={ faEnvelope } />
                <input
                  type="text"
                  name="email"
                  placeholder="email@email.com ou meu_nick"
                  onChange={ handleChange }
                />
              </div>
            </label>
          </div>
          <div className={ styles.password }>
            <label htmlFor="password">
              <p>Senha</p>
              <div className={ styles.passwordInput }>
                <FontAwesomeIcon className={ styles.withBorder } icon={ faLock } />
                <input
                  type={ showPassword ? 'text' : 'password' }
                  name="password"
                  placeholder="Digite sua Senha"
                  onChange={ handleChange }
                />
                <button type="button" onClick={ tooglePassword }>
                  <FontAwesomeIcon
                    className={ styles.noBorder }
                    icon={ showPassword ? faEyeSlash : faEye }
                  />
                </button>
              </div>
            </label>
          </div>
          <div className={ styles.buttonContainer }>
            <Button type="submit" text="Entrar" />
          </div>
        </form>
        <p>
          Ainda não tem conta?
          <Link to="/register" className={ styles.linkSpacing }>Cadastre-se</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
