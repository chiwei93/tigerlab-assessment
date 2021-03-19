import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useGlobalContext } from "../components/context";
import { API_KEY } from "../api/key";
import MovieCard from "../components/MovieCard";
import SearchPageBtn from "../components/SearchPageBtn";
import Loading from "../components/Loading";
import searchResultsPage from "./SearchResultsPage.module.css";

const SearchResultsPage = (props) => {
  const { query, page } = props.match.params;

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
        //handle loading
        setLoading(true);

        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`
        );

        console.log(response.data);
        setMovies(response.data.results);
        setTotalPage(response.data.total_pages);
        setLoading(false);
      } catch (error) {
        console.log(error.response);
        setLoading(false);

        //hanle error
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
  }, [page, query]);

  const renderContent = () => {
    return movies.map((movie) => {
      return <MovieCard {...movie} key={movie.id} />;
    });
  };

  if (loading) {
    return <Loading />;
  }

  if (movies.length === 0) {
    return (
      <main className={searchResultsPage.pageContainer}>
        <h2 className={searchResultsPage.heading}>Search Results</h2>

        <div className={searchResultsPage.noResultsContainer}>
          No results found. Please try other search term.
        </div>
      </main>
    );
  }

  return (
    <main className={searchResultsPage.pageContainer}>
      <h2 className={searchResultsPage.heading}>Search Results</h2>
      <SearchPageBtn
        pageNum={page}
        totalPage={totalPage}
        query={query}
        results={movies}
      />

      <section className={searchResultsPage.moviesSection}>
        {renderContent()}
      </section>

      <SearchPageBtn
        pageNum={page}
        totalPage={totalPage}
        query={query}
        results={movies}
      />
    </main>
  );
};

export default SearchResultsPage;
