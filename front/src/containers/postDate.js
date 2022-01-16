import React from "react";

import PostImage from "./news/postImage";
import NewsContainer from "./news/newsContainer";
import { useParams } from "react-router-dom";

const post = {
    imageSrc: "https://bit.ly/3ruwQgH",
    imageTitle: "Ubuntu",
    imageAlt: undefined,
    postTitle: "My title",
    postText:
        "lorem ipsum dolor sit amet, consectetur adipisicing elkit,\n" +
        "            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n" +
        "            ut enim ad minim veniam, quis nostrud exercitation ullamco\n" +
        "            laboris nisi ut aliquip ex ea commodo consequat. duis aute\n" +
        "            figures dolor in reprehend in voluptate velit esse cillum\n" +
        "            dolore eu fugiat nulla pariatur. excepteur sint occaecat cupidatat\n" +
        "            non proident, sunt in culpa qui officia deserunt mollit anim id\n" +
        "            est laborum.",
};

export function PostDate() {
    let params = useParams();
    if(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/mg.exec(params.date)) {
        let date = {
            curDate: new Date(),
            reqDate: new Date(params.date),
        };
        if(date.curDate < date.reqDate) {
            return(
                <div id="body">
                    <div id="articles">
                        Не смотри в будущее
                    </div>
                </div>
            );
        }
        return(
            <div id="body">
                <div id="articles">
                    <div className="news-post">
                        <PostImage
                            src={"https://bit.ly/3rpUTxv"}
                            title={post.imageTitle}
                            alt={post.imageAlt}
                        />
                        <NewsContainer title={post.postTitle + " | date = "+params.date} text={post.postText}/>
                    </div>
                </div>
            </div>
        );
    } else {
        return(
            <div id="body">
                <div id="articles">
                    404
                </div>
            </div>
        );
    }
}