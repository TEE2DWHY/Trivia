import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// styling
import "./home.css";
// images
import love from "../../assets/images/Love.gif";
// urls
import { update } from "../../config/url";
// config
import { creatorChoice, id } from "../../config/session";

const Home = () => {
  // get creator's id
  const creatorId = window.location.search.slice(4);
  id(creatorId);
  //get creator resource(s)
  const [data, setData] = useState({});
  useEffect(() => {
    const resource = async () => {
      try {
        const res = await axios.get(`${update}/${creatorId}`);
        setData(res.data.user);
      } catch (err) {
        // console.log(err)
      }
    };
    resource();
  });
  //get creator's choice(s) resource
  const [choice, setChoice] = useState([]);
  useEffect(() => {
    const choices = async () => {
      try {
        const res = await axios.get(`${update}/${creatorId}`);
        setChoice(res.data.user.choice);
      } catch (err) {
        // console.log(err)
      }
    };
    choices();
  });
  // store creator's choices in session storage
  if (data.name) {
    creatorChoice(data.name, choice);
  }
  return (
    <>
      <div className="home">
        <h1 className="home-h1">
          <mark>Friendship Test!!</mark>
        </h1>
        <div className="this-and-that">
          <span className="circle1">This</span>
          <span className="or"> Or </span>
          <span className="circle2">That</span>
        </div>
        <h3 className="challenge">Challenge</h3>
        <img className="friends" src={love} alt="friends" />
        <h3 className="h-2">
          Can you guess the choice of <span className="name">{data.name}?</span>
        </h3>
        <Link to="/play">
          <button className="accept">Accept Dare</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
