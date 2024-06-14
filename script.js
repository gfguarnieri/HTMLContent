

const allRegion = document.querySelectorAll('.region');
allRegion.forEach((region, i) => {
    if (i === allRegion.length - 1) return;
    region.setAttribute('data-aos', i % 2 === 0 ? 'fade-left' : 'fade-right');
});

const allTitles = document.querySelectorAll('.title');
allTitles.forEach((title, i) => {
    const option = document.createElement('li');
    option.innerHTML = title.textContent;
    option.addEventListener('click', () => {
        title.scrollIntoView({ behavior: 'smooth' });
    });
    document.querySelector('.options').appendChild(option);
});

const btnToggle = document.querySelector('.toggle');
const nav = document.querySelector('nav');
btnToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

AOS.init();

hljs.highlightAll();
hljs.initLineNumbersOnLoad();