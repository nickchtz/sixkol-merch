import { products } from "../js/products.js";

export const home = () => {
    Alpine.store('products', products);

    gsap.from('#home-section', {
        y: 12,
        ease: 'power2.out',
        duration: 0.3,
        stagger: 0.01,
    });
};