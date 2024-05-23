import React from "react";
import PropTypes from "prop-types";

export const UserInfo = ({email, name, birthday}) => {
return (
    <div>
        <p>Username:{name}</p>
        <p>Email:{email}</p>
        <p>Birthday:{birthday}</p>
    </div>
)
}


UserInfo.propTypes = {
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired, 
}

