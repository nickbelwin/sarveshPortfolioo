// function follower(){
//     window.addEventListener("mousemove", function(e){
//         document.querySelector("#cursor1").style.transform = `translate(${e.clientX}px , ${e.clientY}px)`;
//         document.querySelector("#cursor2").style.transform = `translate(${e.clientX}px , ${e.clientY}px)`;
//     })
// }
// follower();

// for mouse custom cursor-------------------- 
let innercursor = document.querySelector('#cursor1');
let outercursor = document.querySelector('#cursor2');
document.addEventListener('mousemove', moveCursor);

function moveCursor(e) {
    innercursor.classList.add("inner-cursor");
    outercursor.classList.add("outer-cursor")
    let x = e.clientX;
    let y = e.clientY;
    // console.log(x,y);
    innercursor.style.left = `${x}px`;
    innercursor.style.top = `${y}px`;
    outercursor.style.left = `${x}px`;
    outercursor.style.top = `${y}px`;
}

let links = Array.from(document.querySelectorAll("a"));
let links2 = Array.from(document.querySelectorAll(".bold"));
links.forEach((val) => {
    val.addEventListener("mouseover", () => {
        innercursor.classList.add("grow");
        outercursor.classList.add("groww");

    });
    val.addEventListener("mouseout", () => {
        innercursor.classList.remove("grow");
        outercursor.classList.remove("groww");
    });
});
links2.forEach((val) => {
    val.addEventListener("mouseover", () => {
        innercursor.classList.add("grow");
        outercursor.classList.add("groww");
    });
    val.addEventListener("mouseout", () => {
        innercursor.classList.remove("grow");
        outercursor.classList.remove("groww");
    });
});


// srollbar custom=================================
let header = document.getElementById("head");
let sticky = header.offsetTop;
let progress = document.getElementById("progressBar");
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    }
    else {
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
let menu = document.getElementById("menu");
let headlink = document.getElementById("headlink");
menu.addEventListener("click", menuFunc);
function menuFunc(e) {
    // headlink.innerHTML="";
    // e.preventDefault();
    headlink.innerHTML = `
    <a href="">About</a>
    <a href="">Education</a>
    <a href="">Projects</a>
    `;
}

// on scroll -----------------------------------
document.addEventListener("scroll", scrollFunc);

function scrollFunc() {
    let val = innerHeight / 5 * 4;
    console.log("val=>", val);
}
scrollFunc();

let on = document.getElementById("onHover");
let on2 = document.getElementById("onHover2");
let on3 = document.getElementById("onHover3");
let on4 = document.getElementById("onHover4");
let skill = document.querySelector(".skill");
let skill2 = document.querySelector(".skill2");
let skill3 = document.querySelector(".skill3");
let skill4 = document.querySelector(".skill4");
console.log(skill);
skill.addEventListener("mouseenter", () => {
    on.innerHTML=`<p>HTML stands for HyperText Markup Language. It is a standard markup language for web page creation. It allows the creation and structure of sections, paragraphs, and links using HTML elements (the building blocks of a web page) such as tags and attributes. </p>
    <img src="./media/html-5.png" width="20px" alt="">`;
    on.classList.add("skill_hover");
});
skill.addEventListener("mouseleave", () => {
    on.innerHTML="";
    on.classList.remove("skill_hover")
});
skill2.addEventListener("mouseenter", () => {
    on2.classList.add("skill_hover");
    on2.innerHTML=`<p>CSS stands for Cascading Style Sheets
    CSS describes how HTML elements are to be displayed on screen, paper, or in other media
    CSS saves a lot of work. It can control the layout of multiple web pages all at once
    External stylesheets are stored in CSS files</p>
    <img src="./media/css-3.png" width="10px" alt="">`
});
skill2.addEventListener("mouseleave", () => {
    on2.classList.remove("skill_hover");
    on2.innerHTML=""
});
skill3.addEventListener("mouseenter", () => {
    on3.classList.add("skill_hover");
    on3.innerHTML=`<p>
    JavaScript is the Programming Language for the Web.
    JavaScript can update and change both HTML and CSS.
    JavaScript can calculate, manipulate and validate data.
</p>
<img src="./media/js.png" alt="">`
});
skill3.addEventListener("mouseleave", () => {
    on3.classList.remove("skill_hover");
    on3.innerHTML="";
});
skill4.addEventListener("mouseenter", () => {
    on4.classList.add("skill_hover");
    on4.innerHTML=`<p>Java works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc.)
    It is easy to learn and simple to use
    It is open-source and free
    It is secure, fast and powerful
    It has a huge community support (tens of millions of developers)</p>
    <img src="./media/java.png" alt="">`;
});
skill4.addEventListener("mouseleave", () => {
    on4.classList.remove("skill_hover");
    on4.innerHTML="";
});
// skill.forEach((val)=>{
//     console.log(val);
//     val.addEventListener("mouseover",()=>{
//         on.classList.add("skill_hover")
//     });
//     skill.addEventListener("")
// })

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

// first page animation------------------------
function pageAnimation(){
    let headTag= gsap.timeline();
    headTag.from("#head", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    .to(".line_tag",{
        y: 0,
        duration: 2,
        delay: -1,
        ease: Expo.easeInOut,
        stagger: .3
    })
    .from("#foot", {
        y: '-10',
        opacity: 0,
        delay: -1,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    .from("#socialMedia",{
        y: '-10',
        opacity: 0,
        delay: -1,
        duration: 1.5,
        ease: Expo.easeInOut
    })
}
pageAnimation();

document.querySelectorAll(".projectelements").forEach((val)=>{
    val.addEventListener("mousemove", function(e){
        var diff= e.clientY - val.getBoundingClientRect().top;
        gsap.to(val.querySelector("img"),{
            opacity:1,
            ease: Power1,
            top: diff,
            left: e.clientX
        })
    })
    val.addEventListener("mouseout", function(e){
        let diff= e.clientY - val.getBoundingClientRect().top;
        gsap.to(val.querySelector("img"),{
            opacity:0,
            ease: Power1,
            top:diff,
            left: e.clientX
        })
    })
});
document.getElementById("spotifyclone").addEventListener("click", (e)=>{
    window.location.href="https://nickbelwin.github.io/spotifyclone";
})