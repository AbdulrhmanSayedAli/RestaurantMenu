let images = [
    "resources/plate_1.webp",
    "resources/plate_2.jpg",
    "resources/plate_3.jpg",
    "resources/plate_4.jpg",
    "resources/plate_5.jpg",
];

let pos = 0;
let img = document.querySelector("#image");


function changeImg(){
    img.src = images[pos];
}

function fadeIn(){
    img.classList.remove("fade-out");
    img.classList.add("fade-in");    
}

function fadeOut(){
    img.classList.remove("fade-in");
    img.classList.add("fade-out");
}


document.querySelector("#next").addEventListener("click" , function(){
    pos++;
    pos%=images.length;
    fadeOut();
});


document.querySelector("#previous").addEventListener("click" , function(){
    pos--;
    pos+=images.length;
    pos%=images.length;
    fadeOut();
});


img.addEventListener("transitionend", function (){
    changeImg();    
    fadeIn();
});