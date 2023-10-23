export default function errorHandler(err, req, res, next) {
  let response = {
    status: err.status,
    message: err.message,
  };

  const env = process.env.NODE_ENV || "dev";
  const isDevelopment = env === "dev";
  if (isDevelopment) {
    console.log(err);
  }
  console.error(`${req.path} ${err.message}`);
  res.status(err.status || 500);
  res.json(response);
}