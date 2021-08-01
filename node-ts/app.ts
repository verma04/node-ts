import express from 'express';

import mongoose  from 'mongoose'

import passport  from 'passport'
import cors from 'cors'
import  { users  } from './route/api/users'

import  bodyParser from 'body-parser'

import path from 'path'

const app = express();



app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
  app.use(bodyParser.json());
  app.use(cors())

  app.use("/api/users", users);

  const port = process.env.PORT || 5000;

  // Serve static assets in production
  if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }
  const PORT = process.env.PORT || 5000;
  
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));