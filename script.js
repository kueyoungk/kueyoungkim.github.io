document.addEventListener('DOMContentLoaded', function () {
  // -----------------------------
  // See More / See Less toggles
  // -----------------------------
  const toggleButtons = document.querySelectorAll('.toggle-button');

  toggleButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const projectInfo = button.closest('.project-info');
      if (!projectInfo) return;

      const moreText = projectInfo.querySelector('.more-text');
      if (!moreText) return;

      const isHidden = getComputedStyle(moreText).display === 'none';

      if (isHidden) {
        // Show (keep inline flow inside the paragraph)
        moreText.style.display = 'inline';
        button.textContent = 'See Less';

        // If moreText was given reveal, force it visible on click
        if (moreText.classList.contains('reveal')) {
          moreText.classList.remove('is-visible');
          void moreText.offsetHeight; // reflow to restart transition
          moreText.classList.add('is-visible');
        }
      } else {
        // Hide
        moreText.style.display = 'none';
        button.textContent = 'See More';

        if (moreText.classList.contains('reveal')) {
          moreText.classList.remove('is-visible');
        }
      }
    });
  });

  // -----------------------------
  // Scroll reveal (fade/slide-in)
  // -----------------------------
  const revealEls = document.querySelectorAll('.reveal');

  // Fallback if IntersectionObserver isn't available
  if (!('IntersectionObserver' in window)) {
    revealEls.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target); // stay visible after first reveal
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -5% 0px',
    }
  );

  revealEls.forEach((el) => observer.observe(el));
});