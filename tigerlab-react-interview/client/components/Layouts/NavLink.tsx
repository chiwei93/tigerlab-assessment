import Link from 'next/link';
import { useRouter } from 'next/router';

import useSidebarContext from '../../context/sidebarContext';

interface Props {
  path: string;
}

const NavLink: React.FC<Props> = ({ children, path }) => {
  const router = useRouter();

  const { closeSidebar } = useSidebarContext();

  // for active class
  const isActiveClass = () => {
    const linkCSS =
      'hover:text-dark-black active:text-dark-black transition-colors';

    return router.pathname === path
      ? `text-dark-black ${linkCSS}`
      : `${linkCSS} text-dark-gray`;
  };

  return (
    <Link href={path}>
      <a className={isActiveClass()} onClick={closeSidebar}>{children}</a>
    </Link>
  );
};

export default NavLink;
