export const info = () => {
    gsap.from('#info-section', {
        y: 12,
        ease: 'power2.out',
        duration: 0.3,
        stagger: 0.01,
    });

    gsap.from('#info-section li', {
        y: 24,
        ease: 'power2.out',
        duration: 0.3,
        stagger: 0.03,        
    })
};