let innercursor=document.querySelector('.inner-cursor');
let outercursor=document.querySelector('.outer-cursor');
document.addEventListener('mousemove', moveCursor);

function moveCursor(e){
    let x=e.clientX;
    let y=e.clientY;
    console.log(x,y);
    innercursor.style.left=`${x}px`;
    innercursor.style.top=`${y}px`;
    outercursor.style.left=`${x}px`;
    outercursor.style.top=`${y}px`;
}

let links=Array.from(document.querySelectorAll("a"));

links.forEach((val)=>{
    val.addEventListener("mouseover",()=>{
        innercursor.classList.add("grow");
    });
    val.addEventListener("mouseout",()=>{
        innercursor.classList.remove("grow");
    });
})