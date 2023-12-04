import express from 'express';
import { getAllBlogs, addBlog, updateBlog, getById, deleteBlog, getByUserId } from '../controllers/blog-controller';

const blogRouter = express.Router();

blogRouter.get('/', getAllBlogs);
blogRouter.get('/:id', getById);
blogRouter.get('/user/:id', getByUserId);
blogRouter.post('/add', addBlog);
blogRouter.put('/update/:id', updateBlog);
blogRouter.delete('/:id', deleteBlog);

export default blogRouter;
