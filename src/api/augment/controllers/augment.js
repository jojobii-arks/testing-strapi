'use strict';

/**
 *  augment controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::augment.augment');
