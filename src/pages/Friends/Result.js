// styling
import "./result.css";
// images
import result from "../../assets/images/result.gif";
import angry from "../../assets/images/angry.gif";
const Result = () => {
  // get creator's name
  const creatorName = localStorage.getItem("creatorName");
  //get user score
  const score = localStorage.getItem("score");
  if (!score) {
    alert("User score does not exist.");
    window.location = "/";
  }
  //get creator's choice
  const creatorChoice = localStorage.getItem("choiceLength");
  return (
    <>
      <div className="result-container">
        <h3>
          {score >= "5"
            ? `Good Friend!`
            : `You don't really know ${creatorName}!`}
        </h3>
        <img
          className="result"
          src={score >= "5" ? `${result}` : `${angry}`}
          alt="eyes"
        />
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
      <p className="friend-note">{creatorName} can see your score😎...</p>
      <p className="turn">Now it’s Your turn!</p>
      <button
        className="create-challenge"
        onClick={() => {
          localStorage.clear();
          window.location = "/";
        }}
      >
        Create Your Challenge 👀
      </button>
    </>
  );
};

export default Result;
