document.addEventListener("scroll", function() {
  const scrollTexts = document.querySelectorAll(".scroll-text");
  const triggerBottom = window.innerHeight * 0.9;

  const documentHeight = document.documentElement.scrollHeight;
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const viewportHeight = window.innerHeight;

  if (scrollTop + viewportHeight >= documentHeight) {
    document.body.classList.add('faded-background'); 
  } else {
    document.body.classList.remove('faded-background'); 
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
