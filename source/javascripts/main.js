if ('addEventListener' in window) {
    window.addEventListener('load', function() {
      document.body.className = document.body.className.replace(/\bis-loading\b/, '');
    });

    if(navigator.userAgent.match(/(MSIE|rv:11\.0)/)) {
      document.body.className += ' is-ie';
    }
}
