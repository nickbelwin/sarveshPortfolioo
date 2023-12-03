// function follower(){
//     window.addEventListener("mousemove", function(e){
//         document.querySelector("#cursor1").style.transform = `translate(${e.clientX}px , ${e.clientY}px)`;
//         document.querySelector("#cursor2").style.transform = `translate(${e.clientX}px , ${e.clientY}px)`;
//     })
// }
// follower();
document.getElementById("mainLoader").style.transform="scale(1)";
setTimeout(()=>{
    document.getElementById("mainLoader").style.transform="scale(0)";
    document.getElementById("main").style.display="block";
    pageAnimation();
},2300)
setTimeout(()=>{
    document.getElementById("mainLoader").style.display="none";
},3000)

// for mouse custom cursor-------------------- 
let innercursor = document.querySelector('#cursor1');
let outercursor = document.querySelector('#cursor2');
document.addEventListener('mousemove', moveCursor);

function moveCursor(e) {
    innercursor.classList.add("inner-cursor");
    outercursor.classList.add("outer-cursor");
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
    val.addEventListener("click", ()=>{
        innercursor.classList.remove("grow");
        outercursor.classList.remove("groww");
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
    val.addEventListener("click", ()=>{
        innercursor.classList.remove("grow");
        outercursor.classList.remove("groww");
    })
    val.addEventListener("mouseout", () => {
        innercursor.classList.remove("grow");
        outercursor.classList.remove("groww");
    });
});


// srollbar custom=================================
let header = document.getElementById("head");
let myName = document.querySelector(".myName");
let sticky = header.offsetTop;
let progress = document.getElementById("progressBar");
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        myName.innerHTML = ``;
    }
    else {
        header.classList.remove("sticky");
        myName.innerHTML = `Sarvesh Belwalkar`;
    }
}

// ------------------------ drop menu-----------------------

const dropMenu = document.getElementById("menu");
let flagdrop = true;
dropMenu.addEventListener("click", (e) => {
    e.stopPropagation();
    if(flagdrop===true){
        flagdrop=false;
        dropMenu.innerHTML="Back";
        document.querySelector(".dropmenu").style.transform="translateX(0px)";
        
    }
    else{
        flagdrop=true;
        dropMenu.innerHTML="Menu+";
        document.querySelector(".dropmenu").style.transform="translateX(700px)";
    }
})
document.getElementById("main").addEventListener("click", ()=>{
    flagdrop=true;
    dropMenu.innerHTML="Menu+";
    document.querySelector(".dropmenu").style.transform="translateX(700px)";
})


// dropMenu.addEventListener("click", () => {
//     if (flagdrop === true) {
//         flagdrop = false;
//         document.getElementById("dropDown").style.display="block";
//         let menuAnimation = gsap.timeline();
//         menuAnimation.from("#menu", {
//             x: '0',
//             opacity: 1,
//             duration: 1,
//             ease: Expo.easeInOut
//         })
//             .from("#drop1", {
//                 x: '20',
//                 opacity: 0,
//                 delay: -1,
//                 duration: 1.1,
//                 ease: Expo.easeInOut
//             })
//             .from("#drop2", {
//                 x: '20',
//                 opacity: 0,
//                 delay: -1,
//                 duration: 1.1,
//                 ease: Expo.easeInOut
//             })
//             .from("#drop3", {
//                 y: '20',
//                 opacity: 0,
//                 delay: -1,
//                 duration: 1.1,
//                 ease: Expo.easeInOut
//             })
//             .from("#drop4", {
//                 x: '20',
//                 opacity: 0,
//                 delay: -1,
//                 duration: 1.1,
//                 ease: Expo.easeInOut
//             })
//             .from("#drop5", {
//                 y: '20',
//                 opacity: 0,
//                 delay: -1,
//                 duration: 1.1,
//                 ease: Expo.easeInOut
//             })
//             .from("#drop6", {
//                 x: '20',
//                 opacity: 0,
//                 delay: -1,
//                 duration: 1.1,
//                 ease: Expo.easeInOut
//             })
//             .from("#drop7", {
//                 x: '20',
//                 opacity: 0,
//                 delay: -1,
//                 duration: 1.1,
//                 ease: Expo.easeInOut
//             })

//         dropMenu.style.backgroundColor = "white";
//         dropMenu.style.color = "black";
//         document.getElementById("dropDown").addEventListener("click", () => {
//             flagdrop = true;
//             document.getElementById("drop").innerHTML = "";
//             dropMenu.style.backgroundColor = "black";
//             dropMenu.style.color = "white";

