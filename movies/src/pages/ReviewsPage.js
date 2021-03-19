import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import moment from "moment";
import { useGlobalContext } from "../components/context";
import { API_KEY } from "../api/key";
import Loading from "../components/Loading";
import ReviewPageBtn from "../components/ReviewPageBtn";
import reviewsPage from "./ReviewsPage.module.css";

const ReviewsPage = (props) => {
  const { id, page } = props.match.params;

  const history = useHistory();

  const { setIsHomePage, loading, setLoading } = useGlobalContext();

  const [review, setReview] = useState([]);

  const [reviewArr, setReviewArr] = useState([]);

  const [movieTitle, setMovieTitle] = useState("");

  const [totalPage, setTotalPage] = useState(null);

  useEffect(() => {
    setIsHomePage(false);
    document.querySelector("#navbar").scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await Promise.allSettled([
          axios.get(
            `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
          ),
          axios.get(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
          ),
        ]);

        const responseArr = response.map((res) => {
          const { data } = res.value;

          return data;
        });

        console.log(responseArr);

        const start = page - 1;
        const end = page;

        setReview(responseArr[0].results.slice(start, end));

        setReviewArr(responseArr[0].results);

        setTotalPage(responseArr[0].results.length);

        setMovieTitle(responseArr[1].title);

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
  }, [page]);

  //handle loading
  if (loading) {
    return <Loading />;
  }

  if (!review[0]) {
    return (
      <main className={reviewsPage.pageContainer}>
        <h2 className={reviewsPage.heading}>Reviews</h2>
        <div className={reviewsPage.noReviewSection}>
          <h3 className={reviewsPage.reviewHeading}>{movieTitle}</h3>
          <p className={reviewsPage.noReviewText}>
            No review for this movie is written yet.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className={reviewsPage.pageContainer}>
      <h2 className={reviewsPage.heading}>Reviews</h2>

      <ReviewPageBtn
        pageNum={page}
        totalPage={totalPage}
        movieId={id}
        results={reviewArr}
      />

      <section className={reviewsPage.reviewSection}>
        <h3 className={reviewsPage.reviewHeading}>{movieTitle}</h3>
        <p className={reviewsPage.writer}>
          Review written by
          <a href={review[0].url} className={reviewsPage.btnHome}>
            {review[0].author}
          </a>
        </p>

        <p className={reviewsPage.date}>
          Created at{" "}
          {moment(review[0].created_at).format("MMMM Do YYYY, h:mm:ss a")}
        </p>

        <p className={reviewsPage.content}>{review[0].content}</p>

        <p className={reviewsPage.original}>
          Visit original content
          <a href={review[0].url} className={reviewsPage.btnHome}>
            here.
          </a>
        </p>
      </section>

      <ReviewPageBtn
        pageNum={page}
        totalPage={totalPage}
        movieId={id}
        results={reviewArr}
      />
    </main>
  );
};

export default ReviewsPage;
