/**
 * Uploads file resources
 */

const express = require('express');
const fs = require('fs');
const path = require('path');
const fileUpload = require('express-fileupload');
const { authToken, authTokenByUrl } = require('../middlewares/auth');
const User = require('../models/user');
const Product = require('../models/product');
const app = express();


// default options
app.use(fileUpload());

app.get('/image/:type/:img', authTokenByUrl, (req, res) => {

  let type = req.params.type;
  let img = req.params.img;

  if (!fn.validType(type)) return res.status(400).json(`Invalid type ${type}`);

  let imagePath = path.resolve(__dirname, `../../uploads/${type}/${img}`)

  if (fs.existsSync(imagePath)) {
    res.sendFile(imagePath);
  }
  else {
    let noImgPath = path.resolve(__dirname, `../assets/no-image.jpg`);
    res.sendFile(noImgPath);
  }

});


app.put('/upload/:type/:id', (req, res) => {

  let type = req.params.type.toLowerCase();
  let id = req.params.id;

  if (!fn.validType(type)) return res.status(400).json(`Type ${type} not valid. Valid types: ${validType.join(', ')}`);

  if (!req.files) return res.status(400).json('No files were uploaded.');
  let upload_file = req.files.upload_file;

  let fileName = upload_file.name.split('.');
  let ext = fileName[fileName.length - 1].toLowerCase();
  console.log('EXT ' + ext, fn.validExtention(ext))
  if (!fn.validExtention(ext)) return res.status(400).json(`File extention '${ext}' invalid.`);

  let newFileName = `${id}_${new Date().getMilliseconds()}.${ext}`;
  let filePath = `uploads/${type}/${newFileName}`;

  upload_file.mv(filePath, (err) => {

    if (err) return res.status(500).send(err);

    fn[`img_${type}`](id, res, newFileName);
  });
});

let fn = {
  img_user: (id, res, fileName) => {
    User.findById(id, (err, user) => {
      if (err) {
        fn.removeFile('user', fileName);
        return res.status(500).json(err);
      }

      if (!user) {
        fn.removeFile('user', fileName)
        return res.status(404).json(`User ID: ${id} not found.`);
      }

      fn.removeFile('user', user.img);
      user.img = fileName;
      user.save((err, userUpdate) => {
        if (err) return res.status(500).json(err);
        res.json(userUpdate);
      });
    });
  },
  img_product: (id, res, fileName) => {
    Product.findById(id, (err, product) => {
      if (err) {
        fn.removeFile('product', fileName);
        return res.status(500).json(err);
      }

      if (!product) {
        fn.removeFile('product', fileName)
        return res.status(404).json(`Product ID: ${id} not found.`);
      }

      fn.removeFile('product', product.img);
      product.img = fileName;
      product.save((err, productUpdate) => {
        if (err) return res.status(500).json(err);
        res.json(productUpdate);
      });
    });
  },
  removeFile: (type, fileName) => {
    //Remove the previews user image
    let pathUrl = path.resolve(__dirname, `../../uploads/${type}/${fileName}`);
    if (!fileName || fileName == '' || fileName == null) return;
    if (fs.existsSync(pathUrl)) fs.unlinkSync(pathUrl);
  },
  validType: (type) => ['user', 'product'].indexOf(type.toLowerCase()) > -1,
  validExtention: (ext) => ['png', 'jpg', 'gif', 'jpeg'].indexOf(ext.toLowerCase()) > -1

};

module.exports = app;