import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { Home, About, Contact, Login, Register, NotFound } from './pages';

function App() {
  document.body.style.backgroundColor = '#f5f5f5';

  return (
    <div>
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
