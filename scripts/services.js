const dots = document.getElementsByClassName('services__dot');
const dotsArea = document.getElementsByClassName('services__dots')[0];
const slides = document.getElementsByClassName('services__content');
let slideIndex = 1;

const showSlides = (n) => {
    if (n < 1) {
        slideIndex = slides.length;
    } else if (n > slides.length) {
        slideIndex = 1;
    }
    const slidesArray = Object.keys(slides).map(i => slides[i]);
    const dotsArray = Object.keys(dots).map(i => dots[i]);
    slidesArray.map(el => {
        return el.style.display = 'none';
    });
    dotsArray.map(el => {
        return el.classList.remove('services__dot--active');
    })
    slides[slideIndex - 1].style.display = 'flex';
    dots[slideIndex - 1].classList.add('services__dot--active');
}

showSlides(slideIndex);

const currentSlide = (n) => {
    showSlides(slideIndex = n);
}

dotsArea.addEventListener('click', (e) => {
    for (let i = 0; i < dots.length + 1; i++) {
        if (e.target.classList.contains('services__dot') && e.target == dots[i - 1]) {
            currentSlide(i);
        }
    }
    e.preventDefault();
});