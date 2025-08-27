// Scroll animation utility
export const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Function to observe elements
  const observeElements = () => {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
    animatedElements.forEach((el) => {
      if (!el.classList.contains('observed')) {
        el.classList.add('observed');
        observer.observe(el);
      }
    });
  };

  // Initial observation
  observeElements();

  // Observe elements after a short delay to ensure DOM is ready
  setTimeout(observeElements, 100);

  // Re-observe elements when content changes (for dynamic content)
  const mutationObserver = new MutationObserver(() => {
    observeElements();
  });

  mutationObserver.observe(document.body, {
    childList: true,
    subtree: true
  });

  return { observer, mutationObserver };
};

// Initialize animations when DOM is loaded
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', initScrollAnimations);
  } else {
    initScrollAnimations();
  }
}
