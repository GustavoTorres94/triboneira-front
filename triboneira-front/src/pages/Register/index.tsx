import Form from '../../components/Form';
import styles from './Register.module.css';

function Register() {
  return (
    <div className={ styles.registerContainer }>
      <div className={ styles.main }>
        <div className={ styles.infoSide }>
          <ul className={ styles.list }>
            <li>
              Faça seu cadastro. É rápido e fácil, leva menos de 1 minuto.
            </li>
            <li>
              Fique por dentro da Tribo e receba avisos de novos conteúdos.
            </li>
            <li>
              Aprenda com os melhores profissionais do mercado.
            </li>
            <li>
              Seu canal direto com seus Streamers favoritos.
            </li>
            <li>
              Além disso, siga seus times favoritos de CS2.
            </li>
            <li>
              Promoções exclusivas.
            </li>
            <li>
              Acesse a qualquer hora e de qualquer lugar.
            </li>
            <li>
              E MUITO MAIS!!!
            </li>
          </ul>
        </div>
        <div className={ styles.formSide }>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Register;
