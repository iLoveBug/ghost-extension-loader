/**
 * vue-based card support
 * Used on any individual post/page       
 *
 * Detects when a vue-based card has been used and applies vue to make sure it works.
 */

(function (window, document) {
    var applyVueForCards = function () {
        var cards = document.querySelectorAll('.kg-vue-card')
        var scripts = {}
        cards.forEach(function (card) {
            var scriptUrl = card.getAttribute('script')
            if (scripts[scriptUrl]) {
                if (scripts[scriptUrl].loaded) {
                    new Vue({
                        el: card
                    });
                } else {
                    scripts[scriptUrl].cards.push(card)
                }
            } else {
                scripts[scriptUrl] = {
                    loaded: false,
                    cards: [card]
                }
                var script = document.createElement('script')
                script.type = 'text/javascript'
                script.onload = function () {
                    scripts[scriptUrl].loaded = true;
                    for (var cIndex in scripts[scriptUrl].cards) {
                        new Vue({
                            el: scripts[scriptUrl].cards[cIndex]
                        });
                    }
                };
                script.src = scriptUrl
                document.getElementsByTagName('head')[0].appendChild(script)
            }
        });
    };

    var loaderStyle = document.createElement('link');
    loaderStyle.rel = 'stylesheet';
    loaderStyle.type = 'text/css';
    loaderStyle.href = 'https://cdn.jsdelivr.net/npm/loaders.css@0.1.2';
    document.getElementsByTagName('head')[0].appendChild(loaderStyle);

    var loaderScript = document.createElement('script');
    loaderScript.type = 'text/javascript';
    loaderScript.src = 'https://cdn.jsdelivr.net/npm/loaders.css@0.1.2/loaders.css.js';
    document.getElementsByTagName('head')[0].appendChild(loaderScript);

    var vueScript = document.createElement('script');
    vueScript.type = 'text/javascript';
    vueScript.src = 'https://cdn.jsdelivr.net/npm/vue@2.6.11';
    document.getElementsByTagName('head')[0].appendChild(vueScript);

    document.addEventListener('DOMContentLoaded', applyVueForCards);
})(window, document);