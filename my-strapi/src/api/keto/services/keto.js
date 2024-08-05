'use strict';

/**
 * keto service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::keto.keto');
