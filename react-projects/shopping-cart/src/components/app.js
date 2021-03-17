import React from "react";
import Loading from "./loading";
import Header from "./header";
import CartContent from "./cartContent";
import { useGlobalContext } from "./context";

const App = () => {
  const { loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  return (
    <React.Fragment>
      <Header />
      <main>
        <CartContent />
      </main>
    </React.Fragment>
  );
};

export default App;
