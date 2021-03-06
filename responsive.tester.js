var ResponsiveTester = (function(){

    var api,

        div = document.createElement('div' ),

        iframe = document.createElement('iframe' ),

        old,

        i = 0,

        list = ['<ul>'],

        styles = '&shy;<style>#responsive-resizer{background:#444;-ms-border-radius:0 0 0 4px;-moz-border-radius:0 0 0 4px;-o-border-radius:0 0 0 4px;-webkit-border-radius:0 0 0 4px;border-radius:0 0 0 4px;border-bottom:1px solid #666;color:#fff;font:10px/10px Verdana;height:30px;padding:0;position:fixed;right:0;top:0;width:230px;z-index:100000000000;}#responsive-resizer a{color:#fff;display:block;line-height:29px;padding:0 4px;position:absolute;top:0;right:10px;text-decoration: none;}#responsive-resizer ul{border-right:1px solid #ccc;height:30px;line-height:30px;margin:0 50px 0 0;padding:0;position: relative;overflow: hidden;}#responsive-resizer ul li{background:#333;padding:0 6px;position: relative;}#responsive-resizer ul li:last-child{-ms-border-radius:0 0 4px 4px;-moz-border-radius:0 0 4px 4px;-o-border-radius:0 0 4px 4px;-webkit-border-radius:0 0 4px 4px;border-radius:0 0 4px 4px;}#responsive-resizer ul li span{position:absolute;right:6px;}#responsive-resizer ul li.selected{background:#333;left:0;position:absolute;right:0;top:0;z-index:1000000001;}#responsive-resizer ul:hover{height:auto;}#responsive-resizer ul:hover li.selected{position: static;}#responsive-resizer ul:hover li{display:block;}#responsive-resizer ul li:hover{background:#666;}#responsive-iframe{border:3px solid yellow;left:0;position:absolute;margin:auto;right:0;top:20px;z-index:1000000001;}#responsive-overlay{background-color:#282828;bottom:0;left:0;position:fixed;right:0;top:0;z-index:1000000000;}</style>',

        formats = [
            { 'name': 'Mobile', dimensions: [320, 480] },
            { 'name': 'Mobile Landscape', dimensions: [480, 320] },
            { 'name': 'Small Tablet', dimensions: [460, 640] },
            { 'name': 'Tablet Portrait', dimensions: [768, 1024] },
            { 'name': 'Tablet Landscape', dimensions: [1024, 768] },
            { 'name': 'Desktop', dimensions: [1200, 800] }
        ];

    for( i; i < formats.length; i++){
        list.push( '<li onclick=&quot;javascript:ResponsiveTester.set('+formats[i].dimensions[0]+', '+formats[i].dimensions[1]+', this)&quot;>'+formats[i].name+'<span>'+formats[i].dimensions[0]+' x '+formats[i].dimensions[1]+'</span></li>');
    }
    list.push('</ul>');
    list.push('<a href=&quot;#&quot; onclick=&quot;javascript:ResponsiveTester.reset()&quot;>reset</a>');
    list.push(styles);

    div.id = 'responsive-resizer';
    div.innerHTML = list.join('');



    iframe.name = 'responsive-iframe';
    iframe.id = 'responsive-iframe';
    iframe.src = window.location + '?';
    iframe.frameBorder = '0';
    iframe.sandbox = 'allow-same-origin allow-form';

    document.body.appendChild( div );

    api = {
        set: function( width, height, el ){

            if(!document.getElementById('responsive-iframe')) {
                var div = document.createElement('div' );
                div.id = 'responsive-overlay';
                document.body.appendChild( div );
                document.body.appendChild( iframe );
            }

            if(old){
                old.className = '';
            }
            el.className = 'selected';
            old = el;

            iframe.width = width;
            iframe.height = height;
        },
        reset: function(){
            document.body.removeChild(document.getElementById('responsive-iframe' ));
            document.body.removeChild(document.getElementById('responsive-overlay' ));

            if(old){
                old.className = '';
            }

            return false;
        }
    };

    return api;
})();