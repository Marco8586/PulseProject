const myButton = document.getElementById('myButton');

myButton.addEventListener('mouseover', function() {
  this.style.transform = 'scale(1.1)';
});

myButton.addEventListener('mouseout', function() {
  this.style.transform = 'scale(1)';
});