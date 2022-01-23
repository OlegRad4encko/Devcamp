const router = require('express').Router();
const db = require('../services/db');

router.get('/', async (req, res) => {
  const limit = req.query.limit || 10;
  const page = req.query.page || 1;
  let offset = 0;

  if (page > 1) {
    offset = (page - 1) * limit;
  }

  res.send(await db.select().from('profile').limit(limit).offset(offset)
    .orderBy('id_profile'));
});

router.get('/:id', async (req, res) => {
  res.send(await db
    .select()
    .from('profile')
    .where('id_profile', req.params.id));
});

router.post('/', async (req, res) => {
  const add = req.body;
  return res.send(await db.insert(add).into('profile'));
});

router.put('/:id', async (req, res) => {
  const idProfile = req.params.id;
  const changes = req.body;
  return res.send(await db('profile').where('id_profile', idProfile).update(changes));
});

router.delete('/:id', async (req, res) => {
  const idProfile = req.params.id;
  return res.send(await db('profile').where('id_profile', idProfile).del());
});

module.exports = router;
