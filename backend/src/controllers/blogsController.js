import blogService from "../services/blogService.js";

const getAll = async (req, res, next) => {
  try {
    let response = await blogService.getAll();
    res.json(response);
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res, next) => {
  try {
    let blogId = req.params.id;
    let response = await blogService.getById(blogId);
    res.json(response);
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    let response = await blogService.create(req.body);
    res.json(response);
  } catch (err) {
    next(err);
  }
};

export default { getAll, getById, create };