const express = require('express');
const bodyParser = require('body-parser');

const config = require('./services/config');
const usersRoutes = require('./routes/profiles');
const postsRoutes = require('./routes/posts');
// const likesRoutes = require('./routes/likes');

const port = config.appPort;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use('/profiles', usersRoutes);
app.use('/posts', postsRoutes);
// app.use('/posts/:id/likes', likesRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// docker-compose --env-file .env up -d
