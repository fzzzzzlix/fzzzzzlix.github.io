const buttons=[...document.querySelectorAll('.filter')];
const cards=[...document.querySelectorAll('.work-card')];
buttons.forEach(btn=>btn.addEventListener('click',()=>{
  buttons.forEach(b=>b.classList.remove('active'));btn.classList.add('active');
  const f=btn.dataset.filter;
  cards.forEach(c=>{const tags=(c.dataset.tags||'').split(' ');c.style.display=(f==='all'||tags.includes(f))?'block':'none';});
}));
