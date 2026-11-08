
function connectService(config) {
  if (!config || !config.API_URL) {
    return {
      status: "degraded",
      message: "Service unavailable: missing API_URL"
    };
  }

  return {
    status: "connected",
    message: "Connected successfully"
  };
}

module.exports = { connectService };
