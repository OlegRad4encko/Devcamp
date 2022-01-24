import React from "react";
import Moment from "moment";

import NewsContainer from "./news/newsContainer";

import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { getPosts } from './posts/api/crud';


import userIcon from './img/default_profile_image.png';

const PostsContainer = () => {
    const { isFetching, data } = useQuery('allPosts', () => getPosts());
    const posts = data?.data || [];
    return (
        <div id="body">
            <div id="articles">
                {isFetching && <div>Loading...</div>}
                {posts?.map((
                    {id_post, post_theme,
                        post_text, time_stamp,
                        post_avab, post_img,
                        id_profile, user_icon, name,
                        surname, total_likes,
                        total_comments}) => (
                    <div className="news-post" id={id_post} key={"idpost"+id_post}>
                        <div className="post-info" availability={post_avab} >
                            <div className="post-author">
                                <img src={user_icon || userIcon} />
                                <Link className="user-link" to={"/user/"+id_profile}>{surname} {name}</Link>
                            </div>
                            <div className="post-date">
                                {Moment(time_stamp).format("DD.MM.YYYY HH:MM")}
                            </div>
                        </div>
                        <div className="post_content">
                            <NewsContainer title={post_theme}
                                           text={post_text}
                                           src={post_img}
                                           title_img={"post image"}
                                           alt={"post image"}/>
                        </div>
                        <div className="post-stats">
                            <div>Лайки: {total_likes}</div>
                            <div>Комментарии: {total_comments}</div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
}

export default PostsContainer;
