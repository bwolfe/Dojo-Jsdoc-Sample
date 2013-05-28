//>>pure-amd

/**
 * This is a basic mixin
 *
 * @mixin com/enterprise/common/_validationMixin
 */
define([
    "dojo/_base/declare"
], function (declare)
{

    "use strict";

    return declare("com.enterprise.common._validationMixin", [], {

            /**
             * Validate something important
             *
             * @memberof com/enterprise/common/_validationMixin#
             * @private
             */
            _validate : function ()
            {
				// wow... great validation going on here
                return true;
            }
        });

});