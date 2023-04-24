import axios from "axios";
import { useState } from "react";
//styling
import "./scoreboard.css";
//url
import { update } from "../config/url";

const ScoreBoard = () => {
  const [scoreDetails, setScoreDetails] = useState({
    friend: "",
    score: "",
  });
  //get creator id
  const id = sessionStorage.getItem("id");

  const getScore = async () => {
    const res = await axios.get(`${update}/${id}`);
    setScoreDetails(res.data.user.friends);
  };
  getScore();
  //   console.log(scoreDetails);
  return (
    <>
      <h4 className="scoreboard-header">ScoreBoard</h4>
      <div className="friends-container">
        <h3>{scoreDetails.friend}</h3>
        <h6>{scoreDetails.score}</h6>
      </div>
    </>
  );
};

export default ScoreBoard;