//         })
//     }
//     else {
//         flagdrop = true;
//         document.getElementById("drop").innerHTML = "";
//         dropMenu.style.backgroundColor = "black";
//         dropMenu.style.color = "white";
//     }
// })

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
// let menu = document.getElementById("menu");
// let headlink = document.getElementById("headlink");
// menu.addEventListener("click", menuFunc);
// function menuFunc(e) {
//     // headlink.innerHTML="";
//     // e.preventDefault();
//     headlink.innerHTML = `
//     <a href="">About</a>
//     <a href="">Education</a>
//     <a href="">Projects</a>
//     `;
// }

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
    on.innerHTML = `<p>HTML stands for HyperText Markup Language. It is a standard markup language for web page creation. It allows the creation and structure of sections, paragraphs, and links using HTML elements (the building blocks of a web page) such as tags and attributes. </p>
    <img src="./media/html-5.png" width="20px" alt="">`;
    on.classList.add("skill_hover");
});
skill.addEventListener("mouseleave", () => {
    on.innerHTML = "";
    on.classList.remove("skill_hover")
});
skill2.addEventListener("mouseenter", () => {
    on2.classList.add("skill_hover");
    on2.innerHTML = `<p>CSS stands for Cascading Style Sheets
    CSS describes how HTML elements are to be displayed on screen, paper, or in other media
    CSS saves a lot of work. It can control the layout of multiple web pages all at once
    External stylesheets are stored in CSS files</p>
    <img src="./media/css-3.png" width="10px" alt="">`
});
skill2.addEventListener("mouseleave", () => {
    on2.classList.remove("skill_hover");
    on2.innerHTML = ""
});
skill3.addEventListener("mouseenter", () => {
    on3.classList.add("skill_hover");
    on3.innerHTML = `<p>
    JavaScript is the Programming Language for the Web.
    JavaScript can update and change both HTML and CSS.
    JavaScript can calculate, manipulate and validate data.
</p>
<img src="./media/js.png" alt="">`
});
skill3.addEventListener("mouseleave", () => {
    on3.classList.remove("skill_hover");
    on3.innerHTML = "";
});
skill4.addEventListener("mouseenter", () => {
    on4.classList.add("skill_hover");
    on4.innerHTML = `<p>Java works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc.)
    It is easy to learn and simple to use
    It is open-source and free
    It is secure, fast and powerful
    It has a huge community support (tens of millions of developers)</p>
    <img src="./media/java.png" alt="">`;
});
skill4.addEventListener("mouseleave", () => {
    on4.classList.remove("skill_hover");
    on4.innerHTML = "";
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
function pageAnimation() {
    let headTag = gsap.timeline();
    headTag.from("#head", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
        .to(".line_tag", {
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
        .from("#socialMedia", {
            y: '-10',
            opacity: 0,
            delay: -1,
            duration: 1.5,
            ease: Expo.easeInOut
        })
}

document.querySelectorAll(".projectelements").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;

    elem.addEventListener("mouseleave", function (dets) {
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power3,
            duration: 0.5,
        });
    });

    elem.addEventListener("mousemove", function (dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
        });
    });
});


// document.getElementById("spotifyclone").addEventListener("click", (e) => {
//     window.location.href = "https://nickbelwin.github.io/spotifyclone";
// });
document.getElementById("loginpage").addEventListener("click", (e) => {
    window.location.href = "https://nickbelwin.github.io/spotifyclone/html/loginPage.html";
});
document.getElementById("typingGame").addEventListener("click", (e) => {
    window.location.href = "https://nickbelwin.github.io/typingGame/";
});
document.getElementById("tictactoe").addEventListener("click", (e) => {
    window.location.href = "https://nickbelwin.github.io/TicTacToeGame/";
});
document.getElementById("taskManager").addEventListener("click", (e) => {
    window.location.href = "https://nickbelwin.github.io/Task-Manager-App---Javascript-Project---adumymr7rrtu/";
});
document.getElementById("movieDeck").addEventListener("click", (e) => {
    window.location.href = "https://nickbelwin.github.io/Movie-Deck-Project-Buidling---JS-Project-Building-Session-HTML-CSS---In-Cla---y04lgd7b2xpx/";
});
document.getElementById("page1").addEventListener("click", () => {
    flagdrop = true;
    document.getElementById("drop").innerHTML = "";
    dropMenu.style.backgroundColor = "black";
    dropMenu.style.color = "white";
});
document.getElementById("page2").addEventListener("click", () => {
    flagdrop = true;
    document.getElementById("drop").innerHTML = "";
    dropMenu.style.backgroundColor = "black";
    dropMenu.style.color = "white";
});
document.getElementById("page3").addEventListener("click", () => {
    flagdrop = true;
    document.getElementById("drop").innerHTML = "";
    dropMenu.style.backgroundColor = "black";
    dropMenu.style.color = "white";
});
document.getElementById("page4").addEventListener("click", () => {
    flagdrop = true;
    document.getElementById("drop").innerHTML = "";
    dropMenu.style.backgroundColor = "black";
    dropMenu.style.color = "white";
});
document.getElementById("page5").addEventListener("click", () => {
    flagdrop = true;
    document.getElementById("drop").innerHTML = "";
    dropMenu.style.backgroundColor = "black";
    dropMenu.style.color = "white";
});
document.getElementById("page6").addEventListener("click", () => {
    flagdrop = true;
    document.getElementById("drop").innerHTML = "";
    dropMenu.style.backgroundColor = "black";
    dropMenu.style.color = "white";
});
// function sendEmail(){
//     let name=document.getElementById("name").value;
//     let enteredEmail=document.getElementById("email").value;
//     let subject=document.getElementById("subject").value;
//     let message=document.getElementById("message").value;

