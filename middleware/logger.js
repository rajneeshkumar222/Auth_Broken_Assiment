const requestLogger = (req, res, next) => {
  const start = Date.now();
  console.log(`${req.method} ${req.url}`);

  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.url} -> ${res.statusCode} (${duration}ms)`);
  });
//  Sir next was missing -> Fix sir 
  next(); 
};

module.exports = requestLogger;
