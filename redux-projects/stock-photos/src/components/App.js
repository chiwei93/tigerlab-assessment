import React, { useEffect, useRef, useCallback } from "react";
import { connect } from "react-redux";
import SearchInput from "./SearchInput";
import { fetchSearchPhotos, pageChange } from "../actions";
import Photo from "./Photo";
import Loading from "./Loading";
import "./App.css";

const App = (props) => {
  useEffect(() => {
    props.fetchSearchPhotos(props.searchTerm, props.pageNum);
  }, [props.searchTerm, props.pageNum]);

  console.log(props.photos);

  const observer = useRef();

  const lastElementRef = useCallback(
    (node) => {
      if (props.loading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          props.pageChange();
        }
      });

      if (node) observer.current.observe(node);
    },
    [props.loading]
  );

  const renderPhoto = () => {
    return props.photos.map((photo, index) => {
      if (index === props.photos.length - 1) {
        return <Photo {...photo} key={photo.created_at} ref={lastElementRef} />;
      }

      return <Photo {...photo} key={photo.id} />;
    });
  };

  return (
    <main className="pageContainer">
      <h1 className="heading">Photos</h1>

      <SearchInput />

      <section className="photoSection">{renderPhoto()}</section>

      {props.loading ? <Loading /> : null}
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    photos: state.photos,
    pageNum: state.pageNum,
    loading: state.loading,
    searchTerm: state.searchTerm,
  };
};

export default connect(mapStateToProps, { fetchSearchPhotos, pageChange })(App);
