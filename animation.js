var wrapper = document.querySelectorAll('.loader-wrapper');
var loader = document.querySelectorAll('.loader');
var circle = document.querySelectorAll('.circle');

//slide up
anime({
  targets: wrapper,
  translateY: '-180%',
  duration: 600,
  delay: 1000,
  easing: 'linear',
});

//fade
anime({
  targets: wrapper,
  opacity: 0,
  duration: 600,
  delay: 1000,
  easing: 'linear',
});

anime({
  targets: circle,
  width: "80%",
  direction: 'alternate',
  easing: 'linear',
  duration: 1600,
  opacity: 0,
  loop: false,
  borderRadius: 50,
});

