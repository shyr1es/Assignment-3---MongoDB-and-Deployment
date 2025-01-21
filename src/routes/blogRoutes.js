const express = require('express');
const { createBlog, getAllBlogs, getBlogById, updateBlog, deleteBlog } = require('../controllers/blogController');
const router = express.Router(); //for defines our routes

// Define routes
router.post('/blogs', createBlog);    
router.get('/blogs', getAllBlogs);     
router.get('/blogs/:id', getBlogById); 
router.put('/blogs/:id', updateBlog);  
router.delete('/blogs/:id', deleteBlog); 

module.exports = router;
