'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Note:
// Looptar wasn't inspired by Loktar but it was later found to function
// the same as loktar, when drunk he likes to break things.

var Looptar = function () {
  // Allows multiple looptars to exist.

  function Looptar(opts) {
    _classCallCheck(this, Looptar);

    this.opts = Object.assign({
      // Break after 1000ms
      breakAfter: 1000
    }, opts);
    this.loops = {};
  }

  // One iteration
  // @TODO: Find if optimizing Date.now() is even possible


  _createClass(Looptar, [{
    key: 'iterates',
    value: function iterates(id) {
      this.loops[id] = this.loops[id] || {
        startedAt: Date.now()
      };

      var startedAt = this.loops[id].startedAt;
      var breakAfter = this.opts.breakAfter;

      var currentlyAt = Date.now();
      if (currentlyAt - startedAt > this.opts.breakAfter) {
        this._breakLoop();
      }
    }

    // This should be called after your loop exits
    // or bad thing will happen the next time it goes in.

  }, {
    key: 'exits',
    value: function exits(id) {
      this.loops[id] = null;
    }

    // Break the loop!

  }, {
    key: '_breakLoop',
    value: function _breakLoop() {
      throw new Error('Loop took too long to complete');
    }
  }]);

  return Looptar;
}();

exports.default = new Looptar();