document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.toggle-button');

    toggleButtons.forEach((button) => {
        button.addEventListener('click', function () {
            const projectInfo = button.closest('.project-info');
            const moreText = projectInfo.querySelector('.more-text');

            if (moreText.style.display === 'none' || moreText.style.display === '') {
                moreText.style.display = 'block'; 
                button.textContent = 'See Less';
            } else {
                moreText.style.display = 'none';
                button.textContent = 'See More';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('nav');

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        nav.classList.toggle('visible');
    });
});
