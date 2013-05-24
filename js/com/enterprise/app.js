/**
 * This module prepares everything for all the Fizzing and Buzzing.
 *
 * @module com/enterprise/app
 */
define(["dojo/_base/declare", "dojo/_base/lang", "dojo/on", "dojo/dom", "com/enterprise/logic/handler/inputHandler"], function(declare, lang, on, dom, inputHandler) {

    var instance;

    var App = declare("com.enterprise.app", [], {

        intervalHandle: null,
        inputField: null,
        inputFieldId: "maxNumber",
        resultNodeId: "results",
        resultNode: null,
        DEFAULT_INTERVAL: 1000,
        inputValue: "",

        /**
         * Initializes all the things!
         *
         * @memberof module:com/enterprise/app#
         */
        init: function() {
            this.inputField = dom.byId(this.inputFieldId);
            this.resultNode = dom.byId(this.resultNodeId);
            this._bindGoButton();
        },

        /**
         * Binds a click handler to the go button
         *
         * @memberof module:com/enterprise/app#
         */
        _bindGoButton: function() {
            var goButton = dom.byId("submit");
            on(goButton, "click", lang.hitch(this, this._handleInputChange));
        },

        /**
         * Handles what happens when the go button is clicked.
         *
         * @memberof module:com/enterprise/app#
         */
        _handleInputChange: function() {
            if (this.inputValue !== this.inputField.value) {
                this.inputValue = this.inputField.value;
                //call the logic handler
                var result = inputHandler.handle(this.inputValue);
                this.resultNode.innerHTML = result;
            }
        }

    });

    instance = new App();

    return instance;

});