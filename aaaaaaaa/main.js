require.config({
    paths : {
        jquery : 'jquery-2.1.4',
        backbone: 'backbone-1.1.2',
        underscore: 'underscore-1.8.2'
    },
    shim : {
        underscore: {exports: '_'},
        backbone: {deps: ['underscore'], exports: 'Backbone'}
    },
    map : {
        '*' : {
            'text' : 'text' // real path tot text.js plugin
        }
    }
});

require(['jquery', 'backbone', 'text!./partials/view.html'], function($, Backbone, view) {
    console.log('Type of $: ' + typeof $);
    console.log('Type of Backbone: ' + typeof Backbone);
    var element = $(view);
    $('body').append(element);
});