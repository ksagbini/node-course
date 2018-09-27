/**
 * Uploads file resources
 */

const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
 
// default options
app.use(fileUpload());
 
app.put('/upload', function(req, res) {
  if (!req.files) return res.status(400).json('No files were uploaded.');
 
  let upload_file = req.files.upload_file;
  upload_file.mv('uploads/filename.jpg', (err) => {
    if (err) return res.status(500).send(err);
    res.json('File uploaded!');
  });
});

module.exports = app;
