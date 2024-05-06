import { Provider } from 'react-redux';
import { beforeEach, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { screen, waitFor } from '@testing-library/react';
import store from '../../../src/redux';
import { renderWithRouter } from '../../utils';
import Form from '../../../src/components/Form';

describe('Testando o Component form e todas as funcionalidades', () => {
  beforeEach(() => {
    renderWithRouter(
      <Provider store={ store }>
        <Form />
      </Provider>,
    );
  });

  const nameString = 'Digite seu Nome';
  const surnameString = 'Digite seu Sobrenome';
  const birthDateString = 'DD/MM/AA';
  const nicknameString = 'Digite seu Apelido/NickName';
  const emailString = 'Ex: email@email.com';
  const confirmEmailString = 'Confirme seu Email';
  const passwordString = 'Digite sua Senha';
  const nickRangeString = 'O Nick/Apelido deve ser entre 3 e 12 letras.';
  const nickSpecialString = 'O Nick/Apelido não pode ter caractéres especiais.';

  it('Teste para verificar se o Form está sendo renderizado, com provider', () => {
    const nameInput = screen.getByPlaceholderText(nameString);
    const surnameInput = screen.getByPlaceholderText(surnameString);
    const birthDateInput = screen.getByPlaceholderText(/dd\/mm\/aa/i);
    const nicknameInput = screen.getByPlaceholderText('Digite seu Apelido/NickName');
    const emailInput = screen.getByPlaceholderText('Ex: email@email.com');
    const confirmEmailInput = screen.getByPlaceholderText('Confirme seu Email');
    const passwordInput = screen.getByPlaceholderText('Digite sua Senha');
    const registerButton = screen.getByRole('button', { name: /cadastrar/i });
    const clearFormButton = screen.getByRole('button', { name: /limpar/i });
    expect(nameInput).toBeInTheDocument();
    expect(surnameInput).toBeInTheDocument();
    expect(birthDateInput).toBeInTheDocument();
    expect(nicknameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(confirmEmailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(registerButton).toBeInTheDocument();
    expect(clearFormButton).toBeInTheDocument();
  });

  it('Teste para verificar se o input Name está funcionando corretamente', async () => {
    const nameInput = screen.getByPlaceholderText(nameString);
    await userEvent.type(nameInput, 'Nome');
    expect(nameInput).toHaveValue('Nome');
  });

  it('Teste para verificar se o input Surname está funcionando corretamente', async () => {
    const surnameInput = screen.getByPlaceholderText(surnameString);
    await userEvent.type(surnameInput, 'Sobrenome');
    expect(surnameInput).toHaveValue('Sobrenome');
  });

  it('Teste para verificar se a validação de Name e Surname estão ocorrendo corretamente', async () => {
    const nameInput = screen.getByPlaceholderText(nameString);
    const surnameInput = screen.getByPlaceholderText(surnameString);
    await userEvent.type(nameInput, 'Nome');
    await userEvent.type(surnameInput, 'Sobrenome');
    await waitFor(() => {
      const errorDescription = screen.getByText(/nome não pode conter números ou caractéres especiais/i);
      expect(errorDescription).toHaveClass('_successColor_440ad4');
    });
  });

  it('Teste para verificar se o span não altera sua cor, caso haja números nos inputs', async () => {
    const nameInput = screen.getByPlaceholderText(nameString);
    const surnameInput = screen.getByPlaceholderText(surnameString);
    await userEvent.type(nameInput, 'Nome123');
    await userEvent.type(surnameInput, 'So');
    await waitFor(() => {
      const errorDescription = screen.getByText(/nome não pode conter números ou caractéres especiais/i);
      expect(errorDescription).toHaveClass('_errorColor_440ad4');
    });
  });

  it('Teste para verificar se o span não altera sua cor caso haja caractéres especiais', async () => {
    const nameInput = screen.getByPlaceholderText(nameString);
    const surnameInput = screen.getByPlaceholderText(surnameString);
    await userEvent.type(nameInput, 'Nome');
    await userEvent.type(surnameInput, 'Sobb@');
    await waitFor(() => {
      const errorDescription = screen.getByText(/nome não pode conter números ou caractéres especiais/i);
      expect(errorDescription).toHaveClass('_errorColor_440ad4');
    });
  });

  it('Teste para verificar se o span não altera sua cor caso um dos campos não seja preenchido', async () => {
    const nameInput = screen.getByPlaceholderText(nameString);
    const surnameInput = screen.getByPlaceholderText(surnameString);
    await userEvent.type(nameInput, String.fromCharCode(0));
    await userEvent.type(surnameInput, 'Sobral');
    await waitFor(() => {
      const errorDescription = screen.getByText(/nome não pode conter números ou caractéres especiais/i);
      expect(errorDescription).toHaveClass('_errorColor_440ad4');
    });
  });

  it('Teste para verificar se o input Nickname está funcionando corretamente', async () => {
    const nicknameInput = screen.getByPlaceholderText(nicknameString);
    await userEvent.type(nicknameInput, 'Nickname');
    expect(nicknameInput).toHaveValue('Nickname');
  });

  it('Teste para verificar se a validação de NickName está ocorrendo corretamente', async () => {
    const nameInput = screen.getByPlaceholderText(nicknameString);
    await userEvent.type(nameInput, 'Nick');
    await waitFor(() => {
      const errorDescription = screen.getByText(nickRangeString);
      expect(errorDescription).toHaveClass('_successColor_440ad4');
      const errorDescription1 = screen.getByText(nickSpecialString);
      expect(errorDescription1).toHaveClass('_successColor_440ad4');
    });
  });

  it('Teste para verificar se o erro em NickName está ocorrendo quando há caracteres especiais', async () => {
    const nameInput = screen.getByPlaceholderText(nicknameString);
    await userEvent.type(nameInput, 'Nick@');
    await waitFor(() => {
      const errorDescription = screen.getByText(nickRangeString);
      expect(errorDescription).toHaveClass('_successColor_440ad4');
      const errorDescription1 = screen.getByText(nickSpecialString);
      expect(errorDescription1).toHaveClass('_errorColor_440ad4');
    });
  });

  it('Teste para verificar se o erro em NickName quando o nick possui menos de 3 characters', async () => {
    const nameInput = screen.getByPlaceholderText(nicknameString);
    await userEvent.type(nameInput, 'Ni');
    await waitFor(() => {
      const errorDescription = screen.getByText(nickRangeString);
      expect(errorDescription).toHaveClass('_errorColor_440ad4');
      const errorDescription1 = screen.getByText(nickSpecialString);
      expect(errorDescription1).toHaveClass('_successColor_440ad4');
    });
  });

  it('Teste para verificar se o erro em NickName quando o nick possui mais de 12 characters', async () => {
    const nameInput = screen.getByPlaceholderText(nicknameString);
    await userEvent.type(nameInput, 'NicknameHasMoreThan12Characters');
    await waitFor(() => {
      const errorDescription = screen.getByText(nickRangeString);
      expect(errorDescription).toHaveClass('_errorColor_440ad4');
    });
  });

  it('Teste para verificar se o input Email está funcionando corretamente', async () => {
    const emailInput = screen.getByPlaceholderText(emailString);
    await userEvent.type(emailInput, 'email@email.com');
    expect(emailInput).toHaveValue('email@email.com');
    await waitFor(() => {
      const errorDescription = screen.getByText(/o email deve ser válido/i);
      expect(errorDescription).toHaveClass('_successColor_440ad4');
    });
  });

  it('Teste para verificar se o erro em Email está ocorrendo quando o email não é válido', async () => {
    const emailInput = screen.getByPlaceholderText(emailString);
    await userEvent.type(emailInput, 'email@');
    await waitFor(() => {
      const errorDescription = screen.getByText(/o email deve ser válido/i);
      expect(errorDescription).toHaveClass('_errorColor_440ad4');
    });
  });

  it('Teste para verificar se o input Password está funcionando corretamente', async () => {
    const passwordInput = screen.getByPlaceholderText(passwordString);
    await userEvent.type(passwordInput, 'passwordD1@');
    expect(passwordInput).toHaveValue('passwordD1@');
    await waitFor(() => {
      const errorDescription = screen.getByText(/Senha deve ter no mínimo 8 caractéres./i);
      const errorDescription1 = screen.getByText(/Senha deve ter ao menos uma letra maiúscula e um caractér especial./i);
      expect(errorDescription).toHaveClass('_successColor_440ad4');
      expect(errorDescription1).toHaveClass('_successColor_440ad4');
    });
  });

  it('Teste para verificar se o erro em Password está ocorrendo quando a senha não tem 8 caracteres', async () => {
    const passwordInput = screen.getByPlaceholderText(passwordString);
    await userEvent.type(passwordInput, 'pass');
    await waitFor(() => {
      const errorDescription = screen.getByText(/Senha deve ter no mínimo 8 caractéres./i);
      const errorDescription1 = screen.getByText(/Senha deve ter ao menos uma letra maiúscula e um caractér especial./i);
      expect(errorDescription).toHaveClass('_errorColor_440ad4');
      expect(errorDescription1).toHaveClass('_errorColor_440ad4');
    });
  });

  it('Teste para verificar se o erro em Password está ocorrendo quando a senha não tem caractéres especiais', async () => {
    const passwordInput = screen.getByPlaceholderText(passwordString);
    await userEvent.type(passwordInput, 'password');
    await waitFor(() => {
      const errorDescription = screen.getByText(/Senha deve ter no mínimo 8 caractéres./i);
      const errorDescription1 = screen.getByText(/Senha deve ter ao menos uma letra maiúscula e um caractér especial./i);
      expect(errorDescription).toHaveClass('_successColor_440ad4');
      expect(errorDescription1).toHaveClass('_errorColor_440ad4');
    });
  });

  it('Testando se o button Cadastrar fica Disponível quando todos os inputs são preenchidos corretamente', async () => {
    const nameInput = screen.getByPlaceholderText(nameString);
    const surnameInput = screen.getByPlaceholderText(surnameString);
    const birthDateInput = screen.getByPlaceholderText(birthDateString);
    const nicknameInput = screen.getByPlaceholderText(nicknameString);
    const emailInput = screen.getByPlaceholderText(emailString);
    const confirmEmailInput = screen.getByPlaceholderText(confirmEmailString);
    const passwordInput = screen.getByPlaceholderText(passwordString);
    await userEvent.type(nameInput, 'Nome');
    await userEvent.type(surnameInput, 'Sobrenome');
    await userEvent.type(birthDateInput, '01/01/01');
    await userEvent.type(nicknameInput, 'Nickname');
    await userEvent.type(emailInput, 'teste@email.com');
    await userEvent.type(confirmEmailInput, 'teste@email.com');
    await userEvent.type(passwordInput, 'passwordD1@aa');
    await waitFor(() => {
      const registerButton = screen.getByRole('button', { name: /cadastrar/i });
      expect(registerButton).toBeEnabled();
    });
  });

  it('Testando se o button Cadastrar fica Desabilitado quando um dos inputs não é preenchido corretamente', async () => {
    const nameInput = screen.getByPlaceholderText(nameString);
    const surnameInput = screen.getByPlaceholderText(surnameString);
    const birthDateInput = screen.getByPlaceholderText(birthDateString);
    const nicknameInput = screen.getByPlaceholderText(nicknameString);
    const emailInput = screen.getByPlaceholderText(emailString);
    const confirmEmailInput = screen.getByPlaceholderText(confirmEmailString);
    const passwordInput = screen.getByPlaceholderText(passwordString);
    await userEvent.type(nameInput, 'Nome');
    await userEvent.type(surnameInput, 'Sobrenome');
    await userEvent.type(birthDateInput, '01/01/01');
    await userEvent.type(nicknameInput, 'Nickname');
    await userEvent.type(emailInput, 'testeamail.com');
    await userEvent.type(confirmEmailInput, 'testeamail.com');
    await userEvent.type(passwordInput, 'passwordD1@aa');
    await waitFor(() => {
      const registerButton = screen.getByRole('button', { name: /cadastrar/i });
      expect(registerButton).toBeDisabled();
    });
  });

  it('Testando se o button Limpar restora o formulário quando clicado', async () => {
    const nameInput = screen.getByPlaceholderText(nameString);
    const surnameInput = screen.getByPlaceholderText(surnameString);
    const birthDateInput = screen.getByPlaceholderText(birthDateString);
    const nicknameInput = screen.getByPlaceholderText(nicknameString);
    const emailInput = screen.getByPlaceholderText(emailString);
    const confirmEmailInput = screen.getByPlaceholderText(confirmEmailString);
    const passwordInput = screen.getByPlaceholderText(passwordString);
    await userEvent.type(nameInput, 'Nome');
    await userEvent.type(surnameInput, 'Sobrenome');
    await userEvent.type(birthDateInput, '01/01/01');
    await userEvent.type(nicknameInput, 'Nickname');
    await userEvent.type(emailInput, 'testemail.com');
    await userEvent.type(confirmEmailInput, 'testemail.com');
    await userEvent.type(passwordInput, 'passwordD1@a');
    const clearFormButton = screen.getByRole('button', { name: /limpar/i });
    userEvent.click(clearFormButton);
    await waitFor(() => {
      expect(nameInput).toHaveValue('');
      expect(surnameInput).toHaveValue('');
      expect(birthDateInput).toHaveValue('');
      expect(nicknameInput).toHaveValue('');
      expect(emailInput).toHaveValue('');
      expect(confirmEmailInput).toHaveValue('');
      expect(passwordInput).toHaveValue('');
    });
  });

  it('Testando se o alert é disparado quando o button Cadastrar é clicado', async () => {
    const spy = vi.spyOn(window, 'alert');

    const nameInput = screen.getByPlaceholderText(nameString);
    const surnameInput = screen.getByPlaceholderText(surnameString);
    const birthDateInput = screen.getByPlaceholderText(birthDateString);
    const nicknameInput = screen.getByPlaceholderText(nicknameString);
    const emailInput = screen.getByPlaceholderText(emailString);
    const confirmEmailInput = screen.getByPlaceholderText(confirmEmailString);
    const passwordInput = screen.getByPlaceholderText(passwordString);
    await userEvent.type(nameInput, 'Nome');
    await userEvent.type(surnameInput, 'Sobrenome');
    await userEvent.type(birthDateInput, '01/01/01');
    await userEvent.type(nicknameInput, 'Nickname');
    await userEvent.type(emailInput, 'testea@email.com');
    await userEvent.type(confirmEmailInput, 'testea@email.com');
    await userEvent.type(passwordInput, 'passwordD1@a');
    const registerButton = screen.getByRole('button', { name: /cadastrar/i });
    userEvent.click(registerButton);
    await waitFor(() => {
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith('Cadastro realizado com sucesso!');
    });
  });
});
