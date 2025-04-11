exports.lambdaHandler = async (event, context) => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Hello World Omega333433!",
      }),
      //  i love tiktok 2
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Internal Server Error",
        error: err,
      }),
    };
  }
};
