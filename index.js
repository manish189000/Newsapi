// // // // // // // // const express = require("express");
// // // // // // // // const mongoose = require("mongoose");
// // // // // // // // const socketIo = require("socket.io");
// // // // // // // // const http = require("http");

// // // // // // // // const app = express();
// // // // // // // // const server = http.createServer(app);
// // // // // // // // const io = socketIo(server); // Initialize socket.io

// // // // // // // // // MongoDB Connection URI
// // // // // // // // const mongoURI = "mongodb+srv://manish:manish@textimage.51yzs.mongodb.net/?retryWrites=true&w=majority&appName=textimage";

// // // // // // // // // Mongoose Model for NewsItem
// // // // // // // // const NewsItem = mongoose.model("NewsItem", new mongoose.Schema({
// // // // // // // //   title: String,
// // // // // // // //   date: String,
// // // // // // // //   description: String,
// // // // // // // //   link: String,
// // // // // // // // }));

// // // // // // // // // Connect to MongoDB
// // // // // // // // mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
// // // // // // // //   .then(() => console.log("MongoDB connected"))
// // // // // // // //   .catch((err) => console.error("MongoDB connection error:", err));

// // // // // // // // // Middleware to parse incoming JSON requests
// // // // // // // // app.use(express.json());

// // // // // // // // // Serve static files (if needed)
// // // // // // // // app.use(express.static("public"));

// // // // // // // // // REST API to fetch all news items
// // // // // // // // app.get("/api/news", async (req, res) => {
// // // // // // // //   try {
// // // // // // // //     const newsItems = await NewsItem.find();
// // // // // // // //     res.json(newsItems);
// // // // // // // //   } catch (error) {
// // // // // // // //     res.status(500).send("Error fetching news items");
// // // // // // // //   }
// // // // // // // // });

// // // // // // // // // API to add a new news item
// // // // // // // // app.post("/api/news", async (req, res) => {
// // // // // // // //   const { title, date, description, link } = req.body;
// // // // // // // //   const newNewsItem = new NewsItem({ title, date, description, link });

// // // // // // // //   try {
// // // // // // // //     const savedNewsItem = await newNewsItem.save();
// // // // // // // //     io.emit("newNewsItem", savedNewsItem); // Emit real-time updates
// // // // // // // //     res.status(201).json(savedNewsItem);
// // // // // // // //   } catch (error) {
// // // // // // // //     res.status(500).send("Error saving news item");
// // // // // // // //   }
// // // // // // // // });

// // // // // // // // // Socket.IO real-time communication
// // // // // // // // io.on("connection", (socket) => {
// // // // // // // //   console.log("New client connected");

// // // // // // // //   // Listen for events (if needed) and disconnect
// // // // // // // //   socket.on("disconnect", () => {
// // // // // // // //     console.log("Client disconnected");
// // // // // // // //   });
// // // // // // // // });

// // // // // // // // // Start server
// // // // // // // // const PORT = process.env.PORT || 5000;
// // // // // // // // server.listen(PORT, () => {
// // // // // // // //   console.log(`Server is running on port ${PORT}`);
// // // // // // // // });

// // // // // // // const express = require("express");
// // // // // // // const mongoose = require("mongoose");
// // // // // // // const cors = require("cors");

// // // // // // // const app = express();
// // // // // // // const PORT = 5000;

// // // // // // // // MongoDB Connection URI
// // // // // // // const mongoURI = "mongodb+srv://manish:manish@textimage.51yzs.mongodb.net/?retryWrites=true&w=majority&appName=textimage";

// // // // // // // // Connect to MongoDB
// // // // // // // mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
// // // // // // //   .then(() => console.log("MongoDB connected"))
// // // // // // //   .catch((err) => console.error("MongoDB connection error:", err));

// // // // // // // // Middleware
// // // // // // // app.use(cors());
// // // // // // // app.use(express.json());

// // // // // // // // Schema and Model
// // // // // // // const NewsItemSchema = new mongoose.Schema({
// // // // // // //   title: String,
// // // // // // //   date: String,
// // // // // // //   description: String,
// // // // // // //   link: String,
// // // // // // // });

