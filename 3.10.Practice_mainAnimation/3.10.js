gsap. from('.section-practice',{
    autoAlpha:0,
    ease: "power3.inOut",
    duration: 2, 
    delay: 3
});
    
    gsap-from('.text-wrap', {
    autoAlpha: 0, 
    y:'6vw',
    ease: "power3.inOut",
    duration: 2,
    delay: 3.5, 
    stagger: .5
    });
    const draggable = document.querySelector ('.Section',".hero" )
    const scroll = document.querySelector ('.Scroll Down')