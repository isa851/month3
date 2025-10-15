const incrementBtn = document.querySelector('#incrementBtn');
const resetBtn = document.querySelector('#resetBtn');
const counter = document.querySelector('#counter');
const card = document.querySelector('#card');
const tooltip = document.querySelector('#tooltip');

let count = 0;

incrementBtn.addEventListener('click', () => {
  count++; 
  counter.textContent = count;
});

resetBtn.addEventListener('click', () => {
  count = 0;
  counter.textContent = count;
});





card.addEventListener('dblclick', () => {
  card.classList.toggle('active');
});

card.addEventListener('mouseenter', () => {
  tooltip.style.display = 'block';
  tooltip.style.top = card.offsetTop - 40 + 'px';
  tooltip.style.left = card.offsetLeft + 'px';
});

card.addEventListener('mouseleave', () => {
  tooltip.style.display = 'none';
});
