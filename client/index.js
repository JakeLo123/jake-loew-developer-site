import allProjects from './projects-data';

const projectNavigation = document.getElementsByClassName('navigation')[0];
const projectSection = document.getElementById('projects');

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

projectNavigation.addEventListener('click', () => {
  projectSection.scrollIntoView({ behavior: 'smooth' });
});
