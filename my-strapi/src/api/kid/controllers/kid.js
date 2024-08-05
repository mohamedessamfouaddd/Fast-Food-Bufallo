'use strict';

/**
 * kid controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::kid.kid',
  ({ strapi }) => ({
    async findOne(ctx) {
      const {id}=ctx.params
      const entitiy =await strapi.db.query(`api::kid.kid`).findOne({
        where:{slug : id},
        populate:["img","img2"]


      });
      const sanitizedEntity=await this.sanitizeOutput(entitiy,ctx);
      return this .transformResponse(sanitizedEntity);


  }}));

