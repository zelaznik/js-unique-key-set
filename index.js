'use strict';

var getID = function () {
    var id = 0;
    function getID() {
        return id++;
    }
    return getID;
}();

function define(obj, key, val, prefix) {
    prefix = prefix ? prefix + '::' : '';
    var withId = '' + prefix + val + '::' + getID();
    Object.defineProperty(obj, key, {
        get: function get() {
            return withId;
        },
        iterable: true
    });
}

function uniqueKeySet() {
    var a = arguments,
        params = a[a.length - 1],
        prefix = a[a.length - 2];

    var obj = {};
    for (var key in params) {
        var val = params[key] || key;
        define(obj, key, val, prefix);
    }
    return obj;
}

module.exports = uniqueKeySet;