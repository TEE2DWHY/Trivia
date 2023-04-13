// styling
import "./result.css";
// images
import result from "../../assets/images/result.gif";
const Result = () => {
  const creatorName = sessionStorage.getItem("creatorName");
  return (
    <>
      <div className="result-container">
        <h1>Good Friend</h1>
        <img className="result" src={result} alt="eyes" />
        <br />
        <h4 className="creator-reaction">{creatorName} will like it.</h4>
      </div>
      <p className="turn">Now it’s Your turn!</p>
      <button className="create-challenge">Create Your Challenge 👀</button>
    </>
  );
};

export default Result;
