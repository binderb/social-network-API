import express from 'express';
import db from './config/connection.js';
import routes from './routes/index.js';

// Define server and port
const app = express();
const PORT = 3001 || process.env.PORT;

// Enable basic middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Enable modular routing
app.use(routes);

// Start server
db.once('open', () => {
  app.listen(PORT, () => console.log('listening'));
});