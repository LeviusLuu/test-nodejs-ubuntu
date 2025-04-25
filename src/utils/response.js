export const successResponse = (res, message, data = null, status = 200) => {
  return res.status(status).json({
    success: true,
    message,
    data,
    error: null,
  });
};

export const errorResponse = (res, message, error = null, status = 400) => {
  return res.status(status).json({
    success: false,
    message,
    data: null,
    error,
  });
};

export const exceptResponse = (res) => {
  return res.status(500).json({
    success: false,
    message: "Internal server error",
    data: null,
    error: null,
  });
};