// // // // // // // const NewsItem = mongoose.model("NewsItem", NewsItemSchema);

// // // // // // // // REST API Endpoints

// // // // // // // // Get all news
// // // // // // // app.get("/api/news", async (req, res) => {
// // // // // // //   try {
// // // // // // //     const newsItems = await NewsItem.find();
// // // // // // //     res.json(newsItems);
// // // // // // //   } catch (err) {
// // // // // // //     res.status(500).send("Error fetching news items");
// // // // // // //   }
// // // // // // // });

// // // // // // // // Add a new news item
// // // // // // // app.post("/api/news", async (req, res) => {
// // // // // // //   const { title, date, description, link } = req.body;
// // // // // // //   const newNewsItem = new NewsItem({ title, date, description, link });

// // // // // // //   try {
// // // // // // //     const savedNewsItem = await newNewsItem.save();
// // // // // // //     res.status(201).json(savedNewsItem);
// // // // // // //   } catch (err) {
// // // // // // //     res.status(500).send("Error saving news item");
// // // // // // //   }
// // // // // // // });

// // // // // // // // Start server
// // // // // // // app.listen(PORT, () => {
// // // // // // //   console.log(`Server is running on port ${PORT}`);
// // // // // // // });



// // // // // // const express = require("express");
// // // // // // const mongoose = require("mongoose");
// // // // // // const cors = require("cors");

// // // // // // const app = express();
// // // // // // const PORT = 5000;

// // // // // // // MongoDB Connection URI
// // // // // // const mongoURI = "mongodb+srv://manish:manish@textimage.51yzs.mongodb.net/?retryWrites=true&w=majority&appName=textimage";

// // // // // // // Connect to MongoDB
// // // // // // mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
// // // // // //   .then(() => console.log("MongoDB connected"))
// // // // // //   .catch((err) => console.error("MongoDB connection error:", err));

// // // // // // // Middleware
// // // // // // app.use(cors());
// // // // // // app.use(express.json());

// // // // // // // Schema and Model
// // // // // // const NewsItemSchema = new mongoose.Schema({
// // // // // //   title: String,
// // // // // //   date: String,
// // // // // //   description: String,
// // // // // //   link: String,
// // // // // // });

// // // // // // const NewsItem = mongoose.model("NewsItem", NewsItemSchema);

// // // // // // // REST API Endpoints

// // // // // // // Get all news
// // // // // // app.get("/api/news", async (req, res) => {
// // // // // //   try {
// // // // // //     const newsItems = await NewsItem.find();
// // // // // //     res.json(newsItems);
// // // // // //   } catch (err) {
// // // // // //     res.status(500).send("Error fetching news items");
// // // // // //   }
// // // // // // });

// // // // // // // Add a new news item
// // // // // // app.post("/api/news", async (req, res) => {
// // // // // //   const { title, date, description, link } = req.body;
// // // // // //   const newNewsItem = new NewsItem({ title, date, description, link });

// // // // // //   try {
// // // // // //     const savedNewsItem = await newNewsItem.save();
// // // // // //     res.status(201).json(savedNewsItem);
// // // // // //   } catch (err) {
// // // // // //     res.status(500).send("Error saving news item");
// // // // // //   }
// // // // // // });

// // // // // // // Start server
// // // // // // app.listen(PORT, () => {
// // // // // //   console.log(`Server is running on port ${PORT}`);
// // // // // // });



// // // // // const express = require("express");
// // // // // const mongoose = require("mongoose");
// // // // // const cors = require("cors");
// // // // // const multer = require("multer");
// // // // // const path = require("path");

// // // // // const app = express();
// // // // // const PORT = 5000;

// // // // // // MongoDB Connection URI
// // // // // const mongoURI = "mongodb+srv://manish:manish@textimage.51yzs.mongodb.net/?retryWrites=true&w=majority&appName=textimage";

// // // // // // Connect to MongoDB
// // // // // mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
// // // // //   .then(() => console.log("MongoDB connected"))
// // // // //   .catch((err) => console.error("MongoDB connection error:", err));

