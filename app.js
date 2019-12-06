const btnOne = document.querySelector('.btn-one');
const btnTwo = document.querySelector('.btn-two');

btnOne.addEventListener('click', function(e) {
  console.log('event target', event.target);
  console.log('current target', event.currentTarget);
});
btnTwo.addEventListener('click', function(e) {
  console.log('event target', event.target);
  console.log('current target', event.currentTarget);
});
