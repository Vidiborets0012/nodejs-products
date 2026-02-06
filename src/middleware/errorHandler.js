// eslint-disable-next-line no-unused-vars
export const errorHandler = (err, req, res, next) => {
  console.error('Error details:', err);
  res.status(500).json({
    message: err.message || 'Internal Server Error',
  });
};
