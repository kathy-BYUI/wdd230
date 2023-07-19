const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch prophet data');
    }
    const data = await response.json();
    displayProphets(data.prophets);
  } catch (error) {
    console.error(error);
  }
}

getProphetData(url);

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    // Declare variable for create div.cards element
    let card = document.createElement('section');
    let fullName = document.createElement('h2');
    let birthDay = document.createElement('p');
    let placeBirth = document.createElement('p');
    let portrait = document.createElement('img');

    // Build h2 content out to show the prophet's full name
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;

    // Build p for birthday content
    birthDay.textContent = `Date of Birth: ${prophet.birthdate}`;

    // Build p for birthday content
    placeBirth.textContent = `Place of Birth: ${prophet.birthplace}`;

    // Build the image portrait
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    // Append cards to the section
    card.appendChild(fullName);
    card.appendChild(birthDay);
    card.appendChild(placeBirth);
    card.appendChild(portrait);
    cards.appendChild(card);
  });
}