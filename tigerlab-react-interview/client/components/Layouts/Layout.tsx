import Navbar from './Navbar';
import Container from '../containers/Container';
import Sidebar from './Sidebar';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen min-w-full overflow-x-hidden bg-gray">
      <Sidebar />
      <Navbar />
      <Container>
        <div className="mt-8">{children}</div>
      </Container>
    </div>
  );
};

export default Layout;
