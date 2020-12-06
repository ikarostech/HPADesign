"use strict";
exports.__esModule = true;
var tf = require("@tensorflow/tfjs");
var default_1 = /** @class */ (function () {
    function default_1(rawPoint) {
        this.point = rawPoint;
    }
    default_1.prototype.getTFShape = function () {
        return tf.reshape(this.point, [1, 161]);
    };
    return default_1;
}());
exports["default"] = default_1;
