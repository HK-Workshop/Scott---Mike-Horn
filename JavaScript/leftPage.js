TweenMax.to(".container", {
    delay: 0,
    duration: 1,
    right: "-100%",
    ease: Expo.easeInOut,
})

TweenMax.from(".container1", {
    delay: 0,
    duration: 1,
    right: "100%",
    ease: Expo.easeInOut,
})

TweenMax.to(".container1", {
    delay: 1,
    duration: 1,
    right: "-100%",
    ease: Expo.easeInOut,
})

TweenMax.to(".overlay", {
    duration: 1.8, 
    delay:0.8, 
    opacity:1, 
    scale:1, 
    ease: Expo.easeInOut,
});

TweenMax.from(".imageLeft", {
    delay: 2,
    duration: 1.5,
    left: "-80%",
    ease: Expo.easeInOut,
})

TweenMax.to(".info h2", {
    delay: 3,
    duration: 1.8,
    x: "12%",
    autoAlpha: 1,
    ease: Expo.easeInOut,
})

TweenMax.to(".info p", {
    delay: 3,
    duration: 1.8,
    x: "12%",
    autoAlpha: 1,
    ease: Expo.easeInOut,
})

TweenMax.to("#menu1", {
    delay:3, 
    duration: 1.8, 
    x: "-20%",
    autoAlpha: 1,
    ease: Expo.easeInOut,
});