
(() => {
  const grid = document.getElementById('catalog-grid');
  if (!grid) return;
  const cards = [...grid.querySelectorAll('.catalog-card')];
  const original = [...cards];
  const configEl = document.getElementById('path-config');
  const config = configEl ? JSON.parse(configEl.textContent) : {};
  const title = document.getElementById('focus-title');
  const desc = document.getElementById('focus-desc');
  const clear = document.getElementById('focus-clear');
  const summary = document.getElementById('result-summary');
  const chips = [...document.querySelectorAll('.focus-chip')];
  const filterButtons = [...document.querySelectorAll('.catalog-filter')];
  const params = new URLSearchParams(location.search);
  let focus = params.get('focus') || '';
  let filter = params.get('filter') || 'all';

  function applyFocus() {
    cards.forEach(c => c.classList.remove('recommended'));
    chips.forEach(c => c.classList.toggle('active', (c.dataset.focus || '') === focus));
    if (focus && config[focus]) {
      const cfg = config[focus];
      const rank = new Map(cfg.ids.map((id, i) => [id, i]));
      const ordered = [...cards].sort((a, b) => {
        const ra = rank.has(a.dataset.project) ? rank.get(a.dataset.project) : 999;
        const rb = rank.has(b.dataset.project) ? rank.get(b.dataset.project) : 999;
        return ra - rb || original.indexOf(a) - original.indexOf(b);
      });
      ordered.forEach(c => {
        if (rank.has(c.dataset.project)) c.classList.add('recommended');
        grid.appendChild(c);
      });
      title.textContent = cfg.label;
      desc.textContent = cfg.desc + ' Recommended records rise to the top; the complete inventory remains available.';
      clear.hidden = false;
    } else {
      focus = '';
      original.forEach(c => grid.appendChild(c));
      title.textContent = 'Default portfolio view';
      desc.textContent = 'Featured work first, followed by all 31 projects in project-ID order.';
      clear.hidden = true;
    }
  }

  function applyFilter() {
    let shown = 0;
    cards.forEach(c => {
      const tags = (c.dataset.tags || '').split(' ');
      const yes = filter === 'all' || tags.includes(filter);
      c.hidden = !yes;
      if (yes) shown++;
    });
    filterButtons.forEach(b => b.classList.toggle('active', b.dataset.filter === filter));
    const lens = focus && config[focus] ? config[focus].label + ': ' : '';
    summary.textContent = lens + 'showing ' + shown + ' of ' + cards.length + ' projects.';
  }

  filterButtons.forEach(b => b.addEventListener('click', () => {
    filter = b.dataset.filter;
    const u = new URL(location.href);
    if (filter === 'all') u.searchParams.delete('filter');
    else u.searchParams.set('filter', filter);
    history.replaceState({}, '', u);
    applyFilter();
  }));

  applyFocus();
  applyFilter();
})();
