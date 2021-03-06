define(['require', 'jquery', './lib', './controller/c1', './model/m1'], function (require, $, lib, controller, model) {
    /*
    var $ = require('jquery'),
        lib = require('./lib'),
        controller = require('./controller/c1'),
        model = require('./model/m1');
    */

    //A fabricated API to show interaction of
    //common and specific pieces.
    controller.setModel(model);
    $(function () {
        controller.render(lib.getBody());
    });
});
