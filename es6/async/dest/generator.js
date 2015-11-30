'use strict';

var fs = require("fs");

var readFile = function readFile(fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, function (err, data) {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
};

console.log(" ============= generator ========== ");

var gen = regeneratorRuntime.mark(function gen() {
    return regeneratorRuntime.wrap(function gen$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return readFile("./file111.txt");

                case 2:
                    _context.next = 4;
                    return readFile("./file2.txt");

                case 4:
                case "end":
                    return _context.stop();
            }
        }
    }, gen, this);
});

var foo = gen();

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = foo[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var content = _step.value;

        content.then(function (data) {
            console.log(data.toString());
        }).catch(function (err) {
            console.log(err);
        });
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}