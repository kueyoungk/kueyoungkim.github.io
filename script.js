document.addEventListener('DOMContentLoaded', function () {
    // Toggle buttons for project details
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

    // Navigation bar toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav'); // Target the nav element directly

    navToggle.addEventListener('click', () => {
        if (navMenu.classList.contains('visible')) {
            navMenu.classList.remove('visible');
            navMenu.classList.add('collapsing');
            setTimeout(() => {
                navMenu.classList.remove('collapsing');
                navMenu.style.display = 'none';
            }, 100); // Match slideUp animation duration
        } else {
            navMenu.style.display = 'flex';
            navMenu.classList.add('visible');
        }
    });
});
