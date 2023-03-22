


let navIcon = document.getElementById('icon');
let navBar = document.querySelector('.navbar .nav');

navIcon.addEventListener("click", () => {
    navBar.classList.toggle('active');
});

window.onscroll = () =>{
    navBar.classList.remove('active');
}

 
// Hobbies start

const myHobbies = [
    {
        image: 'images/cooking.jpg',
        title: 'cooking',
        description: 'Cooking can bring happiness by providing a creative outlet and sense of accomplishment.',
    },
    {
        image: 'images/the-walking-dead.jpg',
        title: 'movies',
        description: 'Cooking can bring happiness by providing a creative outlet and sense of accomplishment.',
    },
    {
        image: 'images/valorant.jpg',
        title: 'games',
        description: 'Cooking can bring happiness by providing a creative outlet and sense of accomplishment.',
    }
];

const boxAboutSelf = document.querySelector('.aboutSelf .box-container');

myHobbies.forEach(data => {
    const box = document.createElement('div');
    box.classList.add('box');

    const imageLink = document.createElement('img');
    imageLink.src = data.image;
    box.appendChild(imageLink);

    const title = document.createElement('h1');
    title.textContent = data.title;
    box.appendChild(title);

    const description = document.createElement('p');
    description.textContent = data.description;
    box.appendChild(description);

    boxAboutSelf.appendChild(box);
});

// Hobbies ends

const poster = [
    {
        image: 'images/poster1.jpg',
        title: 'Thumbnail 1'
    },
    {
        image: 'images/poster2.jpg',
        title: 'Thmbnail 2'
    },
    {
        image: 'images/poster3.jpg',
        title: 'Thumbnal 3'
    }
];

const boxPoster = document.querySelector('.thumbnail .box-container');

poster.forEach(data => {
    const box = document.createElement('div');
    box.classList.add('box');

    const imageLink = document.createElement('img');
    imageLink.src = data.image;
    box.appendChild(imageLink);

    const title = document.createElement('h1');
    title.textContent = data.title;
    box.appendChild(title);
    
    boxPoster.appendChild(box);
});


const boxFooter = document.querySelector('footer .box-container');
const footer = document.createElement('div');
footer.classList.add('date');
footer.textContent = "© " + new Date().getFullYear();
boxFooter.appendChild(footer);