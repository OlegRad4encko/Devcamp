import React from "react";

//import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { getUser } from './profiles/api/crud';
import { useParams } from "react-router-dom";

import ProfileInfo from "../components/profiles/profileMainInfo";

import userIcon from './img/default_profile_image.png';

export function Profile() {
    const { userId } = useParams();
    const { isFetching, data } = useQuery('oneUser', () => getUser(userId));
    const user = data?.data || [];
    return (
        <div id="body">
            <div id="profile">
                {isFetching && <div>Loading...</div>}
                {user.map(({
                    id_profile,
                    name,
                    surname,
                    patronymic,
                    phone,
                    email,
                    user_icon
                }) => (
                    <div className="profiles" key={id_profile}>
                        <div className="profile-main-data">
                            <div>
                                <img src={userIcon || user_icon}/>
                            </div>
                            <div className="profile-info">
                                <ProfileInfo name={name} surname={surname} patronymic={patronymic} phone={phone} email={email}></ProfileInfo>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
