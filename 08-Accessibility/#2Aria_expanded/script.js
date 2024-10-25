// Interactive with enter / space

document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.accordion-header');
  
  const toggle = () => {
    const content = header.nextElementSibling;
    const expanded = header.getAttribute('aria-expanded') === 'true';

    // Toggle aria-expanded attribute
    header.setAttribute('aria-expanded', !expanded);

    // Toggle aria-hidden attribute
    content.setAttribute('aria-hidden', expanded);

    console.log('Accordion header clicked');
    console.log('aria-expanded:', header.getAttribute('aria-expanded'));
  };

  header.addEventListener('click', toggle); // is invoked not imd starts 

  header.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle();
    }
  });

});

// Non interactive

// document.addEventListener('DOMContentLoaded', function () {
//   const header = document.querySelector('.accordion-header');

//   header.addEventListener('click', () => {
//     const content = header.nextElementSibling;
//     const expanded = header.getAttribute('aria-expanded') === 'true';

//     // Toggle aria-expanded attribute
//     header.setAttribute('aria-expanded', !expanded);

//     // Toggle aria-hidden attribute
//     content.setAttribute('aria-hidden', expanded);

//     console.log('Accordion header clicked');
//     console.log('aria-expanded:', header.getAttribute('aria-expanded'));
//   });
// });