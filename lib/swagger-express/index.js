
var swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

exports.init = function (app, opt) {
  
  //app.use(opt.swaggerURL, express.static(opt.swaggerUI));

  var mrSwaggerSpec = swaggerJSDoc(opt);

  app.use(opt.swaggerURL, swaggerUi.serve, swaggerUi.setup(mrSwaggerSpec));

  app.get(opt.swaggerJSON, function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.send(mrSwaggerSpec);
  });
  
};

