document.addEventListener("DOMContentLoaded", function() {
    const reposList = document.getElementById("repos-list");

    // Dummy data (you can fetch real data from an API)
    const repositories = [
        { name: "Project 1", url: "https://github.com/example/project1" },
        { name: "Project 2", url: "https://github.com/example/project2" },
        { name: "Project 3", url: "https://github.com/example/project3" }
    ];

    // Populate repositories
    repositories.forEach(repo => {
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.href = repo.url;
        link.textContent = repo.name;
        li.appendChild(link);
        reposList.appendChild(li);
    });
});
