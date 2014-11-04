var fs = require("fs")

var insertCss = require("insert-css");
var css = fs.readFileSync( __dirname + "/css/style.css" )
insertCss(css);

var Layout = fs.readFileSync( __dirname + "/code/views/layout.html" )
var scroller = require("./code/controllers/scroller");

_3vot.el.innerHTML = Layout;

new cbpScroller( document.getElementById( 'scroll-scroller' ) );
new WOW().init();