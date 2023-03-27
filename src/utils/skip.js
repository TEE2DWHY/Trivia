export function skip(a, b, c, d, e, f, g){
    const ids = [a, b, c ,d, e, f, g];
    const randomId = ids[Math.floor(Math.random() * ids.length)];
    const randomElement = document.getElementById(randomId);
    randomElement.style.display = "block"
    // console.log(randomElement)
}

export function hide(a){
    const elements = document.querySelectorAll(a);
    //hide elements
    elements.forEach(element =>{
        element.style.display = "none"
    })
} 

