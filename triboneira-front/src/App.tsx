import { Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import Layout from './components/Layout';

function App() {
  return (
    <div className={ styles.app }>
      <Routes>
        <Route element={ <Layout /> }>
          <Route path="/" element={ <h1>Home</h1> } />
          <Route path="/login" element={ <h1>Login</h1> } />
          <Route path="/register" element={ <h1>Register</h1> } />
          <Route path="*" element={ <h1>Not Found</h1> } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
