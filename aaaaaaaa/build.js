({
    baseUrl : ".",
    name : 'main',
    mainConfigFile : "main.js",
    out : "main-built.js",
    findNestedDependencies : true,
    inlineText : true,
    stubModules: ['text'],
    preserveLicenseComments: false,
    optimizeAllPluginResources: true,
    removeCombined: true,
    optimize: "uglify",
    //exclude: ['jquery','backbone']
})
