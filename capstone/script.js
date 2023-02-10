function menu() {
  document.querySelector('.menu').classList.toggle('expanded');
  document.querySelector('.menu-content').toggleAttribute('hidden');
}

document.querySelector('.open').addEventListener('click', menu);
document.querySelector('.close').addEventListener('click', menu);
document.querySelectorAll('.menu-content').forEach((link) => {
  link.addEventListener('click', menu);
});

function more() {
  const seeMore = document.querySelectorAll('.more');
  seeMore.forEach((more) => {
    more.style.display = 'flex';
  });
  document.querySelector('.seeMoreBtn').style.display = 'none';
}

document.querySelector('.seeMoreBtn').addEventListener('click', more);

const artistInfo = [
  {
    id: 'a1',
    img: {
      src: './images/KateBush.jpg',
      alt: 'Kate Bush',
    },
    name: 'Kate Bush',
    award: '2022 Sync of the Year Award',
    description: 'A spellbinding visionary, the singer, songwriter, multi-instrumentalist, and producer Kate Bush created a unique space in rock.',
  },
  {
    id: 'a2',
    img: {
      src: './images/SherylCrow.jpg',
      alt: 'Sheryl Crow',
    },
    name: 'Sheryl Crow',
    award: '2019 Clio Music Impact Award',
    description: 'Sheryl Crow’s influence reverberates through classic 1990s rock, pop, country, folk, blues, and the work of countless singer-songwriters.',
  },
  {
    id: 'a3',
    img: {
      src: './images/MissyElliott.jpg',
      alt: 'Missy Elliot',
    },
    name: 'Missy Elliot',
    award: '2018 Essence Black Women in Music Visionary Awar',
    description: 'Songwriter, groundbreaking producer, label executive, and video trendsetter, Elliott was crucial to the Virginia Beach sound that took over in the late 1990s and 2000s.',
  },
  {
    id: 'a4',
    img: {
      src: './images/IronMaiden.jpg',
      alt: 'Iron Maiden',
    },
    name: 'Iron Maiden',
    award: '2016 Echo Award for Best International Rock Group',
    description: 'Iron Maiden created the blueprint for how heavy metal bands should look, sound, and tour. The group released seven high-octane albums that solidified it as one of rock’s biggest bands.',
  },
  {
    id: 'a5',
    img: {
      src: './images/CyndiLauper.jpg',
      alt: 'Cindy Lauper',
    },
    name: 'Cindy Lauper',
    award: '2016 WhatsOnStage Award for Best New Musical',
    description: 'Lauper broke down barriers for waves of future artists and empowered them to perform as their unique, authentic selves.',
  },
  {
    id: 'a6',
    img: {
      src: './images/GeorgeMichael.jpg',
      alt: 'George Michael',
    },
    name: 'George Michael',
    award: '1996 MTV Europe Music Award for Best Male',
    description: 'George Michael and his incomparable vision and drive propelled him to superstardom, and he became the most-played artist on British radio from 1984 to 2004,',
  },
];

const section = document.getElementById('artistSection');
const artists = document.getElementById('featuredArtists');

function getArtistContent({
  img, name, award, description,
}) {
  return `<div class="imgHolder">
            <img src="${img.src}" alt="${img.alt}">
          </div>
          <div class="artistDetail">
            <div class="artistHolder">
              <h3>${name}</h3>
              <span>${award}</span>
              <div class="underLine"></div>
            </div>
            <p>${description}</p>
          </div>
          `;
}

function setTitle() {
  const title = document.createElement('div');
  title.className = 'holder';
  title.innerHTML = `
      <h2 class="title">Featured Artists</h2>
      <div class="underLine"></div>
    `;
  section.appendChild(title);
}

function setArtists(artist) {
  const artistDetail = document.createElement('article');
  artistDetail.className = 'artist';
  artistDetail.innerHTML = getArtistContent(artist);
  return artistDetail;
}

function setArtistsMore(artist) {
  const artistDetail = document.createElement('article');
  artistDetail.className = 'artist more';
  artistDetail.innerHTML = getArtistContent(artist);
  return artistDetail;
}

function setArtistContent(artist) {
  artists.appendChild(setArtists(artist));
}

function setArtistContentMore(artist) {
  artists.appendChild(setArtistsMore(artist));
}

function loadFeaturedArtists() {
  setTitle();
  for (let i = 0; i < artistInfo.length; i += 1) {
    if (i <= 2) {
      setArtistContent(artistInfo[i]);
    } else {
      setArtistContentMore(artistInfo[i]);
    }
  }
}

loadFeaturedArtists();