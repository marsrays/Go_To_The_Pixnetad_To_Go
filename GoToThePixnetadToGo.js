(function(){
    var AdHunterTrigger = 0;
    var count = 0;
    var pixnetAdHunter = function () {
		if("mobile" !== pix.js_error_type){
			clearInterval(AdHunterTrigger);
			return;
		}

		if(0 < jQuery("div.article-body").size()){
		/* 移除你不會有興趣的其他文章提示*/
			jQuery("#recommend-tools").remove();
		/* 移除全版廣告遮罩 &lt; - 這種廣告真的很機掰 */
			jQuery("div.pop-ad-cover").remove();
			jQuery("#scupio_interstitialad").remove();
			jQuery("#scupio_interstitial").remove();
		/* 移除文章上下的廣告*/
			jQuery("div.header-ad").remove();
		/* 移除手機留言區後難看的廣告欄位 */
			jQuery("div.pix-related-post").remove();
			jQuery("div.article-ad").remove();
			jQuery("div.hot-articles").remove();
		/* 移除訂房訂票的廣告 */
			jQuery("div.octopus").remove();
			jQuery("#hotels-searchbox").remove();
		}
		
		/* 後置載入廣告要持續追殺 */
		if(0 < jQuery("ins.pixnet-ad").size() && 0 < jQuery("div.article-body").size()){
			jQuery("ins.pixnet-ad").parent().remove();
		}

		count++;
		if (30 < count) {
		    clearInterval(AdHunterTrigger);
		}
    };
    pixnetAdHunter();
    AdHunterTrigger = setInterval(pixnetAdHunter, 300);
})();
