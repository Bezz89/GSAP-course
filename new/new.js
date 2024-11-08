const easing = 'power3. inOut'
const duration = 1.5


const headerContainer = document-querySelector ('.header-container')
console. log(headerContainer.offsetWidth)
const tagsItem = document.querySelectorAll('.hero-tags>. row-8>h5')
console. log(tagsItem)

let getHeroSectionAnimation = gsap. timeline({
delay:.1,
});

getHeroSectionAnimation
.fromTo('. logo-link',
{x: () => headerContainer.offsetWidth, xPercent: -100, width: '37rem' },
{ x: 0, Percent: 0, duration:duration, ease: easing, width: '6.25rem'}, 1)
.from(' header-line', {scaleX: 0, transformOrigin: "right center", duration: duration, ease: easing,}, 1.2)

.from('.hero-tags>.row-8>h5', {autoAlpha:0, yPercent: 15, stagger:.1, duration:duration, ease: easing,}, 1.5)

.from( '# heroTextRow', { yPercent: 15, autoAlpha: 0, duration:duration, ease: easing,}, 1.5)

.fromTo('.full-image', 
{width:'0%', duration:duration, ease: easing},
{width:'100%', duration:duration, ease: easing}, 1.7
)
.from('.vertical-line', {height:'0%', duration: duration, ease: easing }, 1.7)