import React from "react";
import Carousel from "../Carousel/Carousel";
// import PropTypes from 'prop-types'

function Games() {
    return (
        <div className="">
            <Carousel
                title="new games"
                games={[
                    "a",
                    "b",
                    "c",
                    "d",
                    "b",
                    "c",
                    "d",
                    "b",
                    "c",
                    "d",
                    "b",
                    "c",
                    "d",
                ]}
            />
        </div>
    );
}

Games.propTypes = {};

export default Games;
