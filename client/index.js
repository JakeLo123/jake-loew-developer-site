import allProjects from './projects-data';
import axios from 'axios';

const heroNavigation = document.getElementsByClassName('navigation')[3];
const projectNavigation = document.getElementsByClassName('navigation')[0];
const educationNavigation = document.getElementsByClassName('navigation')[1];
const contactNavigation = document.getElementsByClassName('navigation')[2];
const hero = document.getElementById('hero');
const projectSection = document.getElementById('projects');
const educationSection = document.getElementById('education');
const contactSection = document.getElementById('contact');

function buildProjectSection() {
  for (let i = 0; i < allProjects.length; ++i) {
    const project = allProjects[i];
    const card = document.createElement('div');
    card.classList.add('project-card');
    const technologyList = project.builtWith.map(tech => {
      return `
            <div class="tech-item">
                <p>${tech.title}</p>
                <img src="${tech.filename}" alt="${tech.title}" class="tech-img">
            </div>
        `;
    });
    let deployLink;
    if (project.deploymentLink.length) {
      deployLink = `<a class="project-link" target="_blank" href=${project.deploymentLink}>visit site</a>`;
    } else {
      deployLink = `<p class="project-link inactive">in production</p>`;
    }
    const template = `
        <div class="project-details">
            <h2 class="project-title">${project.title} - </h2>
            <h3>${project.role}</h3>
            <p>${project.description}</p>
            <div class="tech-stack">${technologyList.join('')}</div>
            <div class="project-links-group">
            ${deployLink}
              <a class="project-link" target="_blank" href=${
                project.sourceCode
              }>view code</a>
            </div>
        </div>
        <img src="${project.gif}" alt="${project.title}" class="project-gif">
        `;
    card.innerHTML = template;
    projectSection.appendChild(card);
  }
}

buildProjectSection();

heroNavigation.addEventListener('click', () => {
  hero.scrollIntoView();
});
projectNavigation.addEventListener('click', () => {
  projectSection.scrollIntoView();
});
educationNavigation.addEventListener('click', () => {
  educationSection.scrollIntoView();
});
contactNavigation.addEventListener('click', () => {
  contactSection.scrollIntoView();
});

const submitMessage = () => {
  const fullName = document.querySelector('#full-name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('textarea').value;
  const formData = {
    fullName,
    email,
    message,
  };
  axios.post('/api/message', formData);
};

const contactForm = document.querySelector('form');
const thankYou = document.querySelector('#thank-you-note');
contactForm.addEventListener('submit', e => {
  e.preventDefault();
  thankYou.style.display = 'block';
  contactForm.style.animationPlayState = 'running;';
  contactForm.style.display = 'none';
  submitMessage();
});
