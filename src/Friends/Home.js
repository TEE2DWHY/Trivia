// styling
import "./home.css"
// images
import love from "../assets/images/Love.gif"
const Home = () => {
  return (
    <>
        <div className="home">
            <h1 className="home-h1"><mark>Friendship Test!!</mark></h1>
            <div className="this-and-that">
                <span className="this">This</span> <span className="or"> Or </span> <span className="that">That</span>
            </div>
            <h3 className="challenge">Challenge</h3>
            <img className="friends" src={love} alt="friends"/>
            <h3 className="h-2">Can you guess the choice of <span className="name"><mark>bode?</mark></span></h3>
            <button className="accept">Accept Dare</button>
        </div>
    </>
  )
}

export default Home