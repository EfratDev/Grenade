import React from "react";
import { object } from "prop-types";

import InfoButton from "./InfoButton/InfoButton";

function InfoButtons({ game }) {
    return (
        <div className="card-text">
            <InfoButton type="plays" info={game.plays} />
            <InfoButton type="ratings" info={game.rating} />
            <InfoButton type="published" info={game.publishDate} />
            <InfoButton type="likes" info={game.likes} />
        </div>
    );
}

InfoButtons.propTypes = { game: object };

export default InfoButtons;
