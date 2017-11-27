(function(){
    var AdHunterTrigger = 0;
    var count = 0;
    var removeNode = function (selector) {
        Array.prototype.forEach.call( document.querySelectorAll(selector), function( node ) {
            node.parentNode.removeChild( node );
        });
    }
    var pixnetAdHunter = function () {
        if("mobile" !== pix.js_error_type){
            clearInterval(AdHunterTrigger);
            return;
        }

        if(0 < document.querySelectorAll("div.article-body").length){
        /*  痞客邦發不出錢的MIB廣告 */
            removeNode("#ad-mib");
            removeNode("#recommend-tools");
        /* 移除全版廣告遮罩 &lt; - 這種廣告真的很機掰 */
            removeNode("div.pop-ad-cover");
            removeNode("#scupio_interstitialad");
            removeNode("#scupio_interstitial");
        /* 移除文章上下的廣告*/
            removeNode("div.header-ad");
        /* 你不可能有興趣的文章 */
            removeNode("div.pix-related-post");
        /* 移除手機留言區後難看的廣告欄位 */
            removeNode("div.article-ad");
            removeNode("div.hot-articles");
        /* 移除訂房訂票的廣告 */
            removeNode("div.octopus");
            removeNode("div.hotelc-box");
            removeNode("#hotels-searchbox");
        /* 下方浮動廣告*/
            removeNode("div.sticky-box");
        }
        
        /* 後置載入廣告要持續追殺 */
        if(0 < document.querySelectorAll("ins.pixnet-ad").length && 0 < document.querySelectorAll("div.article-body").length){
            Array.prototype.forEach.call( document.querySelectorAll("ins.pixnet-ad"), function( node ) {
                node.parentNode.parentNode.removeChild(node.parentNode);
            });
        }

        count++;
        if (30 < count) {
            clearInterval(AdHunterTrigger);
        }
    };
    pixnetAdHunter();
    AdHunterTrigger = setInterval(pixnetAdHunter, 200);
})();
