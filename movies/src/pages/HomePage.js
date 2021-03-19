import React, { useEffect, useState } from "react";
import * as Scroll from "react-scroll";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useGlobalContext } from "../components/context";
import Loading from "../components/Loading";
import Slider from "../components/Slider";
import MovieCard from "../components/MovieCard";
import FilterBtn from "../components/FilterBtn";
import ViewMoreBtn from "../components/ViewMoreBtn";
import BottomViewMoreBtn from "../components/BottomViewMoreBtn";
import homePage from "./HomePage.module.css";
import { API_KEY } from "../api/key";

const HomePage = () => {
  const { loading, setLoading } = useGlobalContext();

  const history = useHistory();

  let Element = Scroll.Element;

  const [nowShowing, setNowShowing] = useState([]);

  const [trendingSection, setTrendingSection] = useState([]);

  const [upcomingSection, setUpcomingSection] = useState([]);

  const initialFilterBtnsState = [
    { type: "trending", value: "Trending", active: true },
    { type: "popular", value: "Popular", active: false },
    { type: "top_rated", value: "Top Rated", active: false },
  ];

  const [filterBtns, setFilterBtns] = useState(initialFilterBtnsState);

  const [activeTrendingContent, setActiveTrendingContent] = useState(
    "trending"
  );

  useEffect(() => {
    document.querySelector("#navbar").scrollIntoView({ behavior: "smooth" });

    const fetchData = async () => {
      try {
        //handle loading
        setLoading(true);

        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
        );

        const responses = await Promise.allSettled([
          axios.get(
            `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
          ),
          axios.get(
            `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
          ),
          axios.get(
            `
            https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
          ),
        ]);

        const responsesArr = responses.map((response) => {
          const { data } = response.value;

          return data;
        });

        setNowShowing(responsesArr[0].results);
        setTrendingSection(responsesArr[1].results);
        setUpcomingSection(responsesArr[2].results);
        setLoading(false);
      } catch (error) {
        console.log(error.response);

        setLoading(false);

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
  }, []);

  const fetchTrendingSectionData = async (activeBtnType) => {
    try {
      let endPoint;

      if (activeBtnType === "trending") {
        endPoint = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;
      }

      if (activeBtnType === "popular") {
        endPoint = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
      }

      if (activeBtnType === "top_rated") {
        endPoint = `
        https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
      }

      const response = await axios.get(endPoint);

      setTrendingSection(response.data.results);
    } catch (error) {
      console.log(error.response);

      //handle error
    }
  };

  const onFilterBtnClick = (btnIndex) => {
    const newArr = [...filterBtns];

    newArr.forEach((btn, index) => {
      if (index === btnIndex) {
        btn.active = true;

        fetchTrendingSectionData(btn.type);
        setActiveTrendingContent(btn.type);
      } else {
        btn.active = false;
      }
    });

    setFilterBtns(newArr);
  };

  const renderFilterBtns = () => {
    return filterBtns.map((btn, index) => {
      return (
        <FilterBtn
          {...btn}
          key={index}
          onClick={() => onFilterBtnClick(index)}
        />
      );
    });
  };

  const setViewMorePath = () => {
    if (activeTrendingContent === "trending") {
      return "trending";
    }

    if (activeTrendingContent === "popular") {
      return "popular";
    }

    return "top_rated";
  };

  const renderTrendingContentSectionHeading = () => {
    if (activeTrendingContent === "trending") {
      return "Trending";
    }

    if (activeTrendingContent === "popular") {
      return "Popular";
    }

    return "Top Rated";
  };

  const renderTrendingContent = () => {
    return trendingSection.map((movie) => {
      return <MovieCard {...movie} key={movie.id} />;
    });
  };

  const renderUpcomingContent = () => {
    return upcomingSection.map((movie) => {
      return <MovieCard {...movie} key={movie.id} />;
    });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={homePage.pageContainer}>
      <section className={homePage.nowShowingSection}>
        <div className={homePage.nowShowingHeaderContainer}>
          <h2 className={homePage.heading}>Now Showing</h2>
        </div>
        <Slider results={nowShowing} />
      </section>

      <Element className={homePage.popularSection} name="trendingSection">
        <div className={homePage.popularHeaderContainer}>
          <h2 className={homePage.heading}>
            {renderTrendingContentSectionHeading()}
          </h2>

          <div className={homePage.btnContainer}>
            <div>{renderFilterBtns()}</div>

            <ViewMoreBtn path={`/movies/${setViewMorePath()}/1`} />
          </div>
        </div>
        <div className={homePage.contentContainer}>
          {renderTrendingContent()}
        </div>
        <BottomViewMoreBtn path={`/movies/${setViewMorePath()}/1`} />
      </Element>

      <Element className={homePage.upcomingSection} name="upcomingSection">
        <div className={homePage.upcomingHeaderContainer}>
          <h2 className={homePage.upcomingHeading}>Upcoming</h2>
          <ViewMoreBtn path={`/movies/upcoming/1`} />
        </div>
        <div className={homePage.contentContainer}>
          {renderUpcomingContent()}
        </div>
        <BottomViewMoreBtn path={`/movies/upcoming/1`} />
      </Element>
    </div>
  );
};

export default HomePage;
