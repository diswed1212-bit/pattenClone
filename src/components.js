export const button = (label, href, variant = 'primary') => `
  <a class="btn btn--${variant}" href="${href}">${label}</a>
`;

export const categoryCard = ({ id, name, description, image }) => `
  <article class="card" aria-labelledby="cat-${id}">
    <img src="${image}" alt="${name} pattern category preview" class="card__image" />
    <div class="card__body">
      <h3 id="cat-${id}">${name}</h3>
      <p>${description}</p>
      ${button('View category', `#/categories/${id}`, 'ghost')}
    </div>
  </article>
`;

export const listingBlock = ({ id, title, category, summary }) => `
  <article class="listing" aria-labelledby="pattern-${id}">
    <h3 id="pattern-${id}">${title}</h3>
    <p class="listing__meta">${category}</p>
    <p>${summary}</p>
    ${button('Open detail', `#/detail/${id}`, 'text')}
  </article>
`;

export const header = () => `
  <header class="site-header">
    <div class="container site-header__inner">
      <a class="logo" href="#/home" aria-label="Patten Clone home">Patten <span>Clone</span></a>
      <nav aria-label="Primary navigation">
        <ul class="nav-list">
          <li><a href="#/home">Home</a></li>
          <li><a href="#/categories">Categories</a></li>
          <li><a href="#/detail/chalk-grid">Pattern Detail</a></li>
        </ul>
      </nav>
    </div>
  </header>
`;

export const footer = () => `
  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <h2>Patten Clone</h2>
        <p>Conceptual front-end clone for layout and interaction practice.</p>
      </div>
      <div>
        <h3>Explore</h3>
        <ul>
          <li><a href="#/home">Home</a></li>
          <li><a href="#/categories">Categories</a></li>
          <li><a href="#/detail/chalk-grid">Featured pattern</a></li>
        </ul>
      </div>
      <div>
        <h3>Social</h3>
        <ul>
          <li><a href="#">Instagram placeholder</a></li>
          <li><a href="#">Pinterest placeholder</a></li>
          <li><a href="#">Newsletter placeholder</a></li>
        </ul>
      </div>
    </div>
  </footer>
`;
