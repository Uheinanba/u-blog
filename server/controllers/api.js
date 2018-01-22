const models = require('../models');
const apiModel = models.api;
const config = require('../config');
let api = {};
/* cate  */
api.createCate = async ctx => {
  try {
    await apiModel.addCate(ctx.request.body);
    config.apiSuccess(ctx);
  } catch (error) {
    config.apiError(ctx, error);
  }
};

api.getCates = async ctx => {
  try {
    // ctx.request.body.version
    const data = await apiModel.getCates();
    config.apiSuccess(ctx, data);
  } catch (error) {
    config.apiError(ctx, error);
  }
};

/* apis */
api.getApis = async ctx => {
  const { id } = ctx.request.body;
  try {
    const { apis } = await models.api.getApis(id);
    config.apiSuccess(ctx, apis);
  } catch (error) {
    config.apiError(ctx, error);
  }
};

api.createApi = async ctx => {
  const { id, apis } = ctx.request.body;
  try {
    await models.api.addApi(id, apis);
    config.apiSuccess(ctx);
  } catch (error) {
    config.apiError(ctx, error);
  }
};

api.deleteApi = async ctx => {
  const { id, apiId } = ctx.request.body;
  try {
    await models.api.deleteApi(id, apiId);
    config.apiSuccess(ctx);
  } catch (error) {
    config.apiError(ctx, error);
  }
};

api.updateApi = async ctx => {
  const { id, apiId, data } = ctx.request.body;
  try {
    await models.api.updateApi(id, apiId, data);
    config.apiSuccess(ctx);
  } catch (error) {
    config.apiError(ctx, error);
  }
};

module.exports = api;
