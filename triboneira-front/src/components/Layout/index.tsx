import { Outlet } from 'react-router';
import Header from '../Header';
import Navbar from '../NavBar';
import SideBar from '../SideBar';
import Footer from '../Footer';

function Layout() {
  return (
    <div>
      <Header />
      <Navbar />
      <SideBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
