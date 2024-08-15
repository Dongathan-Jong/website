

(function() {
    let devtools = {
        open: false,
        wasOpen: false,
    };

    const threshold = 160;
    const check = function() {
        let widthThreshold = window.outerWidth - window.innerWidth > threshold;
        let heightThreshold = window.outerHeight - window.innerHeight > threshold;

        if (!(heightThreshold && widthThreshold) && ((window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized) || widthThreshold || heightThreshold)) {
            devtools.open = true;
            devtools.wasOpen = true;
        } else {
            devtools.open = false;
            if (devtools.wasOpen) {
              window.history.back(); 
            }
        }
    };

    setInterval(check, 500);
})();
