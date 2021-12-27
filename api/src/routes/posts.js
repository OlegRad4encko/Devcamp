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
    res.status(500).json({ message: 'Error selecting profile', error: err });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const count = await db
      .select()
      .from('post')
      .where('id_post', req.params.id);

    if (Object.keys(count).length !== 0) {
      res.status(200).json(count);
    } else {
      res.status(404).json({ message: 'Records not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error selecting profile', error: err });
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
    res.status(500).json({ message: 'Error adding profile', error: err });
  }
  res.send();

  // EXAMPLE: http://localhost:3000/profiles?name=Anna&surname=Yashchenko&patronymic=Nikolaevna&phone=0998877654&email=example@gmail.com&user_icon=324234
});

router.put('/:id', async (req, res) => {
  const idProfile = req.params.id;
  const changes = req.body;
  try {
    const count = await db('post').where('id_post', idProfile).update(changes);
    if (count) {
      res.status(200).json({ updated: count });
    } else {
      res.status(404).json({ message: 'Record not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error updating profile', error: err });
  }
});

router.delete('/:id', async (req, res) => {
  const idProfile = req.params.id;
  try {
    const count = await db('post').where('id_post', idProfile).del();
    if (count !== 0) {
      res.status(200).json({ deleted: 'true' });
    } else {
      res.status(404).json({ deleted: 'false' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error deleting profile', error: err });
  }
});

module.exports = router;
