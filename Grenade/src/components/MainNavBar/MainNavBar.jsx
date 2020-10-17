import React from "react";
import { oneOfType, bool, object } from "prop-types";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Route from "react-router-dom/Route";
import Switch from "react-router-dom/Switch";
import BrowserRouter from "react-router-dom/BrowserRouter";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGamepad,
    faHome,
    faQuestionCircle,
    faGhost,
} from "@fortawesome/free-solid-svg-icons";

import "./MainNavBar.css";
import LoginStatus from "./LoginStatus";
import SearchBox from "./SearchBox/SearchBox";
import Home from "../views/Home";

const MainNavBar = ({ user }) => {
    return (
        <div className="w-100 pl-3">
            <BrowserRouter>
                <Navbar
                    fixed="fixed-top"
                    bg="dark"
                    variant="dark"
                    className="mb-1"
                >
                    <Navbar.Brand>
                        <img
                            className="img-fluid img-responsive"
                            src={require("../../images/logo.png")}
                            alt="Grenade"
                        />
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <td className="mt-4">
                            <Nav.Link exact href="/">
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
                            <Nav.Link href="/about">
                                <FontAwesomeIcon
                                    icon={faQuestionCircle}
                                    color="rgb(47, 153, 224)"
                                    size="2x"
                                />
                                <p>About Us</p>
                            </Nav.Link>
                        </td>
                    </Nav>
                    <SearchBox />
                    <LoginStatus user={user} />
                </Navbar>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

MainNavBar.propTypes = { user: oneOfType([bool, object]) };

export default MainNavBar;
