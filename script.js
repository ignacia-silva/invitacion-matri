      function showThanks() {
    document.getElementById('modal-form-content').style.display = 'none';
    document.getElementById('modal-thanks-content').style.display = 'block';
    setTimeout(() => {
      document.getElementById('modal-rsvp').classList.remove('open');
      document.getElementById('modal-form-content').style.display = 'block';
      document.getElementById('modal-thanks-content').style.display = 'none';
    }, 3000);
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));