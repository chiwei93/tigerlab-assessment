import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { API_KEY } from "../api/key";
import { useGlobalContext } from "../components/context";
import Loading from "../components/Loading";
import Slider from "../components/Slider";
import ReviewBtn from "../components/ReviewBtn";
import singleMoviePage from "./SingleMoviePage.module.css";

const SingleMoviePage = (props) => {
  const { id } = props.match.params;

  const history = useHistory();

  const { setIsHomePage, loading, setLoading } = useGlobalContext();

  const [movie, setMovie] = useState({});

  const [slider, setSlider] = useState([]);

  useEffect(() => {
    document.querySelector("#navbar").scrollIntoView({ behavior: "smooth" });

    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await Promise.allSettled([
          axios.get(`
          https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`),
          axios.get(
            `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`
          ),
        ]);

        const responseArr = response.map((res) => {
          const { data } = res.value;
          return data;
        });

        console.log(responseArr);

        setMovie(responseArr[0]);
        setSlider(responseArr[1].results);
        setLoading(false);
      } catch (error) {
        console.log(error.response);

        setLoading(false);

        //handle error

        history.push("/error");

        toast.error("Fail to load page", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    };

    setIsHomePage(false);

    fetchData();
  }, []);

  const {
    backdrop_path: backdrop,
    genres,
    homepage,
    overview,
    poster_path: poster,
    production_companies: companies,
    release_date: date,
    title,
    vote_average: vote,
  } = movie;

  const renderGenres = () => {
    if (!genres) return;

    return genres.map((genre, index) => {
      return (
        <li className={singleMoviePage.genresItem} key={index}>
          {genre.name}
        </li>
      );
    });
  };

  const renderCompanies = () => {
    if (!companies) return;

    return companies.map((company, index) => {
      return (
        <li className={singleMoviePage.companiesItem} key={index}>
          {company.name}
        </li>
      );
    });
  };

  const setBackdrop = () => {
    if (!backdrop) return;

    return {
      backgroundImage: ` linear-gradient(to right, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url(https://image.tmdb.org/t/p/original${backdrop})`,
    };
  };

  const renderRecommendation = () => {
    if (slider.length === 0) {
      return null;
    }

    return (
      <section className={singleMoviePage.recommendationSection}>
        <h3 className={singleMoviePage.recommendationHeading}>
          Recommendation
        </h3>
        <Slider results={slider} />
      </section>
    );
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <main className={singleMoviePage.pageContainer} style={setBackdrop()}>
        <div className={singleMoviePage.posterContainer}>
          <img
            src={`https://image.tmdb.org/t/p/original${poster}`}
            alt={title}
            className={singleMoviePage.poster}
          />
        </div>

        <div className={singleMoviePage.infoContainer}>
          <ul className={singleMoviePage.ratingList}>
            <li className={singleMoviePage.ratingItem}>
              <p className={singleMoviePage.vote}>Vote : {vote}</p>
            </li>
            <li className={singleMoviePage.ratingItem}>
              <div className={singleMoviePage.line}>&nbsp;</div>
            </li>
            <li className={singleMoviePage.ratingItem}>
              <p className={singleMoviePage.releaseDate}>
                Release Date: {date}
              </p>
            </li>
          </ul>

          <h2 className={singleMoviePage.heading}>{title}</h2>

          <ul className={singleMoviePage.genresList}>{renderGenres()}</ul>

          <p className={singleMoviePage.overView}>{overview}</p>

          <div className={singleMoviePage.homePageContainer}>
            For more details
            <a href={homepage} className={singleMoviePage.btnHomePage}>
              Visit here
            </a>
          </div>

          <ReviewBtn id={id} />

          <div className={singleMoviePage.companiesContainer}>
            <p className={singleMoviePage.companiesHeading}>
              Production Companies
            </p>
            <ul className={singleMoviePage.companiesList}>
              {renderCompanies()}
            </ul>
          </div>
        </div>
      </main>
      {renderRecommendation()}
    </>
  );
};

export default SingleMoviePage;
