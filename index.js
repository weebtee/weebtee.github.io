document.querySelector('.projects-link').addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.querySelector('#proj');
    section.scrollIntoView({ behavior: 'smooth' });

    setTimeout(() => {
        section.classList.add('visible');
    }, 200);
});
