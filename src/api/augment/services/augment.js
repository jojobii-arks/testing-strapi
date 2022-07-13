'use strict';

/**
 * augment service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::augment.augment');
