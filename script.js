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
            }
        });
    });
});
