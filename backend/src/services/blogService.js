import BlogRepository from "../repositories/blogsRepository.js";

const create = async (blog) => {
  return await BlogRepository.create(blog);
};

const getAll = async () => {
  return await BlogRepository.getAll();
};

const getById = async (blogId) => {
  return await BlogRepository.getById(blogId);
};

export default {
  create,
  getAll,
  getById
};