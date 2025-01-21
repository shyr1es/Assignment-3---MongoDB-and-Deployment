const express = require('express');
const { createBlog, getAllBlogs, getBlogById, updateBlog, deleteBlog } = require('../controllers/blogController');
const router = express.Router();

// Define routes
router.post('/blogs', createBlog);      // Create a blog
router.get('/blogs', getAllBlogs);     // Get all blogs
router.get('/blogs/:id', getBlogById); // Get a blog by ID
router.put('/blogs/:id', updateBlog);  // Update a blog by ID
router.delete('/blogs/:id', deleteBlog); // Delete a blog by ID

module.exports = router;
