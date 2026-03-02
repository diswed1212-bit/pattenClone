import { categories, featuredPatterns } from './data.js';
import { button, categoryCard, listingBlock } from './components.js';

export const homePage = () => `
  <section class="hero">
    <div class="container hero__inner">
      <p class="eyebrow">Pattern Library</p>
      <h1>Curated surface pattern inspiration for interiors and textiles.</h1>
      <p class="hero__copy">This front-end mock captures the editorial layout style of a premium pattern showcase while using original placeholder text and assets.</p>
      <div class="hero__actions">
        ${button('Browse categories', '#/categories')}
        ${button('View featured pattern', '#/detail/chalk-grid', 'secondary')}
      </div>
    </div>
  </section>

  <section class="section container">
    <div class="section__title-row">
      <h2>Browse by category</h2>
      <a href="#/categories" class="text-link">See all</a>
    </div>
    <div class="card-grid">
      ${categories.slice(0, 4).map(categoryCard).join('')}
    </div>
  </section>

  <section class="section section--muted">
    <div class="container">
      <h2>Featured listings</h2>
      <div class="listing-grid">
        ${featuredPatterns.map(listingBlock).join('')}
      </div>
    </div>
  </section>
`;

export const categoriesPage = () => `
  <section class="section container">
    <h1>All Categories</h1>
    <p class="intro">Organized groups inspired by the visual language seen on premium pattern portfolio sites.</p>
    <div class="card-grid">
      ${categories.map(categoryCard).join('')}
    </div>
  </section>
`;

export const detailPage = (id) => {
  const selected = featuredPatterns.find((item) => item.id === id) ?? featuredPatterns[0];

  return `
    <section class="section container detail-layout">
      <div class="detail-hero" role="img" aria-label="Abstract local placeholder artwork"></div>
      <article class="detail-content">
        <p class="eyebrow">${selected.category}</p>
        <h1>${selected.title}</h1>
        <p>${selected.summary}</p>
        <p>This detail view is a mock page to demonstrate reusable typographic and layout tokens without copying protected source content or media.</p>
        <div class="hero__actions">
          ${button('Back to categories', '#/categories', 'secondary')}
          ${button('Contact studio', '#/home')}
        </div>
      </article>
    </section>
  `;
};
