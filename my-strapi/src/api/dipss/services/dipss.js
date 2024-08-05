'use strict';

/**
 * dipss service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dipss.dipss');
