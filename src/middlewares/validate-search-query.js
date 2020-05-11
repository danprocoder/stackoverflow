export default (req, res, next) => {
  const { query } = req.query;
  if (!query || !query.trim()) {
    return res.status(422).json({
      message: "A search query is required",
    });
  }

  next();
}
