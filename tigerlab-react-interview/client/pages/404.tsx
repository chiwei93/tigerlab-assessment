import type { NextPage } from 'next';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';

const NotFoundPage: NextPage = () => {
  return (
    <>
      <div className="flex items-center text-base text-dark-gray mb-4">
        <span className="mr-1">Home</span>
        <span className="mr-1">
          <FaChevronRight />
        </span>
        <span>Not Found Page</span>
      </div>
      
      <div className="text-center mt-32 mb-20">
        <h1 className="text-5xl mobile-lg:text-large font-bold mb-4">404</h1>
        <p className="text-dark-gray text-lg mb-8 mobile-lg:text-xl">
          This page could not be found
        </p>
        <Link href="/">
          <a className="bg-black text-white px-4 py-2 rounded text-base mobile-lg:text-lg">
            Back to home
          </a>
        </Link>
      </div>
    </>
  );
};

export default NotFoundPage;
