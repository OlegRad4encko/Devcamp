const router = require('express').Router();
const db = require('../services/db');
const commentsService = require('../services/store/comments.service');
const likesService = require('../services/store/likes.service');

router.get('/', async (req, res) => {
  const limit = req.query.limit || 10;
  const page = req.query.page || 1;
  let offset = 0;

  if (page > 1) {
    offset = (page - 1) * limit;
  }

  res.send(await db.select().from('post').limit(limit).offset(offset)
    .orderBy('id_post'));
});

router.get('/:id', async (req, res) => {
  const idPost = req.params.id;

  res.send(await db.select().from('post').where('id_post', idPost));
});

router.post('/', async (req, res) => {
  const add = req.body;

  res.send(await db.insert(add).into('post'));
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

  res.send(await db('post').where('id_post', idPost).del());
});

/**
 *  @Post_comments_CRUD ----------------------------------------------------------------------
 * */

router.get('/:id/comments', async (req, res) => {
  const idPost = req.params.id;

  const limit = req.query.limit || 25;
  const page = req.query.page || 1;
  let offset = 0;

  if (page > 1) {
    offset = (page - 1) * limit;
  }

  res.send(await commentsService.getAllCommentsByPostID(limit, offset, idPost));
});

router.get('/:id/comments/:comment_id', async (req, res) => {
  const idPost = req.params.id;
  const idComment = req.params.comment_id;

  res.send(await commentsService.getCommentByIdForPostById(idPost, idComment));
});

router.post('/:id/comments/', async (req, res) => {
  const add = req.body;
  add.id_post = req.params.id;

  res.send(await commentsService.addCommentForPost(add));
});

router.put('/:id/comments/:comment_id', async (req, res) => {
  const idPost = +req.params.id;
  const idComment = +req.params.comment_id;

  const changes = req.body;
  changes.changed = true;

  try {
    const count = await commentsService.changeComment(idComment, idPost, changes);
    if (count) {
      res.status(200).json({ updated: true });
    } else {
      res.status(404).json({ updated: 'nfound' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Error updating comment', error: err });
  }
});

router.delete('/:id/comments/:comment_id', async (req, res) => {
  const idPost = req.params.id;
  const idComment = req.params.comment_id;
  try {
    const count = await commentsService.deleteComment(idComment, idPost);
    if (count !== 0) {
      res.status(200).json({ deleted: 'true' });
    } else {
      res.status(404).json({ deleted: 'false' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error deleting post', error: err });
  }
});

/**
 *  @Post_likes_CRUD ----------------------------------------------------------------------
 * */

router.get('/:id/likes', async (req, res) => {
  const idPost = req.params.id;

  const limit = req.query.limit || 10;
  const page = req.query.page || 1;
  let offset = 0;

  if (page > 1) {
    offset = (page - 1) * limit;
  }

  res.send(await likesService.getAllLikesByPostID(limit, offset, idPost));
});

router.post('/:id/likes/', async (req, res) => {
  const addPostData = req.body;
  addPostData.id_post = req.params.id;

  res.send(await likesService.addLikeToPostById(addPostData));
});

router.delete('/:id/likes/:like_id', async (req, res) => {
  const idPost = req.params.id;
  const idLike = req.params.like_id;
  try {
    const count = await likesService.deleteLikeFromPostById(idLike, idPost);
    if (count !== 0) {
      res.status(200).json({ deleted: 'true' });
    } else {
      res.status(404).json({ deleted: 'false' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error deleting like', error: err });
  }
});

module.exports = router;
