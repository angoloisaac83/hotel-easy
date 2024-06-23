// server.js

const express = require('express');
const next = require('next');
const connectDB = require('./src/app/server/db.js');
const authRoutes = require('./src/app/server/routes/authRoutes');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

connectDB();

app.prepare().then(() => {
  const server = express();

  // Middleware
  
  server.use(express.json());
  server.use('/src/app', authRoutes);

  // Default route for Next.js pages
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3001;
  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server started on http://localhost:${PORT}`);
  });
});
