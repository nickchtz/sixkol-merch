import { routes } from './routes.js';
import '../libs/lucide.js'; 

export const router = {
    async init() {
        document.querySelector('#app').innerHTML = `
            <div class="abs-center">
                <div class="spinner"></div>
            </div>
        `;

        await this.render(window.location.hash || '#home');

        window.addEventListener('hashchange', async () => {
            await this.render(window.location.hash);
        });

    },
    async render(route) {
        const page = routes[route] || routes['#notFound'];



        const response = await fetch(`./app/views/${page.file}`);
        const html = await response.text();
        
        document.title = `${page.title} - SixKol`;
        document.querySelector('#app').innerHTML = html;
        
        if(document.querySelector('[data-lucide]')) {
            lucide.createIcons();
        }

        const navLinks = document.querySelectorAll('nav ul li a');

        navLinks.forEach((navLink) => {
            const href = new URL(navLink.href).hash;
            href === route ? navLink.classList.add('active') : navLink.classList.remove('active');
        });

        if(typeof(page.onload) === "function") {
            await page.onload();
        }
    }
};

export const redirect = (route) => {
    window.location.hash = route;
}