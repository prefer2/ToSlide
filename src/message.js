const button = document.querySelector('ul');
const input = document.getElementsByClassName('form-control');

button.addEventListener('click', event => {
  document.getElementById("myhash").value = event.target.innerHTML;
});