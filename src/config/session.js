// set username
export const userName = (name)=>{
    sessionStorage.setItem("name", `${name}`);
    sessionStorage.setItem("user", true);
}
//set user id
export const id = (id) =>{
    sessionStorage.setItem("id", id)
}