// // // // // // Middleware
// // // // // app.use(cors());
// // // // // app.use(express.json());
// // // // // app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // // // // // Multer setup
// // // // // const storage = multer.diskStorage({
// // // // //   destination: (req, file, cb) => {
// // // // //     cb(null, 'uploads/');
// // // // //   },
// // // // //   filename: (req, file, cb) => {
// // // // //     cb(null, `${Date.now()}-${file.originalname}`);
// // // // //   }
// // // // // });

// // // // // const upload = multer({ storage });

// // // // // // Schema and Model
// // // // // const NewsItemSchema = new mongoose.Schema({
// // // // //   title: String,
// // // // //   date: String,
// // // // //   description: String,
// // // // //   link: String,
// // // // //   image: String,
// // // // // });

// // // // // const NewsItem = mongoose.model("NewsItem", NewsItemSchema);

// // // // // // REST API Endpoints

// // // // // // Get all news
// // // // // app.get("/api/news", async (req, res) => {
// // // // //   try {
// // // // //     const newsItems = await NewsItem.find();
// // // // //     res.json(newsItems);
// // // // //   } catch (err) {
// // // // //     res.status(500).send("Error fetching news items");
// // // // //   }
// // // // // });

// // // // // // Add a new news item with file upload
// // // // // app.post("/api/news", upload.single("image"), async (req, res) => {
// // // // //   const { title, date, description, link } = req.body;
// // // // //   const image = req.file ? `/uploads/${req.file.filename}` : "";

// // // // //   const newNewsItem = new NewsItem({ title, date, description, link, image });

// // // // //   try {
// // // // //     const savedNewsItem = await newNewsItem.save();
// // // // //     res.status(201).json(savedNewsItem);
// // // // //   } catch (err) {
// // // // //     res.status(500).send("Error saving news item");
// // // // //   }
// // // // // });

// // // // // // Start server
// // // // // app.listen(PORT, () => {
// // // // //   console.log(`Server is running on port ${PORT}`);
// // // // // });


// // // // const express = require("express");
// // // // const mongoose = require("mongoose");
// // // // const cors = require("cors");
// // // // const multer = require("multer");
// // // // const path = require("path");
// // // // const fs = require("fs");

// // // // const app = express();
// // // // const PORT = 5000;

// // // // // MongoDB Connection URI
// // // // const mongoURI = "mongodb+srv://manish:manish@textimage.51yzs.mongodb.net/?retryWrites=true&w=majority&appName=textimage";

// // // // // Connect to MongoDB
// // // // mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
// // // //   .then(() => console.log("MongoDB connected"))
// // // //   .catch((err) => console.error("MongoDB connection error:", err));

// // // // // Middleware
// // // // app.use(cors());
// // // // app.use(express.json());
// // // // app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // // // // Multer setup
// // // // const storage = multer.diskStorage({
// // // //   destination: (req, file, cb) => {
// // // //     cb(null, 'uploads/');
// // // //   },
// // // //   filename: (req, file, cb) => {
// // // //     cb(null, `${Date.now()}-${file.originalname}`);
// // // //   }
// // // // });

// // // // const upload = multer({ storage });

// // // // // Schema and Model
// // // // const NewsItemSchema = new mongoose.Schema({
// // // //   title: String,
// // // //   date: String,
// // // //   description: String,
// // // //   link: String,
// // // //   image: String,
// // // // });

// // // // const NewsItem = mongoose.model("NewsItem", NewsItemSchema);

// // // // // REST API Endpoints

// // // // // Get all news
// // // // app.get("/api/news", async (req, res) => {
// // // //   try {
// // // //     const newsItems = await NewsItem.find();
// // // //     res.json(newsItems);
// // // //   } catch (err) {
// // // //     res.status(500).send("Error fetching news items");
// // // //   }
// // // // });

// // // // // Add a new news item
// // // // app.post("/api/news", upload.single("image"), async (req, res) => {
// // // //   const { title, date, description, link } = req.body;
// // // //   const image = req.file ? `/uploads/${req.file.filename}` : "";

