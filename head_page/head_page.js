<script src="main.js" async></script>
<script src="lazy-load.js" async></script>
<script src="script.js" defer></script>


<style type="text/css">
.w-webflow-badge {
display: none !important;
}
</style>
<script src="script.js" async></script>
<style>
  html { font-size: calc(-0.0009573361082204634rem + 1.1121748178980226vw); }
  @media screen and (max-width:1440px) { html { font-size: calc(-0.0009573361082205745rem + 1.1121748178980229vw); } }
  @media screen and (max-width:479px) { html { font-size: calc(0.0012019230769234612rem + 4.26153846153846vw); } }
  @media screen and (max-width:375px) { html { font-size: calc(-0.00267379679144385rem + 4.27807486631016vw); } }
</style>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js">
</script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js">
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollToPlugin.min.js">
</script>
<script src="https://unpkg.com/lenis@1.1.14/dist/lenis.min.js">
</script> 
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/TextPlugin.min.js">
</script> 
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/Draggable.min.js">
</script> 

<script>
 let MatchSetup = gsap.matchMedia();
MatchSetup.add("(min-width: 800px)", () => {
  console.log("Desktop setup");

const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
console.log(document.querySelector('.logo'));
console.log(document.querySelector('.line'));
console.log(document.querySelectorAll('.header-menu > .row-8 > .nav-link'));
console.log(document.querySelector('.content-hero'));
console.log(document.querySelector('.image'));
console.log(document.querySelector('.vectors_wrapper-2'));

const animationEasing = 'power3.inOut';
const duration = 1.2;
const header = document.querySelector('.header'); // Fixed typo 'document-querySelector' to 'document.querySelector'
console.log(header.offsetWidth);



let getHeroSectionAnimation = gsap.timeline({
  delay: 0.1,
});

getHeroSectionAnimation 
.fromTo('.logo', 
    {x: () => header.offsetWidth, xPercent: -103, width: '37rem'}, 
    {x: 0, xPercent: 0, duration: duration,ease: animationEasing,width: '6.25rem'}, 1) // from -> to
  
  .from('.vectors_wrapper-2', {
    scaleX: 0,
    autoAlpha: 0,
    duration: duration,
    ease: animationEasing,}, 1.2) // delayed by 1.2 seconds
  
  .from('.line', {
    scaleX: 0,
    transformOrigin: "right center",
    duration: duration,
    ease: animationEasing,}, 1.2) // delayed by 1.2 seconds
  

  .from('.header-menu > .row-8 > .nav-link', {
    autoAlpha: 0,
    yPercent: 15,
    stagger: 0.1,
    duration: duration,
    ease: animationEasing}, 1.5) // delayed by 1.5 seconds
  
  .from('.content-hero', {
    yPercent: 15,
    autoAlpha: 0,
    duration: duration,
    ease: animationEasing,}, 1.5) // delayed by 1.5 seconds
  
  .fromTo('.image', 
    { width: '0%' }, 
    { width: '100%', duration: duration, ease: animationEasing }, 1.7) // delayed by 1.7 seconds

.from('.vertical_line', {height:'0%', duration: duration, ease: animationEasing }, 1.7)
const sectionServices = document.querySelector('.section_what-we-do'); // Исправлено selector
const sectionServicesTags = sectionServices.querySelectorAll('#step-by-step'); // Исправлено selector
gsap.from(sectionServicesTags, {
    autoAlpha: 0, 
    ease: animationEasing, 
    duration: duration, 
    stagger: 0.5 
});
let sectionServicesAnimation = gsap.timeline({
    scrollTrigger: {
        trigger: sectionServices,
        pin: true,
        scrub: true,
        start: 'top top',
        end: '+=200%'
    }
});
sectionServicesAnimation
    .to('.digital', { y: '25rem' }) 
    .to('.technology', { y: '15rem' });   
const easing = 'power3.inOut';
const sectionAbout = document.querySelector('.section_about');
const textSectionAbout = sectionAbout.querySelector('#text-about');
const pointsSectionAbout = sectionAbout.querySelectorAll('.space_between');
const aboutImagesContainer = sectionAbout.querySelector('#aboutImagesContainer');
let sectionAboutAnimation = gsap.timeline({
    scrollTrigger: {
        trigger: sectionAbout,
        start: "top 80%", // Запуск анимации, когда секция видна на 80%
        end: "bottom 10%", // Конец анимации
        scrub: false, // Убрать плавную привязку
    },
});
sectionAboutAnimation.from(textSectionAbout, {
    y: '7rem',
    autoAlpha: 0,
    duration: duration,
    ease: easing,
});
sectionAboutAnimation.from(pointsSectionAbout, {
    autoAlpha: 0,
    y: '1.5rem',
    stagger: 0.3,
    duration: duration,
    ease: easing,
});
let aboutImagesAnimation = gsap.timeline({
    scrollTrigger: {
        trigger: aboutImagesContainer,
        start: "top 80%", // Запуск анимации, когда контейнер виден
        end: "bottom 10%", // Конец анимации
        scrub: false,
    },
});
aboutImagesAnimation.from('.image-about', {
    autoAlpha: 0,
    y: '2rem',
    stagger: 0.2,
    duration: duration,
    ease: easing,
});
gsap.set('.dropdown-list', { autoAlpha: 0, height: 0 });
const dropdowns = document.querySelectorAll('.dropdown');
const primaryDarkColor = '#51B613'; // Установим HEX цвет
dropdowns.forEach((dropdown, index) => {
    const dropdownContent = dropdown.querySelector('.dropdown-list');
    const heading3 = dropdown.querySelectorAll('.heading3'); 
    const heading4 = dropdown.querySelectorAll('.heading4');
    if (!dropdownContent) {
      console.error(`Не удалось найти '.dropdown-list' в dropdown №${index + 1}`);
        return;
    }
    let dropdownAnimation = gsap.timeline({ paused: true })
        .to(dropdownContent, {
            height: 'auto',
            duration: 0.6,
            ease: 'power3.inOut',
            autoAlpha: 1
        });
    dropdownAnimation.reverse();
    dropdown.addEventListener('click', () => {
        if (dropdownAnimation.progress() === 0 || dropdownAnimation.reversed()) {
            dropdownAnimation.play();
            heading3.forEach(h3 => {
                h3.style.color = primaryDarkColor;
            });
            heading4.forEach(h4 => {
                h4.style.color = primaryDarkColor;
            });
        } else {
            dropdownAnimation.reverse();
            heading3.forEach(h3 => {
                h3.style.color = ''; 
            });
            heading4.forEach(h4 => {
                h4.style.color = ''; 
            });
        }
    });
});
dropdowns.forEach((dropdownItem, dropdownIndex) => {
    const headingDropdownNumber = dropdownItem.querySelectorAll('h4');
    headingDropdownNumber.forEach((headingItem) => {
        const formatNumberDropdown = (dropdownIndex + 1) < 10 ? `0${dropdownIndex + 1}` : `${dropdownIndex + 1}`;

        headingItem.textContent = formatNumberDropdown;
    });
});
const projectContainer = document.querySelector(".gellary_scroll"); 

if (projectContainer) {
  const projectCards = projectContainer.querySelectorAll("#cards"); 
  let horizontalScrollAnimation = gsap.to(projectContainer, {
    x: () => -(projectContainer.scrollWidth - window.innerWidth),
    scrollTrigger: {
      trigger: ".section-gallary",
      pin: true,
      scrub: true,
      start: "top top",
      end: () => "+=" + (projectContainer.scrollWidth - window.innerWidth),
    },
  });
  if (projectCards.length > 0) {
    projectCards.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 50, 
        duration: 0.5,
        delay: index * 0.2, 
        scrollTrigger: {
          trigger: card,
          start: "top 80%", 
          toggleActions: "play none none none", 
        },
      });
    });
  } else {
    console.error("Карточки .card не найдены внутри .gellary_scroll.");
  }
  let allProjectImages = document.querySelectorAll("#img-gallery");
  if (allProjectImages.length > 0) {
    allProjectImages.forEach((img) => {
      gsap.to(img, {
        x: "3rem", 
        scrollTrigger: {
          trigger: img.parentNode, 
          start: "left right", 
          end: "right left", 
          scrub: true, 
          invalidateOnRefresh: true, 
          containerAnimation: horizontalScrollAnimation, 
        },
      });
    });
  } else {
    console.error("Изображения с классом .img-gallery не найдены.");
  }
} else {
  console.error("Элемент с классом .gellary_scroll не найден.");
}

