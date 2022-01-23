const db = require('../db');

module.exports = {
  getAllLikesByPostID: async (limit, offset, idPost) => db
    .select(
      'post_likes.id_post_like',
      'profile.id_profile',
      'profile.name',
      'profile.surname',
      'profile.user_icon',
    )
    .from('post')
    .join('post_likes', 'post.id_post', '=', 'post_likes.id_post')
    .join('profile', 'post_likes.id_profile', '=', 'profile.id_profile')
    .limit(limit)
    .offset(offset)
    .where('post.id_post', idPost)
    .orderBy('id_post_like'),
  addLikeToPostById: async (add) => db.insert(add).into('post_likes'),
  deleteLikeFromPostById: async (idLike, idPost) => db('post_likes').where('id_post_like', idLike).andWhere('id_post', idPost).del(),
};
