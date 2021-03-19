import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { API_KEY } from "../api/key";
import { useGlobalContext } from "../components/context";
import PaginationBtn from "../components/PaginationBtn";
import MovieCard from "../components/MovieCard";
import Loading from "../components/Loading";
import paginationPage from "./PaginationPage.module.css";

const PaginationPage = (props) => {
  const { type, page } = props.match.params;

  const history = useHistory();

  const { setIsHomePage, loading, setLoading } = useGlobalContext();

  const [movies, setMovies] = useState([]);

  const [totalPage, setTotalPage] = useState(null);

  useEffect(() => {
    setIsHomePage(false);
    document.querySelector("#navbar").scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        let endPoint;

        if (type === "trending") {
          endPoint = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&page=${page}`;
        }

        if (type === "popular") {
          endPoint = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
        }

        if (type === "top_rated") {
          endPoint = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`;
        }

        if (type === "upcoming") {
          endPoint = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`;
        }

        const response = await axios.get(endPoint);

        setMovies(response.data.results);
        setTotalPage(response.data.total_pages);
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

    fetchData();
  }, [type, page]);

  const setTitle = () => {
    if (type === "trending") {
      return "Trending";
    }

    if (type === "popular") {
      return "Popular";
    }

    if (type === "top_rated") {
      return "Top Rated";
    }

    if (type === "upcoming") {
      return "Upcoming";
    }
  };

  const renderContent = () => {
    return movies.map((movie) => {
      return <MovieCard {...movie} key={movie.id} />;
    });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <main className={paginationPage.pageContainer}>
      <h2 className={paginationPage.heading}>{setTitle()}</h2>
      <PaginationBtn
        pageNum={page}
        totalPage={totalPage}
        type={type}
        results={movies}
      />

      <section className={paginationPage.moviesSection}>
        {renderContent()}
      </section>

      <PaginationBtn
        pageNum={page}
        totalPage={totalPage}
        type={type}
        results={movies}
      />
    </main>
  );
};

export default PaginationPage;