// // // //   const newNewsItem = new NewsItem({ title, date, description, link, image });

// // // //   try {
// // // //     const savedNewsItem = await newNewsItem.save();
// // // //     res.status(201).json(savedNewsItem);
// // // //   } catch (err) {
// // // //     res.status(500).send("Error saving news item");
// // // //   }
// // // // });

// // // // // Update a news item
// // // // app.put("/api/news/:id", upload.single("image"), async (req, res) => {
// // // //   const { id } = req.params;
// // // //   const { title, date, description, link } = req.body;

// // // //   try {
// // // //     const newsItem = await NewsItem.findById(id);
// // // //     if (!newsItem) {
// // // //       return res.status(404).send("News item not found");
// // // //     }

// // // //     // If a new image is uploaded, delete the old one
// // // //     if (req.file) {
// // // //       if (newsItem.image) {
// // // //         fs.unlinkSync(path.join(__dirname, newsItem.image));
// // // //       }
// // // //       newsItem.image = `/uploads/${req.file.filename}`;
// // // //     }

// // // //     newsItem.title = title || newsItem.title;
// // // //     newsItem.date = date || newsItem.date;
// // // //     newsItem.description = description || newsItem.description;
// // // //     newsItem.link = link || newsItem.link;

// // // //     const updatedNewsItem = await newsItem.save();
// // // //     res.json(updatedNewsItem);
// // // //   } catch (err) {
// // // //     res.status(500).send("Error updating news item");
// // // //   }
// // // // });

// // // // // Delete a news item
// // // // app.delete("/api/news/:id", async (req, res) => {
// // // //   const { id } = req.params;

// // // //   try {
// // // //     const newsItem = await NewsItem.findByIdAndDelete(id);
// // // //     if (!newsItem) {
// // // //       return res.status(404).send("News item not found");
// // // //     }

// // // //     // Delete the associated image
// // // //     if (newsItem.image) {
// // // //       fs.unlinkSync(path.join(__dirname, newsItem.image));
// // // //     }

// // // //     res.json({ message: "News item deleted" });
// // // //   } catch (err) {
// // // //     res.status(500).send("Error deleting news item");
// // // //   }
// // // // });

// // // // // Start server
// // // // app.listen(PORT, () => {
// // // //   console.log(`Server is running on port ${PORT}`);
// // // // });



// // // const express = require('express');
// // // const mongoose = require('mongoose');
// // // const multer = require('multer');
// // // const cors = require('cors');
// // // const path = require('path');
// // // const News = require('./models/newsModel');

// // // // Initialize Express app
// // // const app = express();
// // // const port = 5000;

// // // // Middleware
// // // app.use(express.json());
// // // app.use(cors());

// // // // Configure file upload (Multer)
// // // const storage = multer.diskStorage({
// // //   destination: (req, file, cb) => {
// // //     cb(null, 'uploads/');
// // //   },
// // //   filename: (req, file, cb) => {
// // //     cb(null, Date.now() + path.extname(file.originalname));
// // //   },
// // // });

// // // const upload = multer({ storage: storage });

// // // // Connect to MongoDB
// // // mongoose.connect('mongodb+srv://manish:manish@textimage.51yzs.mongodb.net/?retryWrites=true&w=majority&appName=textimage', {
// // //   useNewUrlParser: true,
// // //   useUnifiedTopology: true,
// // // })
// // //   .then(() => console.log('Connected to MongoDB'))
// // //   .catch((err) => console.log('MongoDB connection error:', err));

// // // // Serve static files (uploaded images)
// // // app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // // // News schema and model
// // // const newsSchema = new mongoose.Schema({
// // //   title: String,
// // //   date: String,
// // //   description: String,
// // //   link: String,
// // //   image: String,
// // // });

// // // const News = mongoose.model('News', newsSchema);

// // // // Routes
// // // // Get all news items
// // // app.get('/api/news', async (req, res) => {
// // //   try {
// // //     const news = await News.find();
// // //     res.json(news);
// // //   } catch (err) {
// // //     res.status(500).json({ error: 'Failed to fetch news' });
// // //   }
// // // });

