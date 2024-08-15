

document.addEventListener("scroll", function() {
  const scrollTexts = document.querySelectorAll(".scroll-text");
  const portfolio = document.getElementById('portfolio');
  const triggerBottom = window.innerHeight * 0.9;

  const documentHeight = document.documentElement.scrollHeight;
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const viewportHeight = window.innerHeight;

  if (scrollTop + viewportHeight >= 3400) {
    document.body.classList.add('faded-background'); 
    portfolio.style.display = 'block'; 
    socials.style.display = 'block';
  } else {
    document.body.classList.remove('faded-background'); 
    portfolio.style.display = 'none'; 
    socials.style.display = 'none';
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

document.getElementById("projectButton").addEventListener("click", function() {
    window.location.href = "projects.html";
});

(function() {
    let devtools = {
        open: false,
        orientation: null
    };

    const threshold = 160;
    const check = function() {
        let widthThreshold = window.outerWidth - window.innerWidth > threshold;
        let heightThreshold = window.outerHeight - window.innerHeight > threshold;

        if (!(heightThreshold && widthThreshold) && ((window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized) || widthThreshold || heightThreshold)) {
            if (!devtools.open) {
                window.location.href = "contactme.html"; 
            }
            devtools.open = true;
        } else {
            devtools.open = false;
        }
    };

    setInterval(check, 500);
})();
