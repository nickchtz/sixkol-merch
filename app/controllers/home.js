export const home = () => {
    gsap.from('#home-section', {
        y: 12,
        ease: 'power2.out',
        duration: 0.3,
        stagger: 0.01,
    });
};