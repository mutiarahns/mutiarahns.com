const projectsPerPage = 2;
const projectList = document.getElementById("project-list");
const projects = [
  {
    title: "Byond By BSI",
    timeline: "March 2022-March 2024",
    description: "Superapp by Bank Syariah Indonesia",
    image: "assets/images/placeholder-image.png",
  },
  {
    title: "OCTO Click by CIMB Niaga",
    timeline: "August 2021 - March 2022",
    description:
      "Front End Web Developer for SISKOHAT (Indonesian Hajj Registration and Hajj Opening Account)feature in OCTO Click by CIMB Niaga.",
    image: "assets/images/placeholder-image.png",
  },
  {
    title: "Sistem Penilaian Kerja Harian Personi",
    timeline: "March 2021 - July 2021",
    description:
      "Web based application Sistem Penilaian Kerja Harian Personil for Dittipidter Bareskrim Polri.",
    image: "assets/images/placeholder-image.png",
  },
  {
    title: "Permata Mobile X",
    timeline: "October 2017 - March 2021",
    description: "Mobile banking application by PermataBank",
    image: "assets/images/placeholder-image.png",
  },
];
const totalPages = Math.ceil(projects.length / projectsPerPage);
let currentPage = 1;

function renderPage(page) {
  const start = (page - 1) * projectsPerPage;
  const end = start + projectsPerPage;
  const projectList = document.getElementById("project-list");
  projectList.innerHTML = "";

  projects.slice(start, end).forEach((project) => {
    const projectItem = document.createElement("div");
    projectItem.className = "project-item";
    projectItem.innerHTML = `
    <img src="${project.image}" alt="${project.title}" class="project-image">
        <div class="project-info">
            <h3>${project.title}</h3>
            <p>${project.timeline}</p>
            <p>${project.description}</p>
            <button class="rounded-button read-more-button">Read More</button>
        </div>
            `;
    projectList.appendChild(projectItem);
  });

  document.getElementById(
    "page-info"
  ).textContent = `Page ${page} of ${totalPages}`;
  document.getElementById("prev-page").disabled = page === 1;
  document.getElementById("next-page").disabled = page === totalPages;
}

document.getElementById("prev-page").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderPage(currentPage);
  }
});

document.getElementById("next-page").addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    renderPage(currentPage);
  }
});

renderPage(currentPage);
