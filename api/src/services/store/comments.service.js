const db = require('../db');

module.exports = {
  getAllCommentsByPostID: async (limit, offset, idPost) => db
    .select(
      'comments.id_comment',
      'comments.id_parent_comment',
      'comments.id_post',
      'comments.id_profile',
      'profile.user_icon',
      'comments.comment_text',
      'comments.time_stamp',
      'comments.changed',
    )
    .from('comments').join(
      'profile',
      'profile.id_profile',
      '=',
      'comments.id_profile',
    ).limit(limit)
    .offset(offset)
    .orderBy('time_stamp')
    .where('id_post', idPost),
  getCommentByIdForPostById: async (idPost, idComment) => db.select(
    'comments.id_comment',
    'comments.id_parent_comment',
    'comments.id_post',
    'comments.id_profile',
    'profile.user_icon',
    'comments.comment_text',
    'comments.time_stamp',
    'comments.changed',
  )
    .from('comments').join(
      'profile',
      'profile.id_profile',
      '=',
      'comments.id_profile',
    ).where('id_post', idPost)
    .andWhere('id_comment', idComment),
  addCommentForPost: async (add) => db.insert(add).into('comments'),
  changeComment: async (idComment, idPost, changes) => db('comments').where('id_comment', idComment).andWhere('id_post', idPost).update(changes),
  deleteComment: async (idComment, idPost) => db('comments').where('id_comment', idComment).andWhere('id_post', idPost).del(),
};
