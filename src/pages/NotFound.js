import { Link } from "react-router-dom";
// images
import error from "../assets/images/404.gif"
const NotFound = () => {
  return (
    <>
            <h2 className="broken">
              Oops... You followed a <strong>Broken Link</strong>
            </h2>
            <img className="error img-fluid" src={error} alt="404"/>
            <Link to="/">
              <h4>Back to Home Page</h4>
            </Link>

    </>
   
  )
}

export default NotFound