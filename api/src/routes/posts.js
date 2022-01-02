const router = require('express').Router();
const db = require('../services/db');

router.get('/', async (req, res) => {
  try {
    const count = await db.select().from('post').orderBy('id_post');

    if (Object.keys(count).length !== 0) {
      res.status(200).json(count);
    } else {
      res.status(404).json({ message: 'Records not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error selecting posts', error: err });
  }
});

router.get('/:id', async (req, res) => {
  const idPost = req.params.id;
  try {
    const count = await db.select().from('post').where('id_post', idPost);

    if (Object.keys(count).length !== 0) {
      res.status(200).json(count);
    } else {
      res.status(404).json({ message: 'Records not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error selecting post', error: err });
  }
});

router.post('/', async (req, res) => {
  const add = req.body;
  try {
    const count = await db.insert(add).into('post');
    if (count !== 0) {
      res.status(200).json({ added: 'true' });
    } else {
      res.status(404).json({ added: 'false' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error adding post', error: err });
  }
  res.send();

  // EXAMPLE: http://localhost:3000/profiles?name=Anna&surname=Yashchenko&patronymic=Nikolaevna&phone=0998877654&email=example@gmail.com&user_icon=324234
});

router.put('/:id', async (req, res) => {
  const idPost = req.params.id;
  const changes = req.body;
  try {
    const count = await db('post').where('id_post', idPost).update(changes);
    if (count) {
      res.status(200).json({ updated: count });
    } else {
      res.status(404).json({ message: 'Record not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error updating post', error: err });
  }
});

router.delete('/:id', async (req, res) => {
  const idPost = req.params.id;
  try {
    const count = await db('post').where('id_post', idPost).del();
    if (count !== 0) {
      res.status(200).json({ deleted: 'true' });
    } else {
      res.status(404).json({ deleted: 'false' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error deleting post', error: err });
  }
});

/*

    Post comments list ------------------------------

 */

router.get('/:id/comments', async (req, res) => {
  const idPost = req.params.id;
  console.log(idPost);
  try {
    const count = await db
      .select()
      .from('comments')
      .orderBy('time_stamp')
      .where('id_post', idPost);
    if (Object.keys(count).length !== 0) {
      res.status(200).json(count);
    } else {
      res.status(404).json({ message: 'Comments not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error selecting comments', error: err });
  }
});

/*

    Post likes list ------------------------------

 */

router.get('/:id/likes-list', async (req, res) => {
  const idPost = req.params.id;
  try {
    const count = await db
      .select(
        'profile.id_profile',
        'profile.name',
        'profile.surname',
        'profile.user_icon'
      )
      .from('post')
      .join('post_likes', 'post.id_post', '=', 'post_likes.id_post')
      .join('profile', 'post.id_profile', '=', 'profile.id_profile')
      .where('post.id_post', idPost);
    console.log(count);
    if (Object.keys(count).length !== 0) {
      res.status(200).json(count);
    } else {
      res.status(404).json({ message: 'likes not found' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Error selecting likes', error: err });
  }
});

module.exports = router;
