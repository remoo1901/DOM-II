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

// navLinks

let navLinks = document.querySelector(".nav, .nav-link");



navLinks.addEventListener('mouseup', x => {
    x.target.style.color = "red ";
    x.target.style.transitionDuration = "2s";
})


let navLink = document.querySelector(".nav, .nav-link");

navLink.addEventListener('click', (event) => {
    event.preventDefault()
})

// h2

let h2d = document.querySelector('h2');

h2d.addEventListener('dblclick', () => {
    alert("Welcome to Fun Bus!  :)");
})


// bus Sound

const sound = document.querySelector('.busSound');

const busImg = document.querySelector('[src="img/fun-bus.jpg"]');

busImg.addEventListener('dblclick', (x) => {
    sound.play();
})

// footer 

const ftr = document.querySelector('.footer');
const crt = document.querySelector('.copyright');

ftr.addEventListener('click', (x)=> {
    x.target.style.color = 'blue';
})

crt.addEventListener('click', (y) => {
   y.target.style.color ='red';
   y.stopPropagation()
})


const btn = document.querySelector('#btn0');

btn.addEventListener('mouseenter', (el) => {
    el.target.style.transform = ("rotate(2deg) translateX(30px)");
    el.target.style.transitionDuration = "2s";
    el.target.style.color = "red";
})
    
btn.addEventListener('mouseleave', (el) => {
    el.target.style.transform = ("rotate(0deg) translateX(-10px)");
    el.target.style.transitionDuration = "1.5s";
    el.target.style.color = "white ";
})

const btN1 = document.querySelector('#btn1');

 btN1.addEventListener('mouseenter', (eil) => {
    eil.target.style.transform = ("rotate(2deg) translateX(30px)");
    eil.target.style.transitionDuration = "2s";
    eil.target.style.color = "red";
})

btN1.addEventListener('mouseleave', (eil) => {
    eil.target.style.transform = ("rotate(0deg) translateX(-10px)");
    eil.target.style.transitionDuration = "1.5s";
    eil.target.style.color = "white ";
})


const btN2 = document.querySelector('#btn2');

 btN2.addEventListener('mouseenter', (z) => {
    z.target.style.transform = ("rotate(2deg) translateX(30px)");
    z.target.style.transitionDuration = "2s";
    z.target.style.color = "red";
})

btN2.addEventListener('mouseleave', (z) => {
    z.target.style.transform = ("rotate(0deg) translateX(-10px)");
    z.target.style.transitionDuration = "1.5s";
    z.target.style.color = "white ";
})