import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { FaUpload } from "react-icons/fa";
import nextagram from "../api/nextagram";
import { useGlobalContext } from "./context";
import Spinner from "./Spinner";
import uploadForm from "./UploadForm.module.css";

const UploadForm = () => {
  const { loading, setLoading } = useGlobalContext();

  const history = useHistory();

  const [imageFile, setImageFile] = useState(null);

  const [previewImage, setPreviewImage] = useState(null);

  const [previewLoading, setPreviewLoading] = useState(false);

  //for file input
  const onFileInputChange = (event) => {
    setPreviewLoading(true);

    const image = event.target.files[0];

    if (!image) {
      return setPreviewLoading(false);
    }

    const url = URL.createObjectURL(image);

    setImageFile(image);
    setPreviewImage(url);
    setPreviewLoading(false);
  };

  //for posting data to api
  const uploadImagePost = async (token, data) => {
    try {
      setLoading(true);

      const response = await nextagram.post("/images/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setLoading(false);

      toast.success("The image was successfully uploaded!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      //navigation back to profile page
      history.push("/profile");
    } catch (error) {
      setLoading(false);

      //toast
      toast.error("An error occurred! Please try uploading again.", {
        position: "top-right",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  //for submiting the file
  const onBtnSubmitClick = () => {
    if (!imageFile) return;

    const auth_token = localStorage.getItem("auth_token");

    let formData = new FormData();

    formData.append("image", imageFile);

    //make api call
    uploadImagePost(auth_token, formData);
  };

  //rendering live preview
  const renderLivePreview = () => {
    if (previewLoading) {
      return <Spinner />;
    }

    if (previewImage) {
      return (
        <div className={uploadForm.previewImageContainer}>
          <img
            src={previewImage}
            className={uploadForm.previewImage}
            alt="preview"
          />
        </div>
      );
    }

    return "Choose a file to upload and see your photos here.";
  };

  return (
    <React.Fragment>
      <div className={uploadForm.formContainer}>
        <input
          type="file"
          id="imgUpload"
          className={uploadForm.input}
          onChange={onFileInputChange}
        />
        <label htmlFor="imgUpload" className={uploadForm.label}>
          <FaUpload className={uploadForm.icon} />
          Choose a file...
        </label>
        <button className={uploadForm.btnUpload} onClick={onBtnSubmitClick}>
          {loading ? "In Progress..." : "Upload"}
        </button>
      </div>

      <div className={uploadForm.previewContainer}>{renderLivePreview()}</div>
    </React.Fragment>
  );
};

export default UploadForm;
