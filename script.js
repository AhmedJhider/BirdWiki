let sq1 = document.querySelector("#item_sq1");
let sq2 = document.querySelector("#item_sq2");
let sq3 = document.querySelector("#item_sq3");
let image = document.querySelector(".menuimg");
let bar = document.querySelector(".menu");
let body = document.querySelector("body");
function reverse(ana){
    ana.querySelector(":scope > .goo > .rleft ").style.animationName= "reslide";
    ana.querySelector(":scope > .goo > .rleft ").style.animationDuration= "0.2s";
    ana.querySelector(":scope > .goo > .rleft ").style.animationTimingFunction= "ease-out";
    ana.querySelector(":scope > .goo > .rleft ").style.animationFillMode= "forwards";
    
    


    ana.querySelector(":scope > .goo > .sq_text").style.animationName= "reslide";
    ana.querySelector(":scope > .goo > .sq_text").style.animationDuration= "0.2s";
    ana.querySelector(":scope > .goo > .sq_text").style.animationTimingFunction= "ease-out";
    ana.querySelector(":scope > .goo > .sq_text").style.animationFillMode= "forwards";

}
function play(ana){
    ana.querySelector(":scope > .goo > .rleft ").style.animationName= "slide";
    ana.querySelector(":scope > .goo > .rleft ").style.animationDuration= "0.2s";
    ana.querySelector(":scope > .goo > .rleft ").style.animationTimingFunction= "ease-out";
    ana.querySelector(":scope > .goo > .rleft ").style.animationFillMode= "forwards";
    

    ana.querySelector(":scope > .goo > .sq_text").style.animationName= "slide";
    ana.querySelector(":scope > .goo > .sq_text").style.animationDuration= "0.2s";
    ana.querySelector(":scope > .goo > .sq_text").style.animationTimingFunction= "ease-out";
    ana.querySelector(":scope > .goo > .sq_text").style.animationFillMode= "forwards";
}

function menu(){
    console.log(image.src);
    if(image.src=== "file:///C:/Users/AHMED/Documents/SCHOOL/html/NewBirds/photos/menu.png"){
        image.src= "file:///C:/Users/AHMED/Documents/SCHOOL/html/NewBirds/photos/menu1.png";

    } else {
        image.src= "file:///C:/Users/AHMED/Documents/SCHOOL/html/NewBirds/photos/menu.png";

    }
}
let slide = document.querySelector(".slideimg");
let b = document.querySelector(".b");
let head = document.querySelector(".header")
let foot = document.querySelector(".foot")

var i =-1;
var images=[];
var sb=[];
images[0]="file:///C:/Users/AHMED/Documents/SCHOOL/html/NewBirds/photos/image1.jpg";
images[1]="file:///C:/Users/AHMED/Documents/SCHOOL/html/NewBirds/photos/image2.jpg";
images[2]="file:///C:/Users/AHMED/Documents/SCHOOL/html/NewBirds/photos/image3.jpg";
sb[0]= document.querySelector("#b1");
sb[1]= document.querySelector("#b2");
sb[2]= document.querySelector("#b3");
if (slide != null) {
    moves();
}
function oneminus(){
    i--;
    if(i == -2 ){
        i = 2;
        sb[i].style.backgroundColor="rgb(31, 247, 204)";
        sb[i-(images.length-1)].style.backgroundColor="white";
    }
    else if (i >= 0 && i < images.length-1){
        sb[i].style.backgroundColor="rgb(31, 247, 204)";
        sb[i+1].style.backgroundColor="white";
    }
    else if(i == -1){
        i = 2;
        sb[i].style.backgroundColor="rgb(31, 247, 204)";
        sb[i-(images.length-1)].style.backgroundColor="white";
        slide.src= images[i];
    }
    slide.src= images[i];

    clearTimeout(retime);
    retime = setTimeout("moves()",5000);
}
function oneplus(){
    i++;
    slide.src= images[i];
    if(i < images.length -1 && i==0 ){
        sb[i].style.backgroundColor="rgb(31, 247, 204)";
        sb[i+(images.length-1)].style.backgroundColor="white";
    }
    else if (i <= images.length -1 && i >= 1){
        sb[i].style.backgroundColor="rgb(31, 247, 204)";
        sb[i-1].style.backgroundColor="white";
    }
    else if(i == images.length){
        i = 0;
        sb[i].style.backgroundColor="rgb(31, 247, 204)";
        sb[i+(images.length-1)].style.backgroundColor="white";
        slide.src= images[0];
    }
    clearTimeout(retime);
    retime = setTimeout("moves()",5000);
}
function moves (){            

    if(i < images.length -1 && i==-1){
        i++;
        sb[i].style.backgroundColor="rgb(31, 247, 204)";
        
    }
    else if(i < images.length -1 && i >= 0){
        i++;
        sb[i].style.backgroundColor="rgb(31, 247, 204)";
        sb[i-1].style.backgroundColor="white";
    }
    else{
        sb[0].style.backgroundColor="rgb(31, 247, 204)";
        sb[1].style.backgroundColor="white";
        sb[2].style.backgroundColor="white";
        i=0;
    }
    slide.src= images[i];
    
    let retime = setTimeout("moves()",5000);
}
window.addEventListener("scroll", function()
{
    let offset = window.scrollY;
    console.log(offset)

    slide.style.marginTop = offset * 0.3 + "px";


})

let side = document.querySelector(".sidebar")
let lay = document.querySelector(".overlay")

function showside(){
    side.style.animationName= "sidein";
    side.style.animationDuration= "0.3s";
    side.style.animationTimingFunction= "ease-out";
    side.style.animationFillMode= "forwards";

    lay.style.animationName= "layin";
    lay.style.animationDuration= "0.3s";
    lay.style.animationTimingFunction= "ease-out";
    lay.style.animationFillMode= "forwards";
}
function hideside(){
    side.style.animationName= "sideout";
    side.style.animationDuration= "0.3s";
    side.style.animationTimingFunction= "ease-in";
    side.style.animationFillMode= "forwards";

    lay.style.animationName= "layout";
    lay.style.animationDuration= "0.3s";
    lay.style.animationTimingFunction= "ease-out";
    lay.style.animationFillMode= "forwards";
}

