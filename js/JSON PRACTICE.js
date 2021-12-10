
fetch('/data/profiles.json').then(response => {
    return response.json();
}).then(data => {

    console.log(data);
}).catch(err => {

});