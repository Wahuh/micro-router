'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Router = function Router() {
    _classCallCheck(this, Router);

    this.routes = [];
    this.root = '/';
};

exports.default = Router;