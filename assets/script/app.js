let titleJumbo = ['indonesia'];
let textPost = 0;
let speed = 100;

typewriter = () => {
    document.getElementById('titleJumbotron').innerHTML = titleJumbo[0].substring(0, textPost) +
        "<span>\u25ae</span>";

    if (textPost++ != titleJumbo[0].length) {
        setTimeout(typewriter, speed);
    }
}

navigation = () => {
    let ul = document.querySelector('header nav ul')
    let navi = [
        {
            Content : 'Early History',
            contentHref : '#earlyHistory'
        },
        {
            Content : 'Colonial Era',
            contentHref : '#eraColonial'
        },
        {
            Content : 'Post-World War II',
            contentHref : '#postWar'
        }
    ]

    navi.map((nav) => {
        ul.innerHTML += `
        <li><a href=${nav.contentHref}>${nav.Content}</a></li>
        `
    })
}

navigation();
typewriter();