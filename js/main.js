const container = document.getElementById('featured-speakers');

const featuredSpeakers = [
  {
    img: 'img/kurt.jpg',
    name: 'Kurt John',
    title: 'Chief cybersecurity officer',
    description: ' Kurt John oversees the coordination of cybersecurity for Siemens products, solutions, services, and infrastructure utilized to deliver value to Siemens customers in the USA',
  },
  {
    img: 'img/stavely.jpg',
    name: 'Confidence Stavely',
    title: 'Chief cybersecurity officer',
    description: 'Confidence Staveley is an award-winning cybersecurity professional, digital development enthusiast, author and entrepreneur with over a decade experience in technology',
  },
  {
    img: 'img/nkiruka.png',
    name: 'Nkiruka Joy',
    title: 'Cybersecurity Expert',
    description: 'Nkiruka Joy Aimienoho is an award-winning technology executive and an expert in cyber security, resilience, and data privacy',
  },
  {
    img: 'img/elizabeth_kolade.jpg',
    name: 'Elizabeth Kolade',
    title: 'Cybersecurity professional',
    description: 'Elizabeth Kolade is involved in the strategy, creation and implementation of security measures and the delivery of cyber security awareness across critical organizations.',
  },
  {
    img: 'img/Richard-Stiennon.jpg',
    name: 'Richard Stiennon',
    title: 'Research Analyst',
    description: 'Richard Stiennon is an industry analyst and adviser to many security companies from startups to the very largest',
  },
  {
    img: 'img/Robert-Herjavec.jpg',
    name: 'Ryan Merkley',
    title: 'Managing Director of Aspen Digital',
    description: 'Ryan Merkley leads high-impact and high-visibility initiatives across the program’s areas of focus: cybersecurity, the information ecosystem, emerging technology.',
  },
];

function loadFeaturedSpeakers() {
  let htmlContent = '';
  const html = `
        <div class="feature-wrapper">
        <div class="feature-section-row1">

            <div>
                <h2>Featured Speakers</h2>
                <hr />
            </div>

        </div>

        <div class="feature-section-row2">

            <div>
                <img src="${featuredSpeakers[0].img}" alt="image"/>
                <p>
                    <strong>${featuredSpeakers[0].name}</strong> <br />
                    <span class="title">${featuredSpeakers[0].title}</span><br /><br />
                    ${featuredSpeakers[0].description}
                </p>
            </div>

            <div>
                <img src="${featuredSpeakers[1].img}" alt="image"/>
                <p>
                    <strong>${featuredSpeakers[1].name}</strong><br />
                    <span class="title">${featuredSpeakers[1].title}</span><br /><br />
                    ${featuredSpeakers[1].description}
                </p>

            </div>
           
        </div>

        <div class="feature-section-row3">

            <div>
                <img src="${featuredSpeakers[2].img}" alt="image"/>
                <p>
                    <strong>${featuredSpeakers[2].name}</strong><br />
                    <span class="title">${featuredSpeakers[2].title}</span><br /><br />
                    ${featuredSpeakers[2].description}
                </p>
            </div>

            <div>
                <img src="${featuredSpeakers[3].img}" alt="image"/>
                <p>
                    <strong>${featuredSpeakers[3].name}</strong><br />
                    <span class="title">${featuredSpeakers[3].title}</span><br /><br />
                    ${featuredSpeakers[3].description}
                </p>
            </div>
           
        </div>

        <div class="feature-section-row4">

            <div>
                <img src="${featuredSpeakers[4].img}" alt="image"/>
                <p>
                    <strong>${featuredSpeakers[4].name}</strong><br />
                    <span class="title">${featuredSpeakers[4].title}</span><br /><br />
                    ${featuredSpeakers[4].description}
                </p>
            </div>

            <div>
                <img src="${featuredSpeakers[5].img}" alt="image"/>
                <p>
                    <strong>${featuredSpeakers[5].name}</strong><br />
                    <span class="title">${featuredSpeakers[5].title}</span><br /><br />
                    ${featuredSpeakers[5].description}
                </p>
            </div>
           
        </div>
    </div>`;
  htmlContent += html;

  container.innerHTML = htmlContent;
}

loadFeaturedSpeakers();

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const body = document.querySelector('.main-section');

const mobileMenu = () => {
  hamburger.classList.toggle('active');
  if (hamburger.classList.contains('active')) {
    hamburger.innerHTML = '<i class="fas fa-times"  style="color:#fff"></i>';
  } else { hamburger.innerHTML = '<i class="fas fa-bars"></i>'; }
  navMenu.classList.toggle('active');
  body.forEach((n) => n.classList.toggle('bgcolor'));
};

const closeMenu = () => {
  hamburger.innerHTML = "<i class='fas fa-bars'></i>";
  navMenu.classList.remove('active');
  hamburger.classList.remove('active');
  body.forEach((n) => n.classList.remove('bgcolor'));
};

const navLink = document.querySelectorAll('.nav-link');
navLink.forEach((n) => n.addEventListener('click', closeMenu));
hamburger.addEventListener('click', mobileMenu, false);