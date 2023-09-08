// for mouse custom cursor-------------------- 
let innercursor=document.querySelector('#cursor1');
let outercursor=document.querySelector('#cursor2');
document.addEventListener('mousemove', moveCursor);

function moveCursor(e){
    innercursor.classList.add("inner-cursor");
    outercursor.classList.add("outer-cursor")
    let x=e.clientX;
    let y=e.clientY;
    console.log(x,y);
    innercursor.style.left=`${x}px`;
    innercursor.style.top=`${y}px`;
    outercursor.style.left=`${x}px`;
    outercursor.style.top=`${y}px`;
}

let links=Array.from(document.querySelectorAll("a"));
let links2=Array.from(document.querySelectorAll(".bold"));
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
// srollbar custom=================================
let header=document.getElementById("head");
let sticky=header.offsetTop;
let progress=document.getElementById("progressBar");
let totalHeight=document.body.scrollHeight - window.innerHeight;
window.onscroll= function(){
    let progressHeight=(window.pageYOffset / totalHeight)*100;
    progress.style.height=progressHeight+ "%";
    if(window.pageYOffset > sticky){
        header.classList.add("sticky");
    }
    else{
        header.classList.remove("sticky");
    }
}

// for Sticky header------------------
// let header=document.getElementById("head");
// let sticky=header.offsetTop;
// window.onscroll=function(){
//     myScroll();
// }
// function myScroll(){
//     if(window.pageYOffset > sticky){
//         header.classList.add("sticky");
//     }
//     else{
//         header.classList.remove("sticky");
//     }
// }

// for menu+ ---------------------------
let menu=document.getElementById("menu");
let headlink=document.getElementById("headlink");
menu.addEventListener("click", menuFunc);
function menuFunc(e){
    // headlink.innerHTML="";
    // e.preventDefault();
    headlink.innerHTML=`
    <a href="">About</a>
    <a href="">Education</a>
    <a href="">Projects</a>
    `;
}

// on scroll -----------------------------------
document.addEventListener("scroll", scrollFunc);

function scrollFunc(){
    let val= innerHeight/5*4;
    console.log("val=>",val);
}
scrollFunc();