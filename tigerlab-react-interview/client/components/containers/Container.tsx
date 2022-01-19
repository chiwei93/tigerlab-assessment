const Container: React.FC = ({ children }) => {
  return (
    <div className="px-8 sm:px-12 lg:px-14 xl:px-40 2xl:px-80 large-screen:px-[25vw]">
      {children}
    </div>
  );
};

export default Container;
