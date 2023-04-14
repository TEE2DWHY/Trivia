// styling
import "./result.css";
// images
import result from "../../assets/images/result.gif";
import { Link } from "react-router-dom";
const Result = () => {
  // get creator's name
  const creatorName = sessionStorage.getItem("creatorName");
  //get user score
  const score = sessionStorage.getItem("score");
  //get creator's choice
  const creatorChoice = sessionStorage.getItem("choiceLength");
  return (
    <>
      <div className="result-container">
        <h1>Good Friend!</h1>
        <img className="result" src={result} alt="eyes" />
        <br />
        <h2 className="result-text">
          {score} / {creatorChoice}
        </h2>
        <h4 className="creator-reaction">{creatorName} will like it.</h4>
      </div>
      <p className="turn">Now it’s Your turn!</p>
      <Link to="/">
        <button className="create-challenge">Create Your Challenge 👀</button>
      </Link>
    </>
  );
};

export default Result;
