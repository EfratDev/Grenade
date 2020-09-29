import React from "react";
import { string, object } from "prop-types";

import UserLink from "./UserLink/UserLink";

function GameHeader({ name, user }) {
    return (
        <div className="mb-1">
            <div className="game-title">{name}</div>
            By <UserLink user={user} />
        </div>
    );
}

GameHeader.propTypes = { name: string, user: object };

export default GameHeader;
