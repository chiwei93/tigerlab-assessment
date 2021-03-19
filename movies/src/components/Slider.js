import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import slider from "./Slider.module.css";

const Slider = ({ results }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 960 },
      items: 5,
      slidesToSlide: 5,
    },
    landscapeTablet: {
      breakpoint: { max: 960, min: 850 },
      items: 4,
      slidesToSlide: 4,
    },
    potraitTablet: {
      breakpoint: { max: 850, min: 640 },
      items: 3,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 640, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    smallMobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 2,
    },
  };

  const renderContent = () => {
    return results.map(
      ({ id, title, vote_average: vote, poster_path: poster }) => {
        return (
          <div className={slider.slide} key={id}>
            <div className={slider.imageContainer}>
              <img
                src={`https://image.tmdb.org/t/p/original${poster}`}
                className={slider.image}
                alt={title}
              />
              <div className={slider.detailsOverlay}>
                <p className={slider.vote}>
                  Vote: <span>{vote}</span>
                </p>
                <Link to={`/movie/detail/${id}`} className={slider.btnSeeMore}>
                  See More Details
                </Link>
              </div>
            </div>
            <p className={slider.title}>{title}</p>
          </div>
        );
      }
    );
  };

  return (
    <Carousel
      swipeable
      responsive={responsive}
      ssr
      keyBoardControl
      customTransition="all .5s"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["smallMobile"]}
      infinite={false}
    >
      {renderContent()}
    </Carousel>
  );
};

export default Slider;
