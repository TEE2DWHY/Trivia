// icons
import Restart from "../../assets/icons/Restart";
import Button from "../../component/Button";
// utils
import { display } from "../../utils/display";
// import { hide, skip } from "../utils/skip";
// styling
import ".././start.css"

const Start = () => {
    // get creator name
    const creatorName = sessionStorage.getItem("creatorName");
    //get user name
    const userName = sessionStorage.getItem("name");
  return (
    <> 
        <Button
            text="1"
           />
          <Button
          text="2"
           />
          <Button
          text="3"
           />
          <Button
          text="4"
           />
          <Button
          text="5"
           />
          <Button
          text="6"
           />
          <Button
          text="7"
           />
          <Button
          text="8"
           />
          <Button
          text="9"
           />
        <h3 className="choice"><span style={{textTransform: "capitalize",  padding: "0 5px"}}>{userName}</span> 
        what  will <span style={{textTransform: "capitalize", padding: "0 5px"}}>{creatorName}</span> Choose?
        </h3>
        <div className="choice">
        <div className="beard object" onClick={()=>{
          display(".beard", "hide-class")
          display(".gym", "show-class")
        }}  id="element1">
          <button className="beard">Beard</button> <button>No Beards</button>
        </div>

        <div className="gym object" onClick={()=>{
           display(".gym", "hide-class")
           display(".song", "show-class")
        }} id="element2">
          <button>Gym</button> <button>No Gym</button>
        </div>

        <div className="song object" onClick={()=>{
           display(".song", "hide-class")
           display(".swallow", "show-class")
           }} id="element3">
          <button>Sad Songs</button> <button>Romantic Songs</button>
        </div>

        <div className="swallow object" onClick={()=>{
           display(".swallow", "hide-class")
           display(".sex", "show-class")
           }} id="element4">
          <button>Eba</button> <button>Amala</button>
        </div>

        <div className="sex object" onClick={()=>{
           display(".sex", "hide-class")
           display(".subject", "show-class")
           }} id="element5">
          <button>Missionary</button> <button>Doggy</button>
        </div>

        <div className="subject object" onClick={()=>{
           display(".subject", "hide-class")
           display(".social-media", "show-class")
           }} id="element6">
          <button>Math</button> <button>English</button>
        </div>

        <div className="social-media object" onClick={()=>{
           display(".social-media", "hide-class")
           display(".movies", "show-class")
           }} id="element7">
          <button>Twitter</button> <button>Instagram</button>
        </div>

        <div className="movies object" onClick={()=>{
           display(".movies", "hide-class")
           display(".food-hub", "show-class")
           display(".skip", "hide-class")
           }} id="element8">
          <button>Action Movies</button> <button>Love Movies</button>
        </div>

        <div className="food-hub">
          <button>Sans Buka</button> <button>Skillz</button>
          {/* submit */}
          <>
            <button className="submit">
              Submit
            </button>
            </>
          </div>

      <button className="skip" onClick={()=>{
            window.location.reload()
            // hide(".object", "hide-class");
            // skip("element1", "element2", "element3", "element4", "element5", "element6","element7", "element8")
          }}>Restart <Restart/>
        </button>
    
        </div>

    </>
  )
}

export default Start