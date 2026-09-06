import { products } from "../js/products.js";

export const home = () => {
    Alpine.store('products', products);

    Alpine.store('viewProduct', (product) => {
        const modal = document.getElementById('product-modal');
        const dismissBtn = document.querySelector('.modal-top-bar a');
        Alpine.$data(modal).product = product;
        modal.showModal();
        gsap.from(modal, {
            y: 20,
            scale: 0.95,
            ease: 'power2.out',
            duration: 0.3,   
        })

        dismissBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.close();
        });

    });

    gsap.from('#home-section', {
        y: 12,
        ease: 'power2.out',
        duration: 0.3,
        stagger: 0.01,
    });
};