import { Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import Layout from './components/Layout';
import { Home, About, Contact, Login, Register, NotFound } from './pages';

function App() {
  return (
    <div className={ styles.app }>
      <Routes>
        <Route element={ <Layout /> }>
          <Route path="/" element={ <Home /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/contact" element={ <Contact /> } />
          <Route path="/contact/:id" element={ <NotFound /> } />
          <Route path="*" element={ <NotFound /> } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
