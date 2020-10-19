import React from "react";
import { oneOfType, bool, object } from "prop-types";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGamepad,
    faHome,
    faQuestionCircle,
    faGhost,
    faSettings,
} from "@fortawesome/free-solid-svg-icons";

import "./MainNavBar.css";
import LoginStatus from "./LoginStatus";
import SearchBox from "./SearchBox/SearchBox";
import Home from "../views/Home";
import Games from "../views/Games";
import Users from "../views/Users";
import AboutUs from "../views/AboutUs";

const MainNavBar = ({ user }) => {
    return (
        <span className="w-100 fix-spacing">
            <BrowserRouter>
                <Navbar fixed="fixed-top" bg="dark" variant="dark">
                    <Navbar.Brand>
                        <img
                            className="img-fluid img-responsive"
                            src={require("../../images/logo.png")}
                            alt="Grenade"
                        />
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <td className="mt-4">
                            <Nav.Link exact="true" href="/">
                                <FontAwesomeIcon
                                    icon={faHome}
                                    size="2x"
                                    color="rgb(199, 67, 67)"
                                />
                                <p>Home</p>
                            </Nav.Link>
                        </td>
                        <td className="mt-4">
                            <Nav.Link href="/games">
                                <FontAwesomeIcon
                                    icon={faGamepad}
                                    size="2x"
                                    color="rgb(7, 182, 80)"
                                />
                                <p>Games</p>
                            </Nav.Link>
                        </td>
                        <td className="mt-4">
                            <Nav.Link href="/users">
                                <FontAwesomeIcon
                                    icon={faGhost}
                                    color="rgb(116, 35, 221)"
                                    size="2x"
                                />
                                <p>Users</p>
                            </Nav.Link>
                        </td>
                        <td className="mt-4">
                            <Nav.Link href="/about-us">
                                <FontAwesomeIcon
                                    icon={faQuestionCircle}
                                    color="rgb(47, 153, 224)"
                                    size="2x"
                                />
                                <p>About Us</p>
                            </Nav.Link>
                        </td>
                    </Nav>
                    {/* <FontAwesomeIcon
                        icon={fa}
                        color="rgb(116, 35, 221)"
                        size="2x"
                    /> */}
                    <SearchBox />
                    <LoginStatus user={user} />
                </Navbar>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/games" component={Games}></Route>
                    <Route path="/users" component={Users}></Route>
                    <Route path="/about-us" component={AboutUs}></Route>
                </Switch>
            </BrowserRouter>
        </span>
    );
};

MainNavBar.propTypes = { user: oneOfType([bool, object]) };

export default MainNavBar;
