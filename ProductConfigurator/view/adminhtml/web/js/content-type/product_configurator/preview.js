define([
  'Magento_PageBuilder/js/content-type/preview',
], function (PreviewBase) {
    'use strict';
    var $super;

    /**
     * Product Configurator content type preview class
     *
     * @param parent
     * @param config
     * @param stageId
     * @constructor
     */
    function Preview(parent, config, stageId) {
        PreviewBase.call(this, parent, config, stageId);
    }

    Preview.prototype = Object.create(PreviewBase.prototype);
    $super = PreviewBase.prototype;

    /**
     * Bind any events required for the content type to function
     */
    Preview.prototype.bindEvents = function() {
        PreviewBase.prototype.bindEvents.call(this);
        
        // Listen for marketing SKU changes
        this.contentType.dataStore.subscribe('data-marketingsku', this.onMarketingSkuChange.bind(this));
    };

    /**
     * Handle marketing SKU changes
     *
     * @param value
     */
    Preview.prototype.onMarketingSkuChange = function(value) {
        console.log('Marketing SKU updated:', value);
    };

    /**
     * Modify the options returned by the content type
     *
     * @returns {*}
     */
    Preview.prototype.retrieveOptions = function retrieveOptions() {
        var options = $super.retrieveOptions.call(this, arguments);

        // Keep only duplicate, move, and delete options
        var allowedOptions = ['duplicate', 'move', 'remove'];
        Object.keys(options).forEach(function(key) {
            if (!allowedOptions.includes(key)) {
                delete options[key];
            }
        });

        // Update tooltips
        options.duplicate.title = "Duplicate";
        options.move.title = "Move";
        options.remove.title = "Delete";

        return options;
    };
    return Preview;
});
