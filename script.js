const accordion = document.getElementsByClassName('items');

console.log(accordion);

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active');
  });
}
