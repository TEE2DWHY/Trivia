import { Link } from "react-router-dom";
// styling
import "./result.css";
// images
import result from "../../assets/images/result.gif";
// import poor from "../../assets/images/poor.gif";
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
        <h3>
          {score >= "5"
            ? `Good Friend!`
            : `You don't really know ${creatorName}!`}
        </h3>
        <img className="result" src={result} alt="eyes" />
        <br />
        <h2 className="result-text">
          Score: {score} / {creatorChoice}
        </h2>
        <h4 className="creator-reaction">
          {score >= "5"
            ? `${creatorName} will be happy.`
            : `${creatorName} would be disappointed.`}
        </h4>
      </div>
      <p className="turn">Now it’s Your turn!</p>
      <Link to="/">
        <button className="create-challenge">Create Your Challenge 👀</button>
      </Link>
    </>
  );
};

export default Result;
