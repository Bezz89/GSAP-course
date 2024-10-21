{/* <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>

<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>

<script src="https://unpkg.com/lenis@1.1.14/dist/lenis.min.js"></script>

<script src="/3.2.gsap.from_+_Lenis/3.2.js"></script> */}



// Initialize Lenis
const lenis = new Lenis();

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

// GSAP Animation


let line = document.querySelector('.line_1')

gsap.from('.line_1', {

scrollTrigger: {
trigger: '.line_1', 
scrub: true, 
start: "top bottom", 
end: "top top", 
markers: true
},
scaleX: 0, 
transformOrigin: "left center", 

});

requestAnimationFrame(raf);
