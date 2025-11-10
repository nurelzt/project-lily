const envelope = document.querySelector('.envelope');

function toggleEnvelope() {
  envelope.classList.toggle('open');
}

envelope.addEventListener('click', toggleEnvelope);
envelope.addEventListener('touchstart', toggleEnvelope);
