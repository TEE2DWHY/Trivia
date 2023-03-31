import { Link } from "react-router-dom"

export const LeftArrow = () =>{
    return (
        <Link to="/">
         <i className="fa-solid fa-arrow-left" style={{color:"#000"}}></i> 
        </Link>
    )
}

export const RightArrow = () =>{
    return(
        <i className="fa-solid fa-arrow-right"></i>
    )
}