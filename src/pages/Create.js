import "./create.css"
import axios from "axios"
import { useState } from "react";
import {LeftArrow} from "../assets/icons/Arrows";
import { Person } from "../assets/icons/Personality";
// image
import boy from "../assets/images/boy.png";
import girl from "../assets/images/girl.png"
// session
import { id, userName } from "../config/session";
// url
import { create } from "../config/url";

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
    }
    // post username to database
    const submitName = async (e) =>{
        e.preventDefault();
        try{
            const res = await axios.post(create, {name})
            console.log(res.data)
            userName(res.data.user.name);
            id(res.data.user._id)
            document.querySelector(".gender").classList.add("show-gender");
            document.querySelector(".form").classList.add("hide-form");
        }
        catch(err){
            // console.log(err);
            const error = document.querySelector(".error")
            error.innerHTML = `<p>An error occurred....</p>`
        }
         
    }
    // update user gender to database
    // const submitGender = async () =>{
    //     const boy = document.getElementById("boy")
    //     boy.addEventListener("click", handleGender);
    //     const girl = document.getElementById("girl")
    //     girl.addEventListener("click", handleGender)
    //     try{
    //         const res = await axios.post(create, gender)
    //        console.log(res.data)
    //     }
    //     catch(err){
    //         console.log(err);
    //         // const error = document.querySelector(".error")
    //         // error.innerHTML = `<p>An error occurred....</p>`
    //     }  
    // }
    console.log(gender)

  return (
   <>
       <div>
            <h1 className='create-quiz'><LeftArrow/> Create Quiz</h1>
            <form onSubmit={submitName} className="form">
                <h2 className="name">What's your Name?</h2>
                <Person/>
                <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    onChange={handleName}
                />
                <div className="error"></div>
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
                   <div className="gender-container">
                    <img className="gender-img" src={boy} alt="boy" name="boy" id="boy" onClick={handleGender}/>
                   </div>
                  <div className="gender-container">
                    <img className="gender-img" src={girl} alt="boy" name="girl" id="girl" onClick={handleGender}/>
                  </div>
                </span>
            </div>
       </div>
   </>
  )
}

export default Create