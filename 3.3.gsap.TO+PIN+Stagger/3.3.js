{/* <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>

<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>

<script src="https://unpkg.com/lenis@1.1.14/dist/lenis.min.js"></script>

<script src="/3.2.gsap.from_+_Lenis/3.2.js"></script> */}

gsap. to('.boxes', {
    scrollTrigger: {
    trigger: '.section_blue', 
    scrub: true, 
    pin: true,
    start: "top top", 
    end: "+=100%", 
    markers: true
    },
    x:'70vh',
    stagger:.5, 
     backgroundColor: 'purple', 
    ease: "none"
    })