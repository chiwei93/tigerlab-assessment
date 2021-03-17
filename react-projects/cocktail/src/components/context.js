import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");

  const [cocktails, setCocktails] = useState([]);

  const getDrinksData = async (term) => {
    setLoading(true);
    try {
      const response = await axios.get(`${url}${term}`);

      const { drinks } = response.data;

      if (!drinks) {
        setCocktails([]);
      } else {
        const newDrinks = drinks.map((drink) => {
          const {
            strAlcoholic,
            strDrinkThumb,
            idDrink,
            strDrink,
            strGlass,
          } = drink;

          return {
            alcoholic: strAlcoholic,
            img: strDrinkThumb,
            id: idDrink,
            name: strDrink,
            glass: strGlass,
          };
        });

        setCocktails(newDrinks);
      }

      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getDrinksData(searchTerm);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{
        loading,
        searchTerm,
        cocktails,
        setSearchTerm,
        getDrinksData,
        setLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
