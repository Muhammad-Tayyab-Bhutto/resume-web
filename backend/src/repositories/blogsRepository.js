import Blog from "../models/blogs.js";

class BlogRepository {
  static async create(blog) {
    return await Blog.create(blog);
  }
  static async getAll() {
    return await Blog.find({});
  }
  static async getById(blogId) {
    return await Blog.findById(blogId);
  }
}

export default  BlogRepository;