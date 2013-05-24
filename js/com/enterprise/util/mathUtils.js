/**
 * Utility module for mathematical operations.
 *
 * @module com/enterprise/util/mathUtils
 */
define(["dojo/_base/declare"], function(declare) {

    var instance = null;

    var MathUtils = declare("com.enterprise/util/mathUtils", [], {

        /**
         * Performs a modulo operation on two inputs
         *
         * @memberof module:com/enterprise/util/mathUtils#
         *
         * @param {Number} dividend - the dividend
         * @param {Number} divisor - the divisor
         *
         * @returns {String} the result of the modulo operator
         */
        modulo: function(dividend, divisor) {
            return dividend % divisor;
        }
    });

    instance = new MathUtils();

    return instance;

});