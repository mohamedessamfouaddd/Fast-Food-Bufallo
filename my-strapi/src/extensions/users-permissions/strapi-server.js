// @ts-nocheck
const { prefix } = require("../../api/appetizerss/routes/appetizerss");

module.exports = (/** @type {{ controllers: { user: { updateMe: (ctx: any) => any; update: (arg0: any) => any; }; }; routes: { [x: string]: { routes: { method: string; path: string; handler: string; }[]; }; }; }} */ plugin) => {
  plugin.controllers.user.updateMe = (ctx) => {
      ctx.params.id = ctx.state.user.id;
      return plugin.controllers.user.update(ctx);
  }

  plugin.routes['content-api'].routes.push({
      method: 'PUT',
      path: '/user/me',
      handler: 'user.updateMe',
      config:{
        prefix:"",
        policies:[]
      }
  });

  return plugin;
}
