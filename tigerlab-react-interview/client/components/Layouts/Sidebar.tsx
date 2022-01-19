import { useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import { CSSTransition } from 'react-transition-group';

import NavLink from './NavLink';
import useSidebarContext from '../../context/sidebarContext';

const Sidebar: React.FC = () => {
  const { closeSidebar, isSidebarOpen } = useSidebarContext();

  const overlayRef = useRef<null | HTMLDivElement>(null);
  const sidebarRef = useRef<null | HTMLDivElement>(null);

  // close sidebar when the window resizes
  useEffect(() => {
    window.addEventListener('resize', closeSidebar);

    return () => window.removeEventListener('resize', closeSidebar);
  }, [closeSidebar]);

  return (
    <CSSTransition
      in={isSidebarOpen}
      timeout={300}
      nodeRef={overlayRef}
      classNames="fade"
      mountOnEnter
      unmountOnExit
    >
      <div
        className="fixed inset-0 min-h-screen min-w-full bg-overlay z-10 transition-all flex justify-end duration-300"
        onClick={closeSidebar}
        ref={overlayRef}
      >
        <CSSTransition
          in={isSidebarOpen}
          timeout={300}
          nodeRef={sidebarRef}
          classNames="fly"
          appear
        >
          <div className="bg-white p-8 w-[80vw] min-h-screen text-right transition-transform duration-300 lg:w-[20rem]" ref={sidebarRef}>
            <div>
              <button
                className="text-3xl mb-12 hover:scale-125 transition-transform duration-200"
                onClick={closeSidebar}
              >
                <FaTimes />
              </button>
            </div>

            <ul className="text-2xl">
              <li className="mb-4">
                <NavLink path="/">Home</NavLink>
              </li>
              <li>
                <NavLink path="/history">History</NavLink>
              </li>
            </ul>
          </div>
        </CSSTransition>
      </div>
    </CSSTransition>
  );
};

export default Sidebar;
