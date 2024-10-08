// cacheMiddleware.js
const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 86400 }); // Cache for 1 day

const cacheMiddleware = (duration) => (req, res, next) => {
  const key = req.originalUrl || req.url;
  const cachedResponse = cache.get(key);
  if (cachedResponse) {
    res.send(cachedResponse);
    return;
  } else {
    res.originalJson = res.json;
    res.json = (body) => {
      res.originalJson(body);
      cache.set(key, body, duration);
    };
    next();
  }
};

module.exports = { cacheMiddleware, cache };