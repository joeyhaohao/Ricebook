const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

if (process.env.NODE_ENV !== "production") {
  require('dotenv');
}
const app = express();
app.use(bodyParser.json());
corsOptions = {
  origin: ['http://yz157-ricebook.surge.sh', 'http://localhost:4200'],
  credentials: true,
  methods: 'GET,PUT,POST,DELETE',
  allowedHeaders: 'Authorization,Content-Type,Origin,X-Request-With,X-Session-Id',
  exposedHeaders: 'Location,X-Session-Id'
};
app.use(cors(corsOptions));

const url = process.env.DATABASE_URL || "mongodb://localhost/ricebook";
mongoose.connect(url, {useNewUrlParser: true});

// const uploadCloud = require('./src/uploadCloudinary');
// uploadCloud.setup(app);

require('./src/auth')(app);
require('./src/profile')(app);
require('./src/articles')(app);
require('./src/following')(app);

// Get the port from the environment, i.e., Heroku sets it
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  const addr = server.address();
  console.log(`Server listening at http://${addr.address}:${addr.port}`)
});

require('./src/chat')(app, server);
