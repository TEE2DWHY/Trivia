// set username
export const userName = (name) => {
  localStorage.setItem("name", `${name}`);
  localStorage.setItem("user", true);
};
// set user id
export const id = (id) => {
  localStorage.setItem("id", id);
};
// set creator choice
export const creatorChoice = (
  name,
  [beard, gym, song, swallow, sex, subject, social, vendor]
) => {
  localStorage.setItem("beardChoice", beard);
  localStorage.setItem("creatorName", name);
  localStorage.setItem("gymChoice", gym);
  localStorage.setItem("songChoice", song);
  localStorage.setItem("swallowChoice", swallow);
  localStorage.setItem("sexChoice", sex);
  localStorage.setItem("subjectChoice", subject);
  localStorage.setItem("socialChoice", social);
  localStorage.setItem("vendorChoice", vendor);
};

//set user(s) choice
export const userChoice = ([
  beard,
  gym,
  song,
  swallow,
  sex,
  subject,
  social,
  vendor,
]) => {
  localStorage.setItem("userBeardChoice", beard);
  localStorage.setItem("userGymChoice", gym);
  localStorage.setItem("userSongChoice", song);
  localStorage.setItem("userSwallowChoice", swallow);
  localStorage.setItem("userSexChoice", sex);
  localStorage.setItem("userSubjectChoice", subject);
  localStorage.setItem("userSocialChoice", social);
  localStorage.setItem("userVendorChoice", vendor);
};

// set matched values
export const matchedValues = (choices) => {
  localStorage.setItem("score", choices);
};
