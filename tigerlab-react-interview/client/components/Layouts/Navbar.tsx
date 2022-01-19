import Link from 'next/link';
import { FaBars } from 'react-icons/fa';

import Container from '../containers/Container';
import NavLink from './NavLink';

import useSidebarContext from '../../context/sidebarContext';

const Navbar: React.FC = () => {
  const { openSidebar } = useSidebarContext();

  return (
    <nav className="font-sans">
      <Container>
        <div className="py-4 flex items-center justify-between">
          <Link href="/">
            <a className="font-semibold text-xl mobile-lg:text-2xl">
              tigerlab.
            </a>
          </Link>

          <ul className="hidden mobile-lg:block mobile-lg:text-lg mobile-lg:flex mobile-lg:items-center">
            <li className="mr-8 lg:mr-12">
              <NavLink path="/">Home</NavLink>
            </li>

            <li>
              <NavLink path="/history">History</NavLink>
            </li>
          </ul>

          <button className="mobile-lg:hidden" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
