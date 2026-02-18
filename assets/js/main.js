document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const yearEl = document.getElementById('year');
  const forms = document.querySelectorAll('form[data-async]');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !expanded);
      navLinks.classList.toggle('open');
    });
  }

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  forms.forEach(form => {
    const feedback = form.querySelector('.form-feedback');
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!feedback) return;

      const requiredFields = Array.from(form.querySelectorAll('[required]'));
      const invalid = requiredFields.some(field => !field.value.trim());

      if (invalid) {
        feedback.className = 'form-feedback error';
        feedback.textContent = 'Please complete all required fields.';
        feedback.style.display = 'block';
      } else {
        feedback.className = 'form-feedback success';
        feedback.textContent = 'Thanks! Your submission has been received. Expect a response shortly.';
        feedback.style.display = 'block';
        form.reset();
      }
    });
  });
});
