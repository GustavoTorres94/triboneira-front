import { Outlet } from 'react-router';
import Header from '../Header';
import Navbar from '../NavBar';
import SideBar from '../SideBar';

function Layout() {
  return (
    <div>
      <Header />
      <Navbar />
      <SideBar />
      <Outlet />
    </div>
  );
}

export default Layout;
