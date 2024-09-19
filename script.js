document.addEventListener('DOMContentLoaded', function () {
  const music = document.getElementById('background-music');
  music.play().catch((error) => {
    console.log('Autoplay was prevented. User interaction required.');
  });
});

function showFunFact() {
  const facts = [
    'Did you know? The Moon is about 238,855 miles away from Earth!',
    "The Moon's gravity is only 1/6th of Earth's gravity!",
    'The first human-made object to land on the Moon was Luna 2 in 1959.',
    'The Apollo 11 mission successfully landed humans on the Moon for the first time in 1969.',
    'Lunar dust, also called regolith, can be harmful to both equipment and astronauts.',
  ];
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  document.getElementById('fun-fact').innerText = randomFact;
}

function toggleMusic() {
  const music = document.getElementById('background-music');
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