// // // // Add new news item
// // // app.post('/api/news', upload.single('image'), async (req, res) => {
// // //   try {
// // //     const { title, date, description, link } = req.body;
// // //     const image = req.file ? `/uploads/${req.file.filename}` : null;

// // //     const newNews = new News({ title, date, description, link, image });
// // //     await newNews.save();
// // //     res.status(201).json(newNews);
// // //   } catch (err) {
// // //     res.status(500).json({ error: 'Failed to add news item' });
// // //   }
// // // });

// // // // Delete news item
// // // app.delete('/api/news/:id', async (req, res) => {
// // //   try {
// // //     const { id } = req.params;
// // //     await News.findByIdAndDelete(id);
// // //     res.status(200).json({ message: 'News item deleted successfully' });
// // //   } catch (err) {
// // //     res.status(500).json({ error: 'Internal server error' });
// // //   }
// // // });

// // // // Start the server
// // // app.listen(port, () => {
// // //   console.log(`Server is running on http://localhost:${port}`);
// // // });




// // require('dotenv').config();
// // const express = require('express');
// // const mongoose = require('mongoose');
// // const cloudinary = require('cloudinary').v2;
// // const multer = require('multer');
// // const fs = require('fs');

// // // Initialize Express
// // const app = express();
// // app.use(express.json());
// // app.use(express.urlencoded({ extended: true }));

// // // Cloudinary Configuration
// // cloudinary.config({
// //   cloud_name: 'untitled',  // Your Cloudinary cloud name
// //   api_key: '492967573641861',                // Your Cloudinary API key
// //   api_secret: 'J7Q1THK2eE4ESyUpX-tIn-XPgzw'              // Your Cloudinary API secret (retrieved from the Cloudinary dashboard)
// // });

// // // Connect to MongoDB
// // mongoose.connect('mongodb+srv://manish:manish@textimage.51yzs.mongodb.net/?retryWrites=true&w=majority&appName=textimage', {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // })
// //   .then(() => console.log('MongoDB Connected'))
// //   .catch((err) => console.error('MongoDB connection error:', err));

// // // News Schema for MongoDB
// // const newsSchema = new mongoose.Schema({
// //   title: String,
// //   date: String,
// //   description: String,
// //   link: String,
// //   image: String, // Image URL from Cloudinary
// // });

// // const News = mongoose.model('News', newsSchema);

// // // Multer Configuration for file upload
// // const storage = multer.diskStorage({
// //   destination: (req, file, cb) => {
// //     cb(null, 'uploads/');
// //   },
// //   filename: (req, file, cb) => {
// //     cb(null, Date.now() + file.originalname);
// //   },
// // });

// // const upload = multer({ storage });

// // // API Route to Add News with Image
// // app.post('/api/news', upload.single('image'), async (req, res) => {
// //   try {
// //     const { title, date, description, link } = req.body;
// //     const image = req.file;

// //     let cloudinaryImageUrl = '';
// //     if (image) {
// //       // Upload image to Cloudinary
// //       const result = await cloudinary.uploader.upload(image.path);
// //       cloudinaryImageUrl = result.secure_url;
      
// //       // Remove the file from the server after upload
// //       fs.unlinkSync(image.path);
// //     }

// //     // Create a new news item in the database
// //     const newNewsItem = new News({
// //       title,
// //       date,
// //       description,
// //       link,
// //       image: cloudinaryImageUrl,
// //     });

// //     await newNewsItem.save();
// //     res.status(201).json(newNewsItem);
// //   } catch (err) {
// //     console.error('Error adding news item:', err);
// //     res.status(500).json({ error: 'Server Error' });
// //   }
// // });

// // // API Route to Get All News
// // app.get('/api/news', async (req, res) => {
// //   try {
// //     const newsItems = await News.find();
// //     res.status(200).json(newsItems);
// //   } catch (err) {
// //     console.error('Error fetching news items:', err);
// //     res.status(500).json({ error: 'Server Error' });
// //   }
// // });

