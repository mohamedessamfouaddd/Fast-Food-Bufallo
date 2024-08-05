'use strict';

/**
 * keto router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::keto.keto');
