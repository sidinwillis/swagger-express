
var express = require('express');
var swaggerJSDoc = require('swagger-jsdoc');


exports.init = function (app, opt) {
  
  var swHandler = express.static(opt.swaggerUI);
  app.use(opt.swaggerURL, express.static(opt.swaggerUI));

  var mrSwaggerSpec = swaggerJSDoc(opt);
  
  app.get(opt.swaggerJSON, function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.send(mrSwaggerSpec);
  });
  
};

