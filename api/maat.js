(function(){
    this.Maat = Maat = (function(){
        open = function(){
            var event = new CustomEvent('maatevent-open',{detail:""});
            window.dispatchEvent(event);
        };

        init = function(c){
            this.cb = c;
            window.addEventListener("maatevent-post",e => this.cb(e));
        };
        return {
            init:init,
            open:open
        };
    })();
}).call(this);