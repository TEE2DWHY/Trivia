import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//styling
import "./scoreboard.css";
//url
import { update } from "../config/url";
// icons
import { LeftArrow } from "../assets/icons/Arrows";

const ScoreBoard = () => {
  // isLoading
  const [isLoading, setIsLoading] = useState(true);
  // set friends name and score
  const [scoreDetails, setScoreDetails] = useState([
    {
      friend: "",
      score: "",
    },
  ]);
  //get creator id
  const id = localStorage.getItem("id");
  //fetch friend details
  const getFriends = async () => {
    try {
      const res = await axios.get(`${update}/${id}`);
      setTimeout(() => {
        setIsLoading(false);
        setScoreDetails(res.data.user.friends);
      }, 3000);
    } catch (err) {
      alert("an error occurred");
      window.location = "/share";
    }
  };

  useEffect(() => {
    getFriends();
  });

  return (
    <>
      <h2 className="scoreboard-header">
        <Link to="/share">
          <LeftArrow />
        </Link>
        ScoreBoard!!! <i className="fa-solid fa-medal"></i>
      </h2>
      {isLoading ? (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="friends-container">
          <div className="row">
            <p className="col-lg-6">Your Friends</p>
            <p className="col-lg-6">Score</p>
          </div>
          {scoreDetails.map((data) => (
            <div className="row">
              <h3 className="col-md-6 col-sm-6">
                <i className="fa-regular fa-circle-user"></i>
                {data.friend}
              </h3>
              <h3 className="col-md-6 col-sm-6">
                {data.score < 5 ? (
                  <i className="fa-solid fa-star-half-stroke"></i>
                ) : (
                  <i className="fa-solid fa-star"></i>
                )}
                {data.score}
              </h3>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ScoreBoard;
