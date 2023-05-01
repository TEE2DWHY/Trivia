import { useState } from "react";
import axios from "axios";
// icons
import Restart from "../assets/icons/Restart";
// button component
import Button from "../component/Button";
// utils
import { display } from "../utils/display";
// url
import { update } from "../config/url";
// styling
import "./start.css";
import Spinner from "../assets/icons/Spinner";

const Start = () => {
  // get username
  const name = sessionStorage.getItem("name");
  // get user choice
  const [choice, setChoice] = useState({
    //1
    beard: false,
    noBeard: false,
    //2
    gym: false,
    noGym: false,
    //3
    chocolate: false,
    vanilla: false,
    //4
    money: false,
    love: false,
    //5
    missionary: false,
    doggy: false,
    //6
    english: false,
    math: false,
    //7
    twitter: false,
    instagram: false,
    //8
    actionMovies: false,
    loveMovies: false,
    //9
    cats: false,
    dogs: false,
  });
  // handleChoice
  const handleChoice = (e) => {
    setChoice((initials) => {
      return {
        ...initials,
        [e.target.name]: true,
      };
    });
  };
  // Get only true values
  const trueValues = Object.keys(choice).filter((key) => choice[key]);
  // handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    // show spinner
    const spinner = document.querySelector(".spinner");
    spinner.classList.add("show-spinner");
    // manage button text
    const submitText = document.querySelector(".submit-text");
    submitText.innerHTML = " ";
    try {
      const id = sessionStorage.getItem("id");
      const res = await axios.patch(`${update}/${id}`, { choice: trueValues });
      console.log(res.data);
      window.location = "/share";
    } catch (err) {
      const error = document.querySelector(".alert-err");
      error.innerHTML = `<p>An error occurred... Pls try again</p>`;
      setTimeout(() => {
        error.innerHTML = `<p> </p>`;
      }, 3000);
      spinner.classList.remove("show-spinner");
      submitText.innerHTML = "submit";

      console.log(err);
    }
  };
  // add sound to buttons
  // const btnSound = () => {
  //   const audio = document.getElementById("audio");
  //   audio.play();
  // };
  return (
    <>
      {/* audio */}
      {/* <audio id="audio">
        <source src="../assets/sounds/click.wav" type="audio/mpeg" />
      </audio> */}
      {/* buttons */}
      <Button text="1" />
      <Button text="2" />
      <Button text="3" />
      <Button text="4" />
      <Button text="5" />
      <Button text="6" />
      <Button text="7" />
      <Button text="8" />
      <Button text="9" />
      <h3 className="choice">
        What will you Choose
        <span className="username">{name}</span>?
      </h3>
      <div className="choice">
        <div
          className="beard object resized"
          onClick={() => {
            display(".beard", "hide-class");
            display(".gym", "show-class");
          }}
          id="element1"
        >
          <button onClick={handleChoice} name="beard" id="btn">
            Beard
          </button>
          <button onClick={handleChoice} name="noBeard" id="btn">
            No Beards
          </button>
        </div>

        <div
          className="gym object resized"
          onClick={() => {
            display(".gym", "hide-class");
            display(".ice-cream", "show-class");
          }}
          id="element2"
        >
          <button onClick={handleChoice} name="gym">
            Gym
          </button>
          <button onClick={handleChoice} name="noGym">
            No Gym
          </button>
        </div>

        <div
          className="ice-cream object resized"
          onClick={() => {
            display(".ice-cream", "hide-class");
            display(".love", "show-class");
          }}
          id="element3"
        >
          <button onClick={handleChoice} name="chocolate">
            Chocolate
          </button>
          <button onClick={handleChoice} name="vanilla">
            Vanilla
          </button>
        </div>

        <div
          className="love object resized"
          onClick={() => {
            display(".love", "hide-class");
            display(".sex", "show-class");
          }}
          id="element4"
        >
          <button onClick={handleChoice} name="money">
            Money
          </button>
          <button onClick={handleChoice} name="love">
            Love
          </button>
        </div>

        <div
          className="sex object resized"
          onClick={() => {
            display(".sex", "hide-class");
            display(".subject", "show-class");
          }}
          id="element5"
        >
          <button onClick={handleChoice} name="missionary">
            Missionary
          </button>
          <button onClick={handleChoice} name="doggy">
            Doggy
          </button>
        </div>

        <div
          className="subject object resized"
          onClick={() => {
            display(".subject", "hide-class");
            display(".social-media", "show-class");
          }}
          id="element6"
        >
          <button onClick={handleChoice} name="math">
            Math
          </button>
          <button onClick={handleChoice} name="english">
            English
          </button>
        </div>

        <div
          className="social-media object resized"
          onClick={() => {
            display(".social-media", "hide-class");
            display(".movies", "show-class");
          }}
          id="element7"
        >
          <button onClick={handleChoice} name="twitter">
            Twitter
          </button>
          <button onClick={handleChoice} name="instagram">
            Instagram
          </button>
        </div>

        <div
          className="movies object"
          onClick={() => {
            display(".movies", "hide-class");
            display(".pet", "show-class");
            display(".skip", "hide-class");
          }}
          id="element8"
        >
          <button onClick={handleChoice} name="actionMovies">
            Action Movies
          </button>
          <button name="loveMovies">Love Movies</button>
        </div>

        <div
          className="pet resized-pet"
          onClick={() => {
            display(".submit", "show-class");
          }}
        >
          <button onClick={handleChoice} name="cats">
            Cats
          </button>
          <button onClick={handleChoice} name="dogs">
            Dogs
          </button>
          {/* submit */}
          <button className="submit" onClick={handleSubmit}>
            <span className="submit-text">Submit</span>
            <span className="spinner">
              <Spinner />
            </span>
          </button>
          <div className="alert-err"></div>
        </div>

        <button
          className="skip"
          onClick={() => {
            window.location.reload();
          }}
        >
          Restart <Restart />
        </button>
      </div>
    </>
  );
};

export default Start;
