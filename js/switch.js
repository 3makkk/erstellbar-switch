/**
 * Erstellbar Switch
 *
 * @author Sven Friedemann
 * @licence MIT
 *
 */
(function () {
    'use strict';
    
    var switchEls = document.querySelectorAll('.switch');

    for (var i = 0; i < switchEls.length; ++i) {
        (function() {
            var switchEl = switchEls[i];

            switchEls[i].addEventListener('click', function(e) {
                e.preventDefault();
                switchEl.classList.toggle('is-active');
                switchEl.classList.add('is-loading');
                window.location = switchEl.querySelector('a.not-active').getAttribute('href');
            })
        })();
    }
})();
