import { link } from "../pages/Share";
export const whatsapp = () =>{
    const url = link
    var text = "Take this test...How much do you know me?";
    var message = encodeURIComponent(url) + " - " + encodeURIComponent(text);
    var whatsapp_url = "https://api.whatsapp.com/send?text=" + message;
    window.open(whatsapp_url);
}


// export const facebook = () =>{
//     var url = "https://www.example.com"; // replace with your desired URL
//     var text = "Check out this website!"; // replace with your desired text
//     FB.ui({
//     method: 'share',
//     href: url,
//     quote: text
//     }, function(response){});
// }