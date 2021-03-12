import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Link, useHistory } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useGlobalContext } from "../components/context";
import UploadForm from "../components/UploadForm";
import uploadModal from "./UploadModal.module.css";

const UploadPage = () => {
  const { setIsSignedIn } = useGlobalContext();

  const history = useHistory();

  //check whether signed in
  useEffect(() => {
    const auth_token = localStorage.getItem("auth_token");

    if (auth_token) {
      setIsSignedIn(true);
    }
  }, []);

  //render modal as sibling to root
  return ReactDOM.createPortal(
    <div
      className={uploadModal.overlay}
      onClick={() => history.push("/profile")}
    >
      <div className={uploadModal.modal} onClick={(e) => e.stopPropagation()}>
        <Link to="/profile" className={uploadModal.btnBack}>
          <FaArrowLeft />
        </Link>
        <UploadForm />
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default UploadPage;
