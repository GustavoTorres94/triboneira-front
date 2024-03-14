import { Outlet } from 'react-router';
import Header from '../Header';
import Navbar from '../NavBar';

function Layout() {
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
