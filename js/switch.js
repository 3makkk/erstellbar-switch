/**
 * Erstellbar Switch
 *
 * @author Sven Friedemann
 * @licence MIT
 *
 */
(function (document, window) {
    'use strict';
    
    var switchEl = document.querySelector('.switch');
    switchEl.addEventListener('click', function(e) {
        e.preventDefault();
        switchEl.classList.toggle('is-active');
        switchEl.classList.add('is-loading');
        window.location = switchEl.querySelector('a.not-active').getAttribute('href');
    })
})(document, window);
