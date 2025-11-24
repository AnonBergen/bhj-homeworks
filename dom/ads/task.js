
const rotators = Array.from(document.querySelectorAll('.rotator'));

rotators.forEach(rotator => {
    const cases = Array.from(rotator.querySelectorAll('.rotator__case'));
    let currentIndex = cases.findIndex(el => el.classList.contains('rotator__case_active'));

    rotator.style.color = cases[currentIndex].dataset.color || '';

    function showNext() {

        cases[currentIndex].classList.remove('rotator__case_active');

        currentIndex = (currentIndex + 1) % cases.length;

        const nextCase = cases[currentIndex];
        nextCase.classList.add('rotator__case_active');
        rotator.style.color = nextCase.dataset.color || '';

        const speed = parseInt(nextCase.dataset.speed, 10) || 1000;
        setTimeout(showNext, speed);
    }

    const initialSpeed = parseInt(cases[currentIndex].dataset.speed, 10) || 1000;
    setTimeout(showNext, initialSpeed);
});
