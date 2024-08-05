'use strict';

/**
 * chikenss service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::chikenss.chikenss');
