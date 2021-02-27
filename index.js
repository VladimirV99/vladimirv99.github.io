function toggleNav() {
    let dropdown = document.getElementById('nav-dropdown');
    dropdown.classList.toggle('show');
}

function hideNav() {
    let dropdown = document.getElementById('nav-dropdown');
    dropdown.classList.remove('show');
}

// Accordions
let accordion = document.getElementsByClassName('accordion');

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active');
        let panel = this.previousElementSibling;
        if (panel.style.maxHeight) {
            accordion[i].innerHTML = "Show More";
            panel.style.maxHeight = null;
        } else {
            accordion[i].innerHTML = "Show Less";
            panel.style.maxHeight = "fit-content";
        }
    });
}

// Slideshows
let indexes = {
    'circa2020': 0,
    'portal': 0,
    'multiframe': 0,
    'filemanager': 0,
    'alas': 0,
    'marker': 0,
    'blog': 0,
    'markdown': 0,
    'pendulum': 0
};

for(key of Object.keys(indexes)) {
    showSlides(key);
}

function prevSlide(name) {
    indexes[name] -= 1;
    showSlides(name);
}

function nextSlide(name) {
    indexes[name] += 1
    showSlides(name);
}

function setSlide(name, n) {
    indexes[name] = n
    showSlides(name);
}

function showSlides(name) {
    let slideshow = document.getElementById(name);
    let slides = slideshow.getElementsByClassName("slide");
    let thumbnails = slideshow.getElementsByClassName("thumbnail");
    let captionText = slideshow.getElementsByClassName("caption")[0];

    let n = indexes[name];
    if(!n || n >= slides.length)
        indexes[name] = 0;
    else if (n < 0)
        indexes[name] = slides.length-1;
    n = indexes[name];
    
    for (let i = 0; i < slides.length; i++)
        slides[i].style.display = "none";
    for (let i = 0; i < thumbnails.length; i++)
        thumbnails[i].className = thumbnails[i].className.replace(" active", "");
    
    slides[n].style.display = 'block';
    thumbnails[n].className += ' active';
    captionText.innerHTML = thumbnails[n].alt;
}

let circa2020 = {
    prev: () => prevSlide('circa2020'),
    next: () => nextSlide('circa2020'),
    set: slide => setSlide('circa2020', slide)
}

let portal = {
    prev: () => prevSlide('portal'),
    next: () => nextSlide('portal'),
    set: slide => setSlide('portal', slide)
}

let multiframe = {
    prev: () => prevSlide('multiframe'),
    next: () => nextSlide('multiframe'),
    set: slide => setSlide('multiframe', slide)
}

let filemanager = {
    prev: () => prevSlide('filemanager'),
    next: () => nextSlide('filemanager'),
    set: slide => setSlide('filemanager', slide)
}

let alas = {
    prev: () => prevSlide('alas'),
    next: () => nextSlide('alas'),
    set: slide => setSlide('alas', slide)
}

let marker = {
    prev: () => prevSlide('marker'),
    next: () => nextSlide('marker'),
    set: slide => setSlide('marker', slide)
}

let blog = {
    prev: () => prevSlide('blog'),
    next: () => nextSlide('blog'),
    set: slide => setSlide('blog', slide)
}

let markdown = {
    prev: () => prevSlide('markdown'),
    next: () => nextSlide('markdown'),
    set: slide => setSlide('markdown', slide)
}

let pendulum = {
    prev: () => prevSlide('pendulum'),
    next: () => nextSlide('pendulum'),
    set: slide => setSlide('pendulum', slide)
}