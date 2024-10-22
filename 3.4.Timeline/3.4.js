let yellowSectionAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: ".section-yellow",
      scrub: true,
      pin: true,
      markers: true,
      start: "top top",
      end: "+=200%"
    }
  });
  
  // Анимация для элемента line
  yellowSectionAnimation.from(".line_22", { 
    scaleX: 0, 
    transformOrigin: "left center", 
    ease: "none" 
  });
  
  // Анимация для элемента line
  yellowSectionAnimation.from(".line_1", { 
    scaleX: 0, 
    transformOrigin: "left center", 
    ease: "none" 
  });
  
  // Анимация для элемента ".circle"
  yellowSectionAnimation.to(".circle", { 
    scale: 1.2, 
    autoAlpha: 1, 
    ease: "power2", 
    stagger: 0.5 //  значение для задержки
  });
  
  // Анимация для элемента ".text-timeline"
  yellowSectionAnimation.from(".text-timeline", { 
    y: "5vw", 
    autoAlpha: 0 
  });