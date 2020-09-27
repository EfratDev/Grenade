import React from "react";
import { string, number, oneOfType } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGamepad,
    faStar,
    faHeart,
    faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";

import "./InfoButton.css";

const Cards = {
    plays: { color: "success", icon: faGamepad },
    ratings: { color: "warning", icon: faStar },
    likes: { color: "danger", icon: faHeart },
    published: { color: "info", icon: faCalendarAlt },
};

const InfoButton = ({ type, info }) => {
    return (
        <button type="button" className={`btn btn-${Cards[type].color}`}>
            <FontAwesomeIcon icon={Cards[type].icon} /> {info}
        </button>
    );
};

InfoButton.propTypes = {
    type: string,
    info: oneOfType([string, number]),
};

export default InfoButton;
