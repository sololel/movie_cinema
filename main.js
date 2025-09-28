const readModeButton = document.getElementById('readmode');

readModeButton.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
});

const list1 = document.getElementById('movie-list-1'); 
const list2 = document.getElementById('movie-list-2'); 
const list3 = document.getElementById('movie-list-3'); 
const btnLeft = document.getElementById('scroll-left');
const btnRight = document.getElementById('scroll-right');
const bthUP= document.getElementById('scroll-up');


btnLeft.addEventListener('click', () => {
  list1.scrollBy({ left: -300, behavior: 'smooth' });
});

btnRight.addEventListener('click', () => {
  list1.scrollBy({ left: 300, behavior: 'smooth' });
});

setInterval(() => {
  list2.scrollBy({ left: 300, behavior: 'smooth' });
}, 4000); 

const progressBar = document.getElementById('progress-bar');

list3.addEventListener('scroll', () => {
  const scrollLeft = list3.scrollLeft;
  const scrollWidth = list3.scrollWidth - list3.clientWidth;
  const percent = (scrollLeft / scrollWidth) * 100;
  progressBar.style.width = `${percent}%`;
});