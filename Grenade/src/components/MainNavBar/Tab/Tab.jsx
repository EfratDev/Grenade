import React from "react";
// import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGamepad,
    faHome,
    faQuestionCircle,
    faGhost,
} from "@fortawesome/free-solid-svg-icons";

import Home from "../../views/Home";
import Games from "../../views/Games";
import Users from "../../views/Users";
import AboutUs from "../../views/AboutUs";
import "./Tab.css";

const Tabs = {
    home: {
        href: "/",
        title: "Home",
        isExact: true,
        component: Home,
        icon: faHome,
        color: "rgb(199, 67, 67)",
    },
    games: {
        href: "/games",
        title: "Games",
        isExact: false,
        component: Games,
        icon: faGamepad,
        color: "rgb(7, 182, 80)",
    },
    users: {
        href: "/users",
        title: "Users",
        isExact: false,
        component: Users,
        icon: faGhost,
        color: "rgb(116, 35, 221)",
    },
    aboutUs: {
        href: "/about-us",
        title: "About Us",
        isExact: false,
        component: AboutUs,
        icon: faQuestionCircle,
        color: "rgb(47, 153, 224)",
    },
};

function Tab({ onSelect, isSelected, tab }) {
    return (
        <td>
            <Link className="nav-link" onSelect={onSelect} to={tab.href}>
                <FontAwesomeIcon icon={tab.icon} size="2x" color={tab.color} />
                <span>{tab.title}</span>
            </Link>
        </td>
    );
}

Tab.propTypes = {};

export { Tab, Tabs };
