function moveSign() {
  const response = document.getElementById('response');
  response.classList.add('clicked');
  response.innerHTML = 'No';
  response.onclick = function() {
    response.classList.toggle('clicked');
  };
}
