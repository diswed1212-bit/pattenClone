import { header, footer } from './components.js';
import { categoriesPage, detailPage, homePage } from './pages.js';

const app = document.querySelector('#app');

const routes = {
  home: homePage,
  categories: categoriesPage,
  detail: detailPage,
};

const normalizeRoute = (hash) => hash.replace(/^#\/?/, '').split('/').filter(Boolean);

const render = () => {
  const [route = 'home', slug] = normalizeRoute(window.location.hash);

  const pageContent =
    route === 'detail'
      ? routes.detail(slug)
      : (routes[route] ?? routes.home)();

  app.innerHTML = `
    <a class="skip-link" href="#main-content">Skip to main content</a>
    ${header()}
    <main id="main-content">${pageContent}</main>
    ${footer()}
  `;
};

window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', () => {
  if (!window.location.hash) {
    window.location.hash = '#/home';
    return;
  }
  render();
});
