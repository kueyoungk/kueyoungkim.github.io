document.addEventListener('DOMContentLoaded', function () {
    // -----------------------------
    // Mobile nav toggle (hamburger)
    // -----------------------------
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.menu nav');

    if (navToggle && nav) {
        navToggle.addEventListener('click', () => {
        nav.classList.toggle('is-open');
        });

        // Close menu after clicking an anchor link (mobile)
        nav.querySelectorAll('a[href^="#"]').forEach((a) => {
        a.addEventListener('click', () => {
            nav.classList.remove('is-open');
        });
        });
    }

    // Respect reduced motion (applies to reveal + parallax)
    const prefersReducedMotion =
        window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // -----------------------------
    // See More / See Less toggles
    // -----------------------------
    document.querySelectorAll('.toggle-button').forEach((button) => {
    button.addEventListener('click', () => {
        // Works for either publications or projects markup
        const info = button.closest('.publication-info') || button.closest('.project-info');
        if (!info) return;

        const moreText = info.querySelector('.more-text');
        if (!moreText) return;

        const isHidden = getComputedStyle(moreText).display === 'none';

        if (isHidden) {
        // Prefer inline for <span> inside <p>, otherwise block
        const displayMode = (moreText.tagName.toLowerCase() === 'span') ? 'inline' : 'block';
        moreText.style.display = displayMode;

        button.textContent = 'See Less';

        // If reveal is accidentally applied, force visibility
        if (moreText.classList.contains('reveal')) {
            moreText.classList.add('is-visible');
        }
        } else {
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
    const revealEls = Array.from(document.querySelectorAll('.reveal'));

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
        revealEls.forEach((el) => el.classList.add('is-visible'));
    } else {
        const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target); // stay visible after first reveal
            }
            });
        },
        { threshold: 0.12, rootMargin: '0px 0px -5% 0px' }
        );

        revealEls.forEach((el) => observer.observe(el));
    }

    // -----------------------------
    // Parallax header image
    // -----------------------------
    const headerImg = document.querySelector('.header-photo img');

    if (!prefersReducedMotion && headerImg) {
        let ticking = false;
        const speed = 0.4; // smaller = slower movement
        const scale = 1.05; // avoid visible edges

        const updateParallax = () => {
        const y = window.scrollY || window.pageYOffset || 0;
        headerImg.style.transform = `translate3d(0, ${y * speed}px, 0) scale(${scale})`;
        ticking = false;
        };

        const onScroll = () => {
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        updateParallax();
    }

    // -----------------------------
    // Footer year (optional: keeps it all in one place)
    // -----------------------------
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
});