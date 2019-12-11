const _ = require("lodash");
const { API_PATH_PARAM_ID } = require("../../common/utils/Constants");
const {
  getPathParameters,
  parseApiBody,
  buildSuccessCreateResponse,
  buildInternalErrorFailureResponse
} = require("../../common/utils/Utils");
const logger = require("../../common/utils/Logger");

const { getById, create } = require("..");

const getByIdHandler = async event => {
  logger.info(event);
  try {
    const id = _.get(getPathParameters(event), API_PATH_PARAM_ID);

    const response = await getById({ id });

    return buildSuccessCreateResponse(response);
  } catch (error) {
    logger.error(error);
    return buildInternalErrorFailureResponse(error.message);
  }
};

const createHandler = async event => {
  logger.info(event);

  try {
    const payload = parseApiBody(event);

    const response = await create({ productPayload: payload });
    logger.info(response);
    return buildSuccessCreateResponse(response);
  } catch (error) {
    logger.error(error);
    return buildInternalErrorFailureResponse(error.message);
  }
};

module.exports = { getByIdHandler, createHandler };
