// styling
import "./home.css"
// images
import love from "../../assets/images/Love.gif";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
        <div className="home">
            <h1 className="home-h1"><mark>Friendship Test!!</mark></h1>
            <div className="this-and-that">
                <span className="circle1">This</span> <span className="or"> Or </span> <span className="circle2">That</span>
            </div>
            <h3 className="challenge">Challenge</h3>
            <img className="friends" src={love} alt="friends"/>
            <h3 className="h-2">Can you guess the choice of <span className="name"><mark>bode?</mark></span></h3>
            <Link to="/play">
              <button className="accept">Accept Dare</button>
            </Link>
        </div>
    </>
  )
}

export default Home