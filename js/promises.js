function getGithubRepo(username, repo) {
    return fetch(`https://api.github.com/repos/${username}/${repo}/commits`)
        .then(response => response.json())
}

getGithubRepo('eloysroblesaguilar', 'codeup-web-exercises')
    .then(response => console.log(response[0].commit.committer.date))
    .catch(err => console.log(err))




function wait(timeout) {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

wait(3000).then(() => alert('runs after 3 seconds'));



