import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Buttons';
import { RegisterFormType } from '../../types';
import { verifyEmail,
  verifyNick,
  verifyNickLength,
  verifyPassword,
  verifyUser,
} from '../../utils';

import styles from './Form.module.css';

function Form() {
  const INITIAL_STATE = {
    name: '',
    lastName: '',
    birthDate: '',
    nickname: '',
    email: '',
    password: '',
  };

  const [form, setForm] = useState<RegisterFormType>(INITIAL_STATE);
  const [confirmEmail, setConfirmEmail] = useState<string>('');
  const [isValidUser, setIsValidUser] = useState<boolean>(false);
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
  const [isValidNickLen, setIsValidNickLen] = useState<boolean>(false);
  const [isValidNick, setIsValidNick] = useState<boolean>(false);
  const [isValidPassword, setIsValidPassword] = useState<boolean>(false);
  const [isValidPasswordLen, setIsValidPasswordLen] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === 'confirmEmail') {
      setConfirmEmail(value);
    }
    setForm({ ...form, [name]: value });
  };

  const { name, lastName, email, nickname, password } = form;

  useEffect(() => {
    setIsValidUser(verifyUser(name, lastName));
    setIsValidEmail(verifyEmail(email));
    setIsValidNickLen(verifyNickLength(nickname));
    setIsValidNick(verifyNick(nickname));
    setIsValidPassword(verifyPassword(password));
    setIsValidPasswordLen(password.length >= 8);
  }, [name, lastName, email, nickname, password]);

  const clearForm = () => {
    setForm(INITIAL_STATE);
    setConfirmEmail('');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Cadastro realizado com sucesso!');
    navigate('/login');
  };

  const isDisabled = () => {
    return !!(!isValidUser
      || !isValidEmail
      || !isValidNickLen
      || !isValidNick
      || !isValidPassword
      || !isValidPasswordLen
      || email !== confirmEmail);
  };

  return (
    <form onSubmit={ handleSubmit } className={ styles.container }>
      <div className={ styles.userFormContainer }>
        <div>
          <label htmlFor="name">
            <p>Nome</p>
            <input
              type="text"
              name="name"
              value={ name }
              placeholder="Digite seu Nome"
              onChange={ handleChange }
            />
          </label>
          <label htmlFor="lastName">
            <p>Sobrenome</p>
            <input
              type="text"
              name="lastName"
              value={ lastName }
              placeholder="Digite seu Sobrenome"
              onChange={ handleChange }
            />
          </label>
        </div>
        <ul>
          <li>
            <small className={ isValidUser ? styles.successColor : styles.errorColor }>
              Nome não pode conter números ou caractéres especiais.
            </small>
          </li>
        </ul>
      </div>
      <div className={ styles.birthContainer }>
        <label htmlFor="birthDate">
          <p>Data de Nascimento</p>
          <input
            type="date"
            name="birthDate"
            value={ form.birthDate }
            placeholder="DD/MM/AA"
            onChange={ handleChange }
          />
        </label>
      </div>
      <div className={ styles.mailContainer }>
        <label htmlFor="nickname">
          <p>Nick</p>
          <input
            type="text"
            name="nickname"
            value={ nickname }
            placeholder="Digite seu Apelido/NickName"
            onChange={ handleChange }
          />
        </label>
        <ul>
          <li>
            <small className={ isValidNickLen ? styles.successColor : styles.errorColor }>
              O Nick/Apelido deve ser entre 3 e 12 letras.
            </small>
          </li>
          <li>
            <small className={ isValidNick ? styles.successColor : styles.errorColor }>
              O Nick/Apelido não pode ter caractéres especiais.
            </small>
          </li>
        </ul>
        <label htmlFor="email">
          <p>Email</p>
          <input
            type="email"
            name="email"
            value={ email }
            placeholder="Ex: email@email.com"
            onChange={ handleChange }
          />
        </label>
        <ul>
          <li>
            <small className={ isValidEmail ? styles.successColor : styles.errorColor }>
              O Email deve ser válido.
            </small>
          </li>
        </ul>
        <label htmlFor="confirmEmail">
          <p>Confime o Email</p>
          <input
            type="email"
            name="confirmEmail"
            value={ confirmEmail }
            placeholder="Confirme seu Email"
            onChange={ handleChange }
          />
        </label>
        {
          email !== confirmEmail && (
            <small className={ styles.errorColor }>
              Emails não são iguais. Verifique.
            </small>
          )
        }
        <label htmlFor="password">
          <p>Senha</p>
          <input
            type="password"
            name="password"
            value={ password }
            placeholder="Digite sua Senha"
            onChange={ handleChange }
          />
        </label>
        <ul>
          <li>
            <small
              className={ isValidPasswordLen ? styles.successColor : styles.errorColor }
            >
              Senha deve ter no mínimo 8 caractéres.
            </small>
          </li>
          <li>
            <small
              className={ isValidPassword ? styles.successColor : styles.errorColor }
            >
              Senha deve ter ao menos uma letra maiúscula e um caractér especial.
            </small>
          </li>
        </ul>
      </div>
      <div className={ styles.buttonsContainer }>
        <Button text="Cadastrar" type="submit" isDisabled={ isDisabled() } />
        <Button text="Limpar" type="button" onClick={ clearForm } />
      </div>
    </form>
  );
}

export default Form;
