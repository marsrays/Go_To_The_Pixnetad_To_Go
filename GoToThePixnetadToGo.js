(function(){
    var css = 'div.comment-block~div { display: none; }',
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');
    
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
    head.appendChild(style);
})();
