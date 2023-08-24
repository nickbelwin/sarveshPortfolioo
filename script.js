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
let links2=Array.from(document.querySelectorAll("h3"));

links.forEach((val)=>{
    val.addEventListener("mouseover",()=>{
        innercursor.classList.add("grow");
        outercursor.classList.add("groww");
    });
    val.addEventListener("mouseout",()=>{
        innercursor.classList.remove("grow");
        outercursor.classList.remove("groww");
    });
});
links2.forEach((val)=>{
    val.addEventListener("mouseover",()=>{
        innercursor.classList.add("grow");
        outercursor.classList.add("groww");
    });
    val.addEventListener("mouseout",()=>{
        innercursor.classList.remove("grow");
        outercursor.classList.remove("groww");
    });
});