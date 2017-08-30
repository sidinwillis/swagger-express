/// express
var express = require('express');
var app = express();
/// swagger
var swagger = require('../index');
var path = require('path');
/// cors
var cors = require('cors');

app.use(cors());

swagger.init(app, {
    swaggerURL: '/swagger',
    swaggerJSON: '/api-docs.json',
    swaggerUI: path.join(__dirname + '\\public\\swagger\\'),
    swaggerDefinition: {
        info: {
          title: 'Meeting Rooms APIs', // Title (required)
          version: '1.0.0', // Version (required)
          description: "<descriptions>"
        },
        host: 'localhost:30000',
        basePath: '/',
        schemes: ['http']
      },
    apis: [
        path.join(__dirname + '\\controllers\\general.js'),
        path.join(__dirname + '\\controllers\\course.js'),
        path.join(__dirname + '\\controllers\\response.js'),
        path.join(__dirname + '\\controllers\\user.js'),
        path.join(__dirname + '\\controllers\\survey.js'),
        path.join(__dirname + '\\controllers\\system.js'),
        path.join(__dirname + '\\controllers\\frontend.js')
    ],
});

require('./controllers/general.js')(app);

app.listen(30000);