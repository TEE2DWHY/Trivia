// set username
export const userName = (name)=>{
    sessionStorage.setItem("name", `${name}`);
    sessionStorage.setItem("user", true);
}
