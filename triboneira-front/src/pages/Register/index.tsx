import Form from '../../components/Form';
import styles from './Register.module.css';

function Register() {
  return (
    <div className={ styles.registerContainer }>
      <div className={ styles.main }>
        <div className={ styles.infoSide }>
          <p>infoSide</p>
        </div>
        <div className={ styles.formSide }>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Register;
