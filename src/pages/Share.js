// styling
import "./share.css"
// icons
import Copy from "../assets/icons/Copy"
import { Facebook, Instagram, Messenger, SnapChat, WhatsApp } from "../assets/icons/Social"
// socials sharing
import { whatsapp } from "../utils/socials"
// url link
const id = "gneQBA";
export const link = `https://trivia-gamex.netlify.app/?id=${id}`
const Share = () => {
  // copy url link
  const copy = () =>{
    const link = document.getElementById("link");
    const url = link.innerHTML
    navigator.clipboard.writeText(url);
    alert(`${url} is copied. Share with your friends.`)
  }
  return (
    <>
        <h1 className="share-header">Share Quiz...</h1>
        <h3 className="guess">Let's see who can guess your choice?</h3>
        <div className="share">
            <h3 className="quiz-link">Send <span style={{fontWeight:"bold"}}>Quiz Link</span> to Friends</h3>
            <div className="link">
              <span className="share-link">
              <h5 className="link-content" id="link">
              {link}</h5>
              </span>
              <span className="copy" onClick={()=>{
                 copy()
              }}><Copy/></span>
            </div>
            <button className="whatsapp" onClick={whatsapp}>
                <WhatsApp/> Share on WhatsApp
            </button>
            <div>
              <button className="snapchat">
                  <SnapChat/> SnapChat
              </button>
              <button className="facebook">
                 <Facebook/> Facebook
              </button>
            </div>
            <div>
              <button className="messenger">
                 <Messenger/> Messenger
              </button>
              <button className="instagram">
                  <Instagram/> Instagram
              </button>
            </div>
            <button className="scores">
               View Scores
            </button>
        </div>

    </>
  )
}

export default Share
