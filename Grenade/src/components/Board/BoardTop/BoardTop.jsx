import React from "react";
import GameHeader from "../GameHeader/GameHeader";
import Game from "../Game/Game";
import { object } from "prop-types";

const BoardTop = ({ game, user }) => {
    return (
        <div className="text-left">
            <GameHeader name={game.name} user={user} />
            <Game id={game.id} />
        </div>
    );
};

BoardTop.propTypes = { game: object, user: object };

export default BoardTop;
