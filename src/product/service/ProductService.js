const {
  DocumentClient,
  getTableName
} = require("../../common/repository/Repository");

const logger = require("../../common/utils/Logger");

const modelName = "Product";

const createProduct = async ({ productPayload }) => {
  try {
    await DocumentClient.put({
      TableName: getTableName({ modelName }),
      Item: productPayload
    }).promise();
  } catch (error) {
    logger.error(error);
    throw error;
  }
};

const getProduct = async ({ Id }) => {
  try {
    const response = await DocumentClient.get({
      TableName: getTableName({ modelName }),
      Key: {
        Id
      }
    }).promise();

    return response;
  } catch (error) {
    logger.error(error);
    throw error;
  }
};

module.exports = { createProduct, getProduct };