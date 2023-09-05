"use strict";

/**
 * outnow service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::outnow.outnow");
