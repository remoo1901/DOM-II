// Your code goes here

// logo-heading

const logoHeading = document.querySelector(".logo-heading");

logoHeading.addEventListener('mouseenter', (x)=>{
    x.target.style.color = "orange"
    x.target.style.fontSize = '8rem';
 })

 logoHeading.addEventListener('mouseleave', (el)=>{
  el.target.style.color = "red"
  el.target.style.fontSize = '5rem';
})

// Images


let advImg = document.querySelector('[src="img/adventure.jpg"]');

advImg.addEventListener('mouseenter', (el) => {
    el.target.style.transform = ("rotate(2deg) translateX(30px)");
    el.target.style.transitionDuration = "2s";
})

advImg.addEventListener('mouseleave', (el) => {
    el.target.style.transform = ("rotate(0deg) translateX(-30px)");
    el.target.style.transitionDuration = "2s";
})



let funImg = document.querySelector('[src="img/fun.jpg"]');

funImg.addEventListener('mouseenter',(el) => {
    el.target.style.transform = ('rotate3d(170, 150, 190, 50deg)')
    el.target.style.transitionDuration = "2s";
})

funImg.addEventListener('mouseleave',(el) => {
    el.target.style.transform = ('rotate3d( 0, 0, 0, 0deg)')
    el.target.style.transitionDuration = "3s";
})


let desImg = document.querySelector('[src="img/destination.jpg"]');

desImg.addEventListener('mouseenter', (el) =>{
    el.target.style.transform = ('rotate(0.5turn)')
})

desImg.addEventListener('mouseleave', (el) =>{
    el.target.style.transform = ('rotate(0.0turn)')
})