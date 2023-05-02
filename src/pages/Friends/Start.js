import { useState, useEffect } from "react";
import axios from "axios";
// icons
import Restart from "../../assets/icons/Restart";
import Button from "../../component/Button";
// utils
import { display } from "../../utils/display";
// styling
import ".././start.css";
// config
import { matchedValues, userChoice } from "../../config/session";
// url
import { update } from "../../config/url";

const Start = () => {
  // get creator name
  const creatorName = sessionStorage.getItem("creatorName");
  //get user name
  const friend = sessionStorage.getItem("name");
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
  // get creator's id
  const creatorId = sessionStorage.getItem("id");
  //get creator's choice(s) resource
  const [creatorChoice, setCreatorChoice] = useState([]);

  useEffect(() => {
    const choices = async () => {
      try {
        const res = await axios.get(`${update}/${creatorId}`);
        setCreatorChoice(res.data.user.choice);
      } catch (err) {
        // console.log(err)
      }
    };
    choices();
  });
  // handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    userChoice(trueValues);
    const matchedChoice = trueValues.filter((choice) =>
      creatorChoice.includes(choice)
    );
    matchedValues(matchedChoice.length);
    // send friends name and score to creators document
    const score = sessionStorage.getItem("score");
    try {
      const res = await axios.post(`${update}/${creatorId}`, {
        friend,
        score,
      });
      console.log(res.data);
      window.location = "/result";
    } catch (err) {
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
        <span style={{ textTransform: "capitalize", padding: "0 5px" }}>
          {friend}
        </span>
        what will
        <span style={{ textTransform: "capitalize", padding: "0 5px" }}>
          {creatorName}
        </span>
        Choose?
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
          className="pet resized-pets"
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
