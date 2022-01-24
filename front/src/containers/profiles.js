import React from "react";

import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { getUsers } from './profiles/api/crud';

import userIcon from './img/default_profile_image.png';

export function Profiles() {

    const { isFetching, data } = useQuery('Users', () => getUsers());
    const users = data?.data || [];
    return (
        <div id="body">
            <div id="profile" className="in-line-users">
                {isFetching && <div>Loading...</div>}
                {users.map(({
                    id_profile,
                    name,
                    surname,
                    user_icon
                }) => (
                    <div className="profiles-mini" key={id_profile}>
                        <Link to={"/user/"+id_profile}>
                            <img src={userIcon || user_icon} title={surname + " " + name} alt="user_icon"/>
                            <div className="profile-main-data-coll">
                                <div>{surname}</div>
                                <div>{name}</div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
