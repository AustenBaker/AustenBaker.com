var wrapper = document.querySelector('.loader-wrapper');


const fragment = document.createDocumentFragment();
const grid = [10, 1];
const col = grid[0];
const row = grid[1];
const numberOfElements = col * row;

for (let i = 0; i < numberOfElements; i++) {
  fragment.appendChild(document.createElement('div'));
}

wrapper.appendChild(fragment);

const staggersAnimation = anime.timeline({
  targets: '.loader-wrapper div',
  easing: 'linear',
  delay: anime.stagger(10),
  loop: false,
  autoplay: false
})
.add({
  rotate: 180,
  duration: 400,
  scale: 0.2,
})
.add({
  scaleY: 20,
  duration: 400,
})
.add({
  scaleX: 10,
  duration: 200,
})


staggersAnimation.play();