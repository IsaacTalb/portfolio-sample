document.addEventListener("DOMContentLoaded", () => {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const projectList = document.getElementById("project-list");
            data.projects.forEach(project => {
                const projectCard = document.createElement("div");
                projectCard.innerHTML = `
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <a href="${project.link}">View Project</a>
                `;
                projectCard.style.border = "1px solid #ccc";
                projectCard.style.padding = "1rem";
                projectCard.style.margin = "1rem";
                projectCard.style.display = "flex";
                projectCard.style.flexDirection = "column";
                projectCard.style.alignItems = "center";
                projectCard.style.justifyContent = "center";
                projectCard.style.textAlign = "center";
                projectCard.style.backgroundColor = "#f5f5f5";
                projectList.appendChild(projectCard); // don't forget this
            });
        });
});

document.getElementById("contact").addEventListener("submit", function(e) {
    e.preventDefault();

    const serviceID = "service_otsuy9g";
    const templateID = "template_m3nqbgq";
    const userID = "ZxcK7uqCQqYWEKNiz";

    const form = e.target;
    const formData = new FormData(form);

    const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message")
    };

    emailjs.send(serviceID, templateID, data, userID)
        .then(() => {
            form.reset();
            alert("Your message has been sent successfully!");
        })
        .catch((error) => {
            console.error("Error sending email:", error);
            alert("An error occurred while sending the email. Please try again later.");
        });
});

