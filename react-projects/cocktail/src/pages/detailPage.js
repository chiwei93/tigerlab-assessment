import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./detailPage.css";
import LoadingPage from "./loadingPage";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const DetailPage = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);

  const [cocktail, setCocktail] = useState(null);

  const getCocktailData = async (term) => {
    setLoading(true);

    try {
      const response = await axios.get(`${url}${term}`);

      const [drinks] = response.data.drinks;

      if (!drinks) {
        setCocktail(null);
      } else {
        const {
          strDrink: name,
          strAlcoholic: alcoholic,
          strGlass: glass,
          strCategory: category,
          strInstructions: instructions,
          strDrinkThumb: img,
          strIngredient1: ingredient1,
          strIngredient2: ingredient2,
          strIngredient3: ingredient3,
          strIngredient4: ingredient4,
          strIngredient5: ingredient5,
        } = drinks;

        const ingredients = [
          ingredient1,
          ingredient2,
          ingredient3,
          ingredient4,
          ingredient5,
        ];

        const newCocktail = {
          name,
          alcoholic,
          glass,
          category,
          instructions,
          img,
          ingredients,
        };

        setCocktail(newCocktail);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getCocktailData(id);
  }, [id]);

  if (loading) {
    return <LoadingPage />;
  }

  if (!cocktail) {
    return (
      <section className="detail">
        <div className="detail-header-container">
          <Link to="/" className="btn-home">
            Back Home
          </Link>
          <h2 className="detail-heading">No cocktail detail to display!</h2>
        </div>
      </section>
    );
  }

  const {
    name,
    alcoholic,
    glass,
    instructions,
    img,
    ingredients,
    category,
  } = cocktail;

  return (
    <section className="detail">
      <div className="detail-header-container">
        <Link to="/" className="btn-home">
          Back Home
        </Link>
        <h2 className="detail-heading">{name}</h2>
      </div>

      <article className="detail-info-container">
        <img src={img} alt={name} className="detail-image" />

        <div className="detail-info">
          <p className="info-text">
            <span className="info-text-subclass">Name :</span>
            {name}
          </p>

          <p className="info-text">
            <span className="info-text-subclass">Category :</span>
            {category}
          </p>

          <p className="info-text">
            <span className="info-text-subclass">Info :</span>
            {alcoholic}
          </p>

          <p className="info-text">
            <span className="info-text-subclass">Glass :</span>
            {glass}
          </p>

          <p className="info-text">
            <span className="info-text-subclass">Instructons :</span>
            {instructions}
          </p>

          <p className="info-text">
            <span className="info-text-subclass">Ingredients :</span>
            {ingredients.join(" ")}
          </p>
        </div>
      </article>
    </section>
  );
};

export default DetailPage;
