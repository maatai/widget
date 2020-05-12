(function(){
    var MAAT_URL = "https://maatai.github.io/widget/api/api.dart.js";
    var head = document.head || document.getElementsByTagName("head")[0];
    var script = document.createElement("script");
    script.src = MAAT_URL;
    script.language = "javascript";
    head.appendChild(script);

    this.Maat = Maat = (function(){
        open = function(){
            var event = new CustomEvent('maatevent-open',{detail:""});
            window.dispatchEvent(event);
        };

        init = function(r,c){
            this.cb = c;
            this.rd = r;
            window.addEventListener("maatevent-post",e => this.cb(e));
            script.addEventListener("load", e => this.rd(), false);
        };

        return {
            init:init,
            open:open
        };
    })();
}).call(this);