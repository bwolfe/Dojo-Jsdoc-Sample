/**
 * Handles Exceptions
 *
 * @module com/enterprise/logic/handler/exceptionHandler
 * @requires com/enterprise/util/mathUtils
 */
define(["dojo/_base/declare", "com/enterprise/util/mathUtils"], function(declare, mathUtils) {

    var instance = null;

    var ExceptionHandler = declare("com.enterprise/logic/handler/exceptionHandler", [], {

        /**
         * Function used to to handle an exception
         *
         * @memberof module:com/enterprise/logic/handler/exceptionHandler#
         * @param {Object} exception - the exception to handle
         *
         * @returns {Boolean} the result of handling
         */
        handle: function(exception) {
			var handled = true;
			return handled;
        }
    });

    instance = new ExceptionHandler();

    return instance;

});