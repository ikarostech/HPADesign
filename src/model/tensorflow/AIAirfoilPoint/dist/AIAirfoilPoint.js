"use strict";
exports.__esModule = true;
exports.AIAirfoilPoint = void 0;
var tf = require("@tensorflow/tfjs");
var AIAirfoilPoint = /** @class */ (function () {
    function AIAirfoilPoint(rawPoint) {
        this.point = rawPoint;
    }
    AIAirfoilPoint.prototype.getTFTensor = function () {
        return tf.reshape(this.point, [1, 161]);
    };
    return AIAirfoilPoint;
}());
exports.AIAirfoilPoint = AIAirfoilPoint;
