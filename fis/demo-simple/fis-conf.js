// fis.match('::packager', {
//   spriter: fis.plugin('csssprites')
// });

fis.match('*.{js,css,png,jpg}', {
  useHash: true
});

fis.match("*.css", {
    optimizer: fis.plugin("clean-css"),
    useSprite: true
});

fis.match('*.js', {
  optimizer: fis.plugin('uglify-js')
});

fis.match("app.js", {
    //url: "/aaa/bbb/cc$0",
    release: "/js/$0"
});

fis.media('prod').match("*.js", {
    optimizer: fis.plugin('uglify-js')
});

fis.media('prod').match("*", {
    deploy: fis.plugin("http-push", {
        to: "/var/www_php/fis",
        receiver: "http://php.jaylee.cc/upload.php",
    })
});

fis.match("::package", {
    spriter: fis.plugin('csssprites')
});

fis.match("*", {
    deploy: fis.plugin("local-deliver", {
        to: "../built"
    })    
});

fis.media("qa").match("*", {
    deploy: fis.plugin("local-deliver", {
        to: "../qa"
    })    
});


// fis.match('*.css', {
//   useSprite: true,
//   optimizer: fis.plugin('clean-css')
// });

// fis.match('*.png', {
//   optimizer: fis.plugin('png-compressor')
// });

// rm -rf ../output && fis3 release prod  -d ../output
// fis3 inspect


