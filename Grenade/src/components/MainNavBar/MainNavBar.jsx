import React, { useState } from "react";
import { oneOfType, bool, object } from "prop-types";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Route, Switch, BrowserRouter, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGamepad,
    faHome,
    faQuestionCircle,
    faGhost,
} from "@fortawesome/free-solid-svg-icons";

import "./MainNavBar.css";
import LoginStatus from "./LoginStatus";
import Home from "../views/Home";
import Games from "../views/Games";
import Users from "../views/Users";
import AboutUs from "../views/AboutUs";
import SettingsButton from "../buttons/SettingsButton/SettingsButton";
import { Background, Backgrounds } from "../Backgrounds/Background";

const MainNavBar = ({ user }) => {
    const [selectedTab, setSelectedTab] = useState("/");
    const onSelect = (path) => {
        setSelectedTab(path);
    };

    return (
        <span className="w-100 fix-spacing">
            <BrowserRouter>
                <Navbar
                    collapseOnSelect
                    expand="lg"
                    fixed="fixed-top"
                    variant="dark"
                >
                    <Navbar.Brand>
                        <img
                            className="img-fluid img-responsive"
                            src={require("../../images/logo.png")}
                            alt="Grenade"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <td>
                                <Link className="nav-link" to="/games">
                                    <FontAwesomeIcon
                                        icon={faGamepad}
                                        size="2x"
                                        color="rgb(7, 182, 80)"
                                    />
                                    <p>Games</p>
                                </Link>
                            </td>
                            <td>
                                <Link className="nav-link" to="/users">
                                    <FontAwesomeIcon
                                        icon={faGhost}
                                        color="rgb(116, 35, 221)"
                                        size="2x"
                                    />
                                    <p>Users</p>
                                </Link>
                            </td>
                            <td>
                                <Link className="nav-link" to="/about-us">
                                    <FontAwesomeIcon
                                        icon={faQuestionCircle}
                                        color="rgb(47, 153, 224)"
                                        size="2x"
                                    />
                                    <p>About Us</p>
                                </Link>
                            </td>
                        </Nav>
                        <LoginStatus user={user} />
                        <SettingsButton />
                    </Navbar.Collapse>
                </Navbar>
                <Switch>
                    <Background type={user.background || Backgrounds.Default} />
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/games" component={Games}></Route>
                    <Route exact path="/users" component={Users}></Route>
                    <Route exact path="/about-us" component={AboutUs}></Route>
                </Switch>
            </BrowserRouter>
        </span>
    );
};

MainNavBar.propTypes = { user: oneOfType([bool, object]) };

export default MainNavBar;
