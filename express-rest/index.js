import http from 'node:http';

import config from './config/index.js';
import app from './app.js';
import mongoose from 'mongoose';

const server = http.createServer(app);

server.on('error', (err) => {
  console.log(err.message);
});

await mongoose.connect('mongodb://localhost:27017/test');

server.listen(config.port, () => {
  console.log('Server started on port ' + config.port);
});
