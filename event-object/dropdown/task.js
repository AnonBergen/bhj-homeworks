const dropdowns = Array.from(document.querySelectorAll('.dropdown'));

dropdowns.forEach(dropdown => {
    const value = dropdown.querySelector('.dropdown__value');
    const list = dropdown.querySelector('.dropdown__list');
    const items = Array.from(dropdown.querySelectorAll('.dropdown__item'));

    value.addEventListener('click', () => {
        list.classList.toggle('dropdown__list_active');
    });

    items.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();

            const link = item.querySelector('.dropdown__link');

            value.textContent = link.textContent;

            list.classList.remove('dropdown__list_active');
        });
    });
});