//     let body= "Name: "+name+ "<br/> Email: "+enteredEmail+ "<br/> Subject: "+subject+ "<br/> Message: "+message;

//     console.log("body: ",body);

//     Email.send({
//         SecureToken : "896f9306-4218-4bb1-a1a5-c1c8b63a17d",
//         // Host : "smtp.elasticemail.com",
//         // Username : "belwalkarsarvesh@gmail.com",
//         // Password : "29CF86B94A8411935A831FAF2D436C784B41",
//         To : 'belwalkarsarvesh@gmail.com',
//         From : enteredEmail,
//         Subject : subject,
//         Body : body
//     }).then(
//       message => alert(message)
//     );
// }
let userName= document.getElementById("name").value;


function showContactError(){
  
    if(!document.getElementById("name").value){
        
        document.getElementById("nameError").style.transform="translateY(0px)";
        document.getElementById("nameError").style.zIndex="1";
    }
    if(!document.getElementById("email").value){
        
        document.getElementById("emailError").style.transform="translateY(0px)";
        document.getElementById("emailError").style.zIndex="1";
    }
    if(!document.getElementById("message").value){
        console.log(document.getElementById("message").value);
        document.getElementById("msgError").style.transform="translateY(0px)";
        document.getElementById("msgError").style.zIndex="1";
    }
}

function checkInput(e){
    if(document.getElementById("name").value){
        document.getElementById("nameError").style.transform="translateY(-15px)";
        document.getElementById("nameError").style.zIndex="-1";
    }
    if(document.getElementById("email").value){
        document.getElementById("emailError").style.transform="translateY(-15px)";
        document.getElementById("emailError").style.zIndex="-1";
        let userEmail= document.getElementById("email").value;
        if(userEmail.includes("@")){
            document.getElementById("incorrectEmail").style.transform="translateY(-15px)";
                document.getElementById("incorrectEmail").style.zIndex="-1";
        }
    }
    if(document.getElementById("message").value){
        
        document.getElementById("msgError").style.transform="translateY(-15px)";
        document.getElementById("msgError").style.zIndex="-1";
    }
}
function isMailSent(){
    document.getElementById("notification").style.zIndex="1";
    document.getElementById("success").style.transform="scale(1)";
    document.getElementById("success").style.zIndex="1";
    
}
function successfullySent(){
    document.getElementById("success").style.transform="scale(0)";
    document.getElementById("success").style.zIndex="-1";
    setTimeout(()=>{
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("message").value="";
        document.getElementById("notification").style.zIndex="-1";
    },500);
}

function isMailNotSent(){
    document.getElementById("notification").style.zIndex="1";
    document.getElementById("fail").style.display="flex";
    document.getElementById("fail").style.transform="translateY(0px)";
    document.getElementById("fail").style.zIndex="1";
}
function failToSent(){
    document.getElementById("fail").style.transform="translateY(-150px)";
    document.getElementById("fail").style.zIndex="-1";
    setTimeout(()=>{
        document.getElementById("fail").style.display="none";
        document.getElementById("notification").style.zIndex="-1";
    },500);
}

function sendEmail(){
    let params= {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }
    let userEmail= document.getElementById("email").value;
    userEmail= userEmail.includes("@");
    console.log(userEmail);
    if(document.getElementById("name").value && document.getElementById("email").value && userEmail && document.getElementById("message").value){
        document.getElementById("loader").style.display="flex";
        emailjs.send("service_9ltod7l", "template_9on8pcv", params ).then(function(res){isMailSent(); 
            document.getElementById("loader").style.display="none";}).catch(function(){isMailNotSent()});
    }
    else{
        if(!document.getElementById("name").value && !document.getElementById("email").value && !userEmail && !document.getElementById("message").value){
            // alert("error: Please fill all Information !!!");
            showContactError();
        }
        else if(!userEmail){
            if(!document.getElementById("email").value){
                showContactError();
            }
            else{
                document.getElementById("incorrectEmail").style.transform="translateY(0px)";
                document.getElementById("incorrectEmail").style.zIndex="1";
            }

            
            
            // alert("error: Please enter correct email address. ( @gmail.com ) is missing!!!");
        }
        else{
            showContactError();
            // alert("error: Please fill all Information !!!");
        }
    }
    
}