const awardItems = document.querySelectorAll('.row-1st');

awardItems.forEach((item, index) => {
    const awardImg = item.querySelector('.img-awards');
    let awardImgAnimation = gsap.from(awardImg, {
        autoAlpha: 0,          
        scale: 0.8,            
        duration: 0.5,          
        ease: 'power3.out',      
        paused: true,           
        delay: index * 0.1       
    });

   
    item.addEventListener('mouseenter', () => {
        console.log('сработал hover IN');
        awardImgAnimation.play(); 
    });

    
    item.addEventListener('mouseleave', () => {
        console.log('сработал hover OUT');
        awardImgAnimation.reverse(); 
    });
});


const getFooterAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: '.section-footer',
    start: 'top 70%', 
    end: 'bottom 20%', 
    scrub: false, 
  },
});

getFooterAnimation
  .from('#footer-link', {
    stagger: 0.3,
    autoAlpha: 0, 
    y: '-3rem', 
    duration: 0.3, 
    ease: 'power3.out', 
  })
    .from('.social-media', {
    autoAlpha: 0, 
    y: '-3rem', 
    duration: 0.3,
    ease: 'power3.out',
    stagger: 0.3, 
  })
    .from('#footer-content', {
    autoAlpha: 0,
    y: '-3rem', 
    duration: 0.3,
    ease: 'power3.out',
  });


const menuLinks = document.querySelectorAll('#link-menu'); 
const getMenuAnimation = gsap.timeline({ paused: true });

getMenuAnimation
  .from('.menu', {
    yPercent: -100, 
    duration: 0.5, 
    ease: 'power3.out', 
  })
  .from('#link-menu', {
    autoAlpha: 0, 
    stagger: 0.3, 
    y: '-3rem', 
    duration: 0.5,
    ease: 'power3.out',
  })
  .from('.copyright', {
    autoAlpha: 0, 
    duration: 0.5,
    ease: 'power3.out',
  });


const menuButton = document.querySelector('.vectors_wrapper-2'); 
let isMenuOpen = false; 

menuButton.addEventListener('click', () => {
  if (isMenuOpen) {
    getMenuAnimation.reverse(); 
  } else {
    getMenuAnimation.play(); 
  }
  isMenuOpen = !isMenuOpen;
});


menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (isMenuOpen) {
      getMenuAnimation.reverse(); 
      isMenuOpen = false;
    }
  });
});

requestAnimationFrame(raf);
});

  MatchSetup.add("(max-width: 799px)", () => {
  console.log("Mobile setup");
  // mobile setup code here...
});

  </script> 