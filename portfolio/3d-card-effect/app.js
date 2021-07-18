const container = document.querySelector('.container');
const card = document.querySelector('.card');

let title = document.querySelector('.title');
let desc = document.querySelector('.description');
let sizes = document.querySelector('.sizes');
let purchase = document.querySelector('.purchase button');
let sneaker = document.querySelector('.sneakers img');

container.addEventListener('mousemove', (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${-yAxis}deg)`;
});

container.addEventListener('mouseenter', () => {
  card.style.transition = '';
  title.style.transform = `translateZ(150px)`;
  desc.style.transform = `translateZ(100px)`;
  sizes.style.transform = `translateZ(90px)`;
  purchase.style.transform = `translateZ(90px)`;
  sneaker.style.transform = `translateZ(90px) rotateZ(-45deg)`;
});

container.addEventListener('mouseleave', () => {
  card.style.transform = '';
  card.style.transition = 'all 0.3s ease';

  title.style.transform = ``;
  desc.style.transform = ``;
  sizes.style.transform = ``;
  purchase.style.transform = ``;
  sneaker.style.transform = ``;
});
