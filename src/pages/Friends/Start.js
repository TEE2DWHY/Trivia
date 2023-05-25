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
import Spinner from "../../assets/icons/Spinner";

const Start = () => {
  // get creator name
  const creatorName = localStorage.getItem("creatorName");
  //get user name
  const friend = localStorage.getItem("name");
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
    tvSeries: false,
    movies: false,
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
    missionary: false,
    doggy: false,
    //10
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
    if (!creatorChoice.includes(e.target.name)) {
      const wrong = document.querySelector(".wrong");
      wrong.classList.add("show-result-wrong");
      setTimeout(() => {
        wrong.classList.toggle("show-result-wrong");
      }, 1100);
    } else {
      const right = document.querySelector(".right");
      right.classList.add("show-result-right");
      setTimeout(() => {
        right.classList.toggle("show-result-right");
      }, 1100);
    }
  };
  // Get only true values
  const trueValues = Object.keys(choice).filter((key) => choice[key]);
  // get creator's id
  const creatorId = localStorage.getItem("id");
  //get creator's choice(s) resource
  const [creatorChoice, setCreatorChoice] = useState([]);
  //get creators choice
  const choices = async () => {
    try {
      const res = await axios.get(`${update}/${creatorId}`);
      setCreatorChoice(res.data.user.choice);
    } catch (err) {
      // console.log(err)
    }
  };
  useEffect(() => {
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
    const score = localStorage.getItem("score");
    // show spinner
    const spinner = document.querySelector(".spinner");
    spinner.classList.add("show-spinner");
    // manage button text
    const submitText = document.querySelector(".submit-text");
    submitText.innerHTML = " ";
    try {
      const res = await axios.post(`${update}/${creatorId}`, {
        friend,
        score,
      });
      console.log(res.data);
      window.location = "/result";
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
      <Button text="10" />
      <h3 className="choice">
        <span className="username">{friend}</span>
        what will
        <span className="username">{creatorName}</span>
        Choose?
      </h3>
      <p className="wrong">
        <i
          className="fa-solid fa-circle-xmark"
          style={{ color: "#f20707", marginRight: "5px" }}
        ></i>
        Wrong Answer...
      </p>
      <p className="right">
        <i
          className="fa-regular fa-circle-check"
          style={{ color: "#b7a3f4", marginRight: "5px" }}
        ></i>
        Right Answer...
      </p>
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
            display(".movie", "show-class");
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
          className="movie object resized"
          onClick={() => {
            display(".movie", "hide-class");
            display(".subject", "show-class");
          }}
          id="element5"
        >
          <button onClick={handleChoice} name="tvSeries">
            Tv-Series
          </button>
          <button onClick={handleChoice} name="movies">
            movies
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
            display(".sex", "show-class");
          }}
          id="element8"
        >
          <button onClick={handleChoice} name="actionMovies">
            Action Movies
          </button>
          <button name="loveMovies">Love Movies</button>
        </div>

        <div
          className="sex object"
          onClick={() => {
            display(".sex", "hide-class");
            display(".pet", "show-class");
            display(".skip", "hide-class");
          }}
          id="element9"
        >
          <button onClick={handleChoice} name="missionary">
            Missionary
          </button>
          <button name="doggy">Doggy</button>
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
      {/* svg pattern */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#b7a3f4"
          fillOpacity="1"
          d="M0,224L7.1,218.7C14.1,213,28,203,42,218.7C56.5,235,71,277,85,256C98.8,235,113,149,127,122.7C141.2,96,155,128,169,138.7C183.5,149,198,139,212,144C225.9,149,240,171,254,160C268.2,149,282,107,296,101.3C310.6,96,325,128,339,133.3C352.9,139,367,117,381,106.7C395.3,96,409,96,424,128C437.6,160,452,224,466,229.3C480,235,494,181,508,133.3C522.4,85,536,43,551,53.3C564.7,64,579,128,593,149.3C607.1,171,621,149,635,160C649.4,171,664,213,678,197.3C691.8,181,706,107,720,101.3C734.1,96,748,160,762,181.3C776.5,203,791,181,805,149.3C818.8,117,833,75,847,85.3C861.2,96,875,160,889,197.3C903.5,235,918,245,932,218.7C945.9,192,960,128,974,85.3C988.2,43,1002,21,1016,26.7C1030.6,32,1045,64,1059,74.7C1072.9,85,1087,75,1101,101.3C1115.3,128,1129,192,1144,218.7C1157.6,245,1172,235,1186,229.3C1200,224,1214,224,1228,197.3C1242.4,171,1256,117,1271,122.7C1284.7,128,1299,192,1313,224C1327.1,256,1341,256,1355,245.3C1369.4,235,1384,213,1398,202.7C1411.8,192,1426,192,1433,192L1440,192L1440,320L1432.9,320C1425.9,320,1412,320,1398,320C1383.5,320,1369,320,1355,320C1341.2,320,1327,320,1313,320C1298.8,320,1285,320,1271,320C1256.5,320,1242,320,1228,320C1214.1,320,1200,320,1186,320C1171.8,320,1158,320,1144,320C1129.4,320,1115,320,1101,320C1087.1,320,1073,320,1059,320C1044.7,320,1031,320,1016,320C1002.4,320,988,320,974,320C960,320,946,320,932,320C917.6,320,904,320,889,320C875.3,320,861,320,847,320C832.9,320,819,320,805,320C790.6,320,776,320,762,320C748.2,320,734,320,720,320C705.9,320,692,320,678,320C663.5,320,649,320,635,320C621.2,320,607,320,593,320C578.8,320,565,320,551,320C536.5,320,522,320,508,320C494.1,320,480,320,466,320C451.8,320,438,320,424,320C409.4,320,395,320,381,320C367.1,320,353,320,339,320C324.7,320,311,320,296,320C282.4,320,268,320,254,320C240,320,226,320,212,320C197.6,320,184,320,169,320C155.3,320,141,320,127,320C112.9,320,99,320,85,320C70.6,320,56,320,42,320C28.2,320,14,320,7,320L0,320Z"
        ></path>
      </svg>
    </>
  );
};

export default Start;