// // // API Route to Delete a News Item
// // app.delete('/api/news/:id', async (req, res) => {
// //   try {
// //     const newsItem = await News.findByIdAndDelete(req.params.id);
// //     if (!newsItem) {
// //       return res.status(404).json({ error: 'News item not found' });
// //     }
// //     res.status(200).json({ message: 'News item deleted' });
// //   } catch (err) {
// //     console.error('Error deleting news item:', err);
// //     res.status(500).json({ error: 'Server Error' });
// //   }
// // });

// // // Start the server
// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => {
// //   console.log(`Server running on port ${PORT}`);
// // });



// const express = require("express");
// const mongoose = require("mongoose");
// const multer = require("multer");
// const cors = require("cors");
// const path = require("path");
// const fs = require("fs");

// const app = express();
// const PORT = 5000;

// // MongoDB connection
// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // Create uploads directory if it doesn't exist
// const uploadDir = path.join(__dirname, "uploads");
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir, { recursive: true });
// }

// // Multer setup for file uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/"); // Save files to 'uploads' directory
//   },
//   filename: (req, file, cb) => {
//     const uniqueName = `${Date.now()}-${file.originalname}`;
//     cb(null, uniqueName); // Unique filename
//   },
// });

// const upload = multer({ storage });

// // Mongoose schema and model
// const newsSchema = new mongoose.Schema({
//   title: String,
//   date: String,
//   description: String,
//   link: String,
//   image: String, // Path to the uploaded file
// });

// const News = mongoose.model("News", newsSchema);

// // Routes
// app.get("/api/news", async (req, res) => {
//   try {
//     const news = await News.find();
//     res.json(news);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to fetch news" });
//   }
// });

// app.post("/api/news", upload.single("image"), async (req, res) => {
//   try {
//     const { title, date, description, link } = req.body;
//     const image = req.file ? `/uploads/${req.file.filename}` : null;

//     const newsItem = new News({ title, date, description, link, image });
//     await newsItem.save();

//     res.status(201).json(newsItem);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to add news item" });
//   }
// });

// app.delete("/api/news/:id", async (req, res) => {
//   try {
//     const newsItem = await News.findById(req.params.id);

//     if (newsItem) {
//       // Delete the associated image file
//       if (newsItem.image) {
//         const filePath = path.join(__dirname, newsItem.image);
//         if (fs.existsSync(filePath)) {
//           fs.unlinkSync(filePath); // Remove the file
//         }
//       }

//       await newsItem.remove();
//       res.status(200).json({ message: "News item deleted successfully" });
//     } else {
//       res.status(404).json({ error: "News item not found" });
//     }
//   } catch (err) {
//     res.status(500).json({ error: "Failed to delete news item" });
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });


const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
require("dotenv").config(); // Load environment variables

const app = express();
const PORT = 5000;

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Create uploads directory if it doesn't exist
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Save files to 'uploads' directory
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName); // Unique filename
  },
});

const upload = multer({ storage });

// Mongoose schema and model
const newsSchema = new mongoose.Schema({
  title: String,
  date: String,
  description: String,
  link: String,
  image: String, // Path to the uploaded file
});

const News = mongoose.model("News", newsSchema);

// Routes
// GET: Fetch all news items
app.get("/api/news", async (req, res) => {
  try {
    const news = await News.find();
    res.json(news);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

// POST: Add a new news item
app.post("/api/news", upload.single("image"), async (req, res) => {
  try {
    const { title, date, description, link } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null;

    const newsItem = new News({ title, date, description, link, image });
    await newsItem.save();

    res.status(201).json(newsItem);
  } catch (err) {
    res.status(500).json({ error: "Failed to add news item" });
  }
});

// DELETE: Delete a news item by ID
app.delete("/api/news/:id", async (req, res) => {
  try {
    const newsItem = await News.findById(req.params.id);

    if (newsItem) {
      // Delete the associated image file
      if (newsItem.image) {
        const filePath = path.join(__dirname, newsItem.image);
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath); // Remove the file
        }
      }

      await newsItem.remove();
      res.status(200).json({ message: "News item deleted successfully" });
    } else {
      res.status(404).json({ error: "News item not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to delete news item" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
