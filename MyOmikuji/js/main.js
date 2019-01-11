(function (){
    'use strict';
    var btn = document.getElementById('btn');
    
    btn.addEventListener('click', function() {
        var omikujiResult = ['大吉','中吉','小吉','うんち！(正解の音)','末吉','凶;_;','大凶^^;'];
        var omikujiNum = Math.floor(Math.random() * omikujiResult.length);
        this.textContent = omikujiResult[omikujiNum];

        // 確率で結果が分かれるバージョン
        // var omikujiResult = Math.random();
        // if(omikujiResult < 0.05) {
        //     this.textContent = '大吉！';
        // }　else if (omikujiResult < 0.2) {
        //     this.textContent = '中吉';
        // } else {
        //     this.textContent = 'うんち';
        // }

    });
    btn.addEventListener('mousedown', function() {''
        this.className = 'pushed';
    });
    btn.addEventListener('mouseup', function() {
        this.className = '';
    });
})();