// set username
export const userName = (name)=>{
    sessionStorage.setItem("name", `${name}`);
    sessionStorage.setItem("user", true);
}
// set user id
export const id = (id) =>{
    sessionStorage.setItem("id", id)
}
// set creator choice
export const creatorChoice = (name)=>{
    sessionStorage.setItem("creatorName", name);
    // sessionStorage.setItem("gender", gender)
}

// export const getId = (id)=>{
//     sessionStorage.getItem(id)
// }
