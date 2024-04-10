import { useState } from 'react';
import Button from '../Buttons';
import { RegisterFormType } from '../../types';
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === 'confirmEmail') {
      setConfirmEmail(value);
    }
    setForm({ ...form, [name]: value });
  };
  const handle = () => {
    setForm(INITIAL_STATE);
    setConfirmEmail('');
    console.log('botão clicadl');
  };

  return (
    <form>
      <label htmlFor="">
        <p>Nome</p>
        <input
          type="text"
          name="name"
          placeholder="Digite seu Nome"
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="">
        <p>Sobrenome</p>
        <input
          type="text"
          name="lastName"
          placeholder="Digite seu Sobrenome"
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="">
        <p>Data de Nascimento</p>
        <input
          type="date"
          name="birthDate"
          placeholder="DD/MM/AA"
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="">
        <p>Apelido/NickName</p>
        <input
          type="text"
          name="nickname"
          placeholder="Digite seu Apelido/NickName"
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="">
        <p>Email</p>
        <input
          type="email"
          name="email"
          placeholder="Digite seu Email"
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="">
        <p>Confime o Email</p>
        <input
          type="email"
          name="confirmEmail"
          placeholder="Confirme seu Email"
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="">
        <p>Senha</p>
        <input
          type="password"
          name="password"
          placeholder="Digite sua Senha"
          onChange={ handleChange }
        />
      </label>
      <div className={ styles.buttonsContainer }>
        <Button text="Cadastrar" type="submit" />
        <Button text="Limpar" type="button" onClick={ handle } />
      </div>
    </form>
  );
}

export default Form;
