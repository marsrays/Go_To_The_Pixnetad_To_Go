(function(){
    if("mobile" !== pix.js_error_type){
        return;
    }
    var css = 'div.pop-ad-cover, #ad-mib, #main>div.header-ad, #main>div.article-body~div, #main>div.article-body>div.article-content-inner~div, div.comment-block~div { left: -9999px; position:absolute; display:none; }',
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');
    
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
    head.appendChild(style);
})();
