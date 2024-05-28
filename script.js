const username = 'lianmatsuo';
const repoContainer = document.getElementById('repos');

async function fetchRepos() {
    try {
        const response = await fetch('https://api.github.com/users/${username}/repos');
        if (!response.ok) {
            throw new Error('HTTP error! Status: ${response.status}');
        }
        const repos = await response.json();
        displayRepos(repos);
    } catch (error) {
        console.error('Error fetching repositories:', error);
        repoContainer.innerHTML = '<p>Failed to load repositories. Please try again later.</p>'
    }
}

function displayRepos(repos) {
    repos.forEach(repo => {
        const repoDiv = document.createElement('div');
        repoDiv.className = 'repo';

        const repoName = document.createElement('h2');
        repoName.textContent = repo.name;

        const repoDescription = document.createElement('p');
        repoDescription.textContent = repo.description ? repo.description : 'No description available';

        const repoLink = document.createElement('a');
        repoLink.href = repo.html_url;
        repoLink.textCOntent = 'View Repository';
        repoLink.target = '_blank';

        repoDiv.appendChild(repoName);
        repoDiv.appendChild(repoDescription);
        repoDiv.appendChild(repoLink);
        
        repoContainer.appendChild(repoDiv);
    })
}
//bob
fetchRepos();