import React from "react";
import UserPropTypes from "./props/userPropTypes"

const User = ({user}) => {
    return (
        <div>{user.name}</div>
    );
}

User.propTypes = UserPropTypes;

export default User;
