import axios from "axios";
import { useState } from "react";
//styling
import "./scoreboard.css";
//url
import { update } from "../config/url";

const ScoreBoard = () => {
  const [scoreDetails, setScoreDetails] = useState([
    {
      friend: "",
      score: "",
    },
  ]);
  //get creator id
  const id = sessionStorage.getItem("id");

  const getScore = async () => {
    const res = await axios.get(`${update}/${id}`);
    // console.log(res.data.user.friends);
    setScoreDetails(res.data.user.friends);
  };
  getScore();
  console.log(scoreDetails);
  return (
    <>
      <h2 className="scoreboard-header">
        ScoreBoard!!! <i class="fa-solid fa-medal"></i>
      </h2>
      <div className="friends-container">
        <div className="row">
          <p className="col-lg-6">Your Friends</p>
          <p className="col-lg-6">Score</p>
        </div>
        {scoreDetails.map((data) => (
          <div className="row">
            <h3 className="col-md-6 col-sm-6">
              <i class="fa-regular fa-circle-user"></i>
              {data.friend}
            </h3>
            <h3 className="col-md-6 col-sm-6">
              {data.score < 5 ? (
                <i class="fa-solid fa-star-half-stroke"></i>
              ) : (
                <i class="fa-solid fa-star"></i>
              )}
              {data.score}
            </h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default ScoreBoard;
