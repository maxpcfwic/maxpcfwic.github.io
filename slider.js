const toggles = document.querySelectorAll('.toggle');

toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    const content = toggle.nextElementSibling;

    if (content.style.height && content.style.height !== '0px') {
      content.style.height = '0px';
    } else {
      content.style.height = content.scrollHeight + 'px';
    }
  });
});
