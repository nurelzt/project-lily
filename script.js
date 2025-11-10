const envelope = document.querySelector('.envelope');

function toggleEnvelope(e) {
  // mencegah event ganda untuk touch & click
  if (e.type === 'touchstart') {
    e.preventDefault();
  }
  envelope.classList.toggle('open');
}

envelope.addEventListener('click', toggleEnvelope);
envelope.addEventListener('touchstart', toggleEnvelope);
