let tagline = document.getElementById('tagline');
let f1car = document.getElementById('f1car');

window.addEventListener('scroll',() =>{
    let value = window.scrollY;
    
    tagline.style.marginTop = value * 2.5 + 'px';
    f1car.style.left = value * -4.5 + 'px';
    
});