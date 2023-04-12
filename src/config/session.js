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
export const creatorChoice = (name, [beard, gym, song, swallow, sex, subject, social, vendor])=>{
    sessionStorage.setItem("creatorName", name);
    sessionStorage.setItem("beardChoice", beard);
    sessionStorage.setItem("gymChoice", gym);
    sessionStorage.setItem("songChoice", song);
    sessionStorage.setItem("swallowChoice", swallow);
    sessionStorage.setItem("sexChoice", sex);
    sessionStorage.setItem("subjectChoice", subject);
    sessionStorage.setItem("socialChoice", social);
    sessionStorage.setItem("vendorChoice", vendor);
}
