import "./create.css"
import { useState } from "react";
import {LeftArrow} from "../assets/icons/Arrows";
import { Person } from "../assets/icons/Personality";
// image
import boy from "../assets/images/boy.png";
import girl from "../assets/images/girl.png"
import { userName } from "../config/session";

const Create = () => {
    // name
    const [name, setName] = useState("");
    const handleName = (e) =>{
        setName(
           e.target.name =  e.target.value
        )
    }
    // gender
    const [gender, setGender] = useState({
        boy: false, girl: false
    });
    const handleGender = (e) =>{
        setGender((prevFormData) =>{
            return{
                ...prevFormData,
                [e.target.name] : true
            }
        })
        window.location = "/start"
    }
    const handleSubmit = (e) =>{
            e.preventDefault();
            userName(name)
            document.querySelector(".gender").classList.add("show-gender");
            document.querySelector(".form").classList.add("hide-form");
    }
    console.log(gender)
  return (
   <>
       <div>
            <h1 className='create-quiz'><LeftArrow/> Create Quiz</h1>
            <form onSubmit={handleSubmit} className="form">
                <h2 className="name">What's your Name?</h2>
                <Person/>
                <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    onChange={handleName}
                />
                <button className="continue">
                    Continue
                </button>
            </form>
            {/* Gender */}
            <div className="gender">
                 <br/>
                <h1>Welcome <span className="name">{name}</span>!!</h1>
                <h2 className="who-are-you">Whats your Gender?</h2>
                <span className="gender-icon">
                   <div className="gender-container" onClick={handleGender}>
                        <img className="gender-img" src={boy} alt="boy" name="boy"/>
                   </div>
                  <div className="gender-container" onClick={handleGender}>
                        <img className="gender-img" src={girl} alt="boy" name="girl"/>
                  </div>
                </span>
            </div>
       </div>
   </>
  )
}

export default Create