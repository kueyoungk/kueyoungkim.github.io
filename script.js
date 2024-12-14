document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-button');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const projectInfo = button.closest('.project-info');
            const moreText = projectInfo.querySelector('.more-text');

            if (moreText.style.display === 'none' || moreText.style.display === '') {
                // Show the hidden text
                moreText.style.display = 'inline';
                button.textContent = 'See Less';
            } else {
                // Hide the text again
                moreText.style.display = 'none';
                button.textContent = 'See More';
            }
        });
    });
});
