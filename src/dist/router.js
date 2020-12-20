"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var vue_router_1 = require("vue-router");
var Aerodynamics_vue_1 = require("./components/04_product/Aerodynamics/Aerodynamics.vue");
var DrawingAirfoil_vue_1 = require("./components/04_product/DrawingAirfoil/DrawingAirfoil.vue");
vue_1["default"].use(vue_router_1["default"]);
exports["default"] = new vue_router_1["default"]({
    mode: 'history',
    routes: [
        {
            path: '/aerodynamics',
            name: 'aerodynamics',
            component: Aerodynamics_vue_1["default"]
        },
        {
            path: '/test',
            name: 'test',
            component: DrawingAirfoil_vue_1["default"]
        }
    ]
});
