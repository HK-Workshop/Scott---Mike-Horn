TweenMax.to(".icone", {
    duration: 1.8, 
    delay:3, 
    opacity:1, 
    scale:100, 
    ease: Expo.easeInOut,
});

TweenMax.to("#logo", {
    delay:4, 
    duration: 1.8, 
    y:"40px",
    autoAlpha: 1,
    ease: Expo.easeInOut,
});
TweenMax.to(".line", {
    delay:5, 
    duration: 1.8, 
    y:"25px",
    autoAlpha: 1,
    ease: Circ.easeInOut,
});

TweenMax.to("#menu1", {
    delay:5, 
    duration: 1.8, 
    y:"-40px",
    autoAlpha: 1,
    ease: Expo.easeInOut,
});

TweenMax.to("#menu2", {
    delay:5, 
    duration: 1.8, 
    y:"40px",
    autoAlpha: 1,
    ease: Expo.easeInOut,
});

TweenMax.to("#menu3", {
    delay:5, 
    duration: 1.8,
    y:"-40px",
    autoAlpha: 1,
    ease: Expo.easeInOut,
});

function toggle(){
    var ct= document.querySelector("#ct")
    ct.classList.toggle("active")
}
