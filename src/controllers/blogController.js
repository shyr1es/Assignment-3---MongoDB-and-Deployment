const Blog = require('../models/Blog');

// Create a new blog
exports.createBlog = async (req, res) => {
    try {
        const { title, body, author } = req.body;
        if (!title || !body) {
            return res.status(400).json({ message: 'Title and body are required' }); //400 is error when user input is wrong
        }

        const newBlog = new Blog({ title, body, author });
        await newBlog.save();
        res.status(201).json(newBlog);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

// Get all blogs
exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs); //200 is success
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

// Get a blog by ID
exports.getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json(blog);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message }); //500 is wrong on server sideS
    }
};

// Update a blog
exports.updateBlog = async (req, res) => {
    try {
        const { title, body, author } = req.body;
        const blog = await Blog.findByIdAndUpdate(req.params.id, { title, body, author }, { new: true });
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json(blog);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

// Delete a blog
exports.deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};
