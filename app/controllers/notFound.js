export const notFound = () => {
    gsap.from('#notFound-section', {
        y: 20,
        ease: 'power2.out',
        duration: 0.3,
        stagger: 0.01,
    });
};