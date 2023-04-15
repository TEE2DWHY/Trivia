import "./create.css";
import axios from "axios";
import { useState } from "react";
// icons
import { LeftArrow } from "../assets/icons/Arrows";
import { Person } from "../assets/icons/Personality";
import Spinner from "../assets/icons/Spinner";
// image
import boy from "../assets/images/boy.png";
import girl from "../assets/images/girl.png";
// session
import { id, userName } from "../config/session";
// url
import { create, update } from "../config/url";

const Create = () => {
  // name
  const [name, setName] = useState("");
  const handleName = (e) => {
    setName((e.target.name = e.target.value));
  };
  // gender
  const [gender, setGender] = useState({
    boy: false,
    girl: false,
  });
  const handleGender = (e) => {
    setGender((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: true,
      };
    });
  };
  // create user
  const submitName = async (e) => {
    e.preventDefault();
    const continueText = document.querySelector(".continue-text");
    continueText.innerHTML = " ";
    const spinner = document.querySelector(".spinner-container");
    spinner.classList.add("show-spinner");
    try {
      const res = await axios.post(create, { name });
      console.log(res.data);
      userName(res.data.user.name);
      id(res.data.user._id);
      document.querySelector(".gender").classList.add("show-gender");
      document.querySelector(".form").classList.add("hide-form");
    } catch (err) {
      // console.log(err);
      const error = document.querySelector(".error");
      error.innerHTML = `<p>An error occurred....</p>`;
    }
  };
  // update user gender
  const submitGender = async () => {
    // get id
    const id = sessionStorage.getItem("id");
    const alert = document.querySelector(".alert-err");
    if (gender.boy === false && gender.girl === false) {
      return (alert.innerHTML = `<p>Please select your gender by clicking on the images!</p>`);
    }
    try {
      const proceedBtn = document.querySelector(".proceed-button");
      proceedBtn.innerHTML = " ";
      const proceedSpinner = document.querySelector(".proceed-spinner");
      proceedSpinner.classList.add("show-proceed-spinner");
      const res = await axios.patch(`${update}/${id}`, gender);
      console.log(res);
      window.location = "/start";
    } catch (err) {
      alert.innerHTML = `<p>An error occurred..</p>`;
    }
  };
  return (
    <>
      <div>
        <h1 className="create-quiz">
          <LeftArrow /> Create Quiz
        </h1>
        <form onSubmit={submitName} className="form">
          <h2 className="name">What's your Name?</h2>
          <Person />
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            onChange={handleName}
          />
          <div className="error"></div>
          <button className="continue">
            <span className="continue-text">Continue</span>
            <span className="spinner-container">
              <Spinner />
            </span>
          </button>
        </form>
        {/* Gender */}
        <div className="gender">
          <br />
          <h1>
            Welcome <span className="name">{name}</span>!!
          </h1>
          <h2 className="who-are-you">Choose your Gender?</h2>
          <span className="gender-icon">
            <div className="gender-container">
              <img
                className="gender-img"
                src={boy}
                alt="boy"
                name="boy"
                onClick={handleGender}
              />
            </div>
            <div className="gender-container">
              <img
                className="gender-img"
                src={girl}
                alt="boy"
                name="girl"
                onClick={handleGender}
              />
            </div>
          </span>
          <p className="alert-err"></p>
          <button className="create" onClick={submitGender}>
            <span className="proceed-button">Proceed to Create</span>
            <div className="proceed-spinner">
              <Spinner />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Create;
