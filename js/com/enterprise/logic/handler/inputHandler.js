/**
 * Handles input
 *
 * @module com/enterprise/logic/handler/inputHandler
 * @requires com/enterprise/util/mathUtils
 */
define(["dojo/_base/declare", "com/enterprise/util/mathUtils"], function(declare, mathUtils) {

    var instance = null;

    var InputHandler = declare("com.enterprise/logic/handler/inputHandler", [], {

        /**
         * Function used to handle input
         *
         * @memberof module:com/enterprise/logic/handler/inputHandler#
         * @param {Object} input - the input to handle
         *
         * @returns {String} the result of handling
         */
        handle: function(input) {

            var retVal = "";
            var parsedNum = parseInt(input, 10);
            if (parsedNum) {
                parsedNum = Math.floor(parsedNum);

                for (var i = 1; i <= parsedNum; i++) {
                    if (mathUtils.modulo(i, 15) == 0) {
                        retVal += " FizzBuzz";
                    } else if (mathUtils.modulo(i, 3) == 0) {
                        retVal += " Fizz";
                    } else if (mathUtils.modulo(i, 5) == 0) {
                        retVal += " Buzz";
                    } else {
                        retVal += " " + i;
                    }
                }
            }

            return retVal;
        }
    });

    instance = new InputHandler();

    return instance;

});