document.addEventListener("scroll", function() {
  const scrollTexts = document.querySelectorAll(".scroll-text");
  const portfolio = document.getElementById('portfolio');
  const triggerBottom = window.innerHeight * 0.9;

  const documentHeight = document.documentElement.scrollHeight;
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const viewportHeight = window.innerHeight;

  if (scrollTop + viewportHeight >= 3200) {
    document.body.classList.add('faded-background'); 
    portfolio.style.display = 'block'; 
  } else {
    document.body.classList.remove('faded-background'); 
    portfolio.style.display = 'none'; 
  }

  scrollTexts.forEach(text => {
    const textTop = text.getBoundingClientRect().top;

    if (textTop < triggerBottom) {
      text.classList.add("visible");
    } else {
      text.classList.remove("visible");
    }
  });
});
