import { useState } from "react";
import { Link } from "react-router-dom";
//styling
import "./play.css";
// icon
import { LeftArrow } from "../../assets/icons/Arrows";
import { Person } from "../../assets/icons/Personality";
// image
import boy from "../../assets/images/boy.png";
import girl from "../../assets/images/girl.png";
// session
import { userName } from "../../config/session";

const Play = () => {
  // check if creator's name exist
  const creatorName = sessionStorage.getItem("creatorName");
  if (!creatorName) {
    alert("Creator name does not exist.");
    window.location = "/";
  }
  // set username
  const [name, setName] = useState("");
  const handleName = (e) => {
    setName((e.target.name = e.target.value));
  };
  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // window.location = "/start"
    // console.log(name)
    userName(name);
    document.querySelector(".gender").classList.add("show-gender");
    document.querySelector(".form").classList.add("hide-form");
  };
  //set username to session storage
  userName("name");
  return (
    <>
      <div>
        <h1 className="create-quiz">
          <LeftArrow /> Create Quiz
        </h1>
        <form onSubmit={handleSubmit} className="form">
          <h2 className="name">What's your Name?</h2>
          <Person />
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            onChange={handleName}
          />
          <button className="continue">Continue</button>
        </form>
        {/* Gender */}
        <div className="gender">
          <br />
          <h1>
            Welcome <span className="name">{name}</span>!!
          </h1>
          <h2 className="who-are-you">Whats your Gender?</h2>
          <span className="gender-icon">
            <Link to="/play-quiz">
              <div className="gender-container">
                <img className="gender-img" src={boy} alt="boy" />
              </div>
            </Link>
            <Link to="/play-quiz">
              <div className="gender-container">
                <img className="gender-img" src={girl} alt="boy" />
              </div>
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Play;
