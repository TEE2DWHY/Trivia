import {Link} from "react-router-dom";
// component
import Footer from "../component/Footer";
// styling
import "./home.css";
// images
import cupid from "../assets/images/cupid.gif";
// icons
import { RightArrow } from "../assets/icons/Arrows";
const Home = () => {
  return (
    <>
    <div>
        <h1 className='header-text'>
          <mark>Friendship</mark> 
          Challenge!!
        </h1>
        <div className='header-2'>
            <span className='this'>This</span>
             <span className='separator'>or</span>
             <span className='that'>That</span>
        </div>
        <img className="cupid" src={cupid} alt="cupid" />
        <p className='p-1'>Let's see...</p>
        <h1 className='p-2'>How much do your Friends know You?</h1>
        <Link to="/create">
        <button className='cta'>
            Create Challenge <RightArrow/>
        </button>
        </Link>
    </div>
    <Footer/>   
    </>
  )
}

export default Home