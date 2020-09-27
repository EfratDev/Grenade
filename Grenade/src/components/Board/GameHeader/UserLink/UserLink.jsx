import React from "react";
import { object } from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import "./UserLink.css";

function UserLink({ user }) {
    return (
        <a
            className="userLink"
            href={user.link}
            target="_blank"
            rel="noopener noreferrer"
        >
            <FontAwesomeIcon icon={faUser} />
            <b>{user.username}</b>
        </a>
    );
}

UserLink.propTypes = { user: object };

export default UserLink;
