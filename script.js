const envelope = document.querySelector('.envelope');

function toggleEnvelope() {
  envelope.classList.toggle('open');
}

// Klik dan tap untuk mobile
envelope.addEventListener('click', toggleEnvelope);
envelope.addEventListener('touchstart', toggleEnvelope);
