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

const Start = () => {
  // get username
  const name = sessionStorage.getItem("name");
  // get user choice
  const [choice, setChoice] = useState({
    beard: false,
    noBeard: false,
    gym: false,
    noGym: false,
    sadSong: false,
    romanticSong: false,
    eba: false,
    amala: false,
    missionary: false,
    doggy: false,
    english: false,
    math: false,
    twitter: false,
    instagram: false,
    actionMovies: false,
    loveMovies: false,
    sansBuka: false,
    skillz: false,
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
    try {
      const id = sessionStorage.getItem("id");
      const res = await axios.patch(`${update}/${id}`, { choice: trueValues });
      console.log(res.data);
      window.location = "/share";
    } catch (err) {
      const error = document.querySelector(".alert-err");
      error.innerHTML = `<p>An error occurred</p>`;
      console.log(err);
    }
  };
  return (
    <>
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
          <button onClick={handleChoice} name="beard">
            Beard
          </button>
          <button onClick={handleChoice} name="noBeard">
            No Beards
          </button>
        </div>

        <div
          className="gym object resized"
          onClick={() => {
            display(".gym", "hide-class");
            display(".song", "show-class");
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
          className="song object"
          onClick={() => {
            display(".song", "hide-class");
            display(".swallow", "show-class");
          }}
          id="element3"
        >
          <button onClick={handleChoice} name="sadSong">
            Sad Songs
          </button>
          <button onClick={handleChoice} name="romanticSong">
            Romantic Songs
          </button>
        </div>

        <div
          className="swallow object resized"
          onClick={() => {
            display(".swallow", "hide-class");
            display(".sex", "show-class");
          }}
          id="element4"
        >
          <button onClick={handleChoice} name="eba">
            Eba
          </button>
          <button onClick={handleChoice} name="amala">
            Amala
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
            display(".food-hub", "show-class");
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
          className="food-hub"
          onClick={() => {
            display(".submit", "show-class");
          }}
        >
          <button onClick={handleChoice} name="sansBuka">
            Sans Buka
          </button>
          <button onClick={handleChoice} name="skillz">
            Skillz
          </button>
          {/* submit */}
          <button className="submit" onClick={handleSubmit}>
            Submit
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
