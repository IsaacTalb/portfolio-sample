document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const projectList = document.getElementById('project-list');
            data.projects.forEach(project => {
                const projectCard = document.createElement('div');
                projectCard.innerHTML = `
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <a href="${project.link}">View Project</a>
                `;
                projectCard.style.border = '1px solid #ccc';
                projectCard.style.padding = '1rem';
                projectCard.style.margin = '1rem';
                projectCard.style.display = 'flex';
                projectCard.style.flexDirection = 'column';
                projectCard.style.alignItems = 'center';
                projectCard.style.justifyContent = 'center';
                projectCard.style.textAlign = 'center';
                projectCard.style.backgroundColor = '#f5f5f5';
            });
        });
});
