define([
    'Magento_PageBuilder/js/content-type/preview-factory',
    'Magento_PageBuilder/js/content-type/master-factory',
    'Magento_PageBuilder/js/content-type/observable-updater-factory',
    'Magento_PageBuilder/js/config',
], function (previewFactory, masterFactory, observableUpdaterFactory, config) {
    'use strict';

    return function (contentType) {
        var preview = previewFactory(contentType, 'sg_product_configurator', function () {
            return true;
        });
        var master = masterFactory(contentType, 'sg_product_configurator');
        var observableUpdater = observableUpdaterFactory(contentType);

        return {
            preview: preview,
            master: master,
            observableUpdater: observableUpdater
        };
    };
});