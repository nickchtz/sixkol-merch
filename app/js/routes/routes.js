import { home } from "../../controllers/home.js";
import { notFound } from "../../controllers/notFound.js";
import { info } from "../../controllers/info.js";
import { privacy } from "../../controllers/privacy.js";

export const routes = {
    '#notFound': {
        file: 'notFound.html',
        title: 'Not found',
        onload: notFound
    },
    '#home': {
        file: 'home.html',
        title: 'Merch',
        onload: home
    },
    '#info': {
        file: 'info.html',
        title: 'Info',
        onload: info
    },
    '#privacy': {
        file: 'privacy.html',
        title: 'Privacy Policy',
        onload: privacy
    }
};