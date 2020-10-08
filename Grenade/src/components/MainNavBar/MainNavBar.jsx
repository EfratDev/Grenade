import React from "react";
import { oneOfType, bool, object } from "prop-types";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

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

const MainNavBar = ({ user }) => {
    return (
        <div className="w-100 pl-2">
            <Navbar bg="dark" variant="dark" className="mb-1">
                <Navbar.Brand href="#home">
                    <img
                        className="img-fluid img-responsive"
                        src={require("../../images/logo.png")}
                        alt="Grenade"
                    />
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <td className="mt-4">
                        <Nav.Link className="" href="#home">
                            <FontAwesomeIcon
                                icon={faHome}
                                size="2x"
                                color="rgb(199, 67, 67)"
                            />
                            <p className="">Home</p>
                        </Nav.Link>
                    </td>
                    <td className="mt-4">
                        <Nav.Link href="#games">
                            <FontAwesomeIcon
                                icon={faGamepad}
                                size="2x"
                                color="rgb(7, 182, 80)"
                            />
                            <p>Games</p>
                        </Nav.Link>
                    </td>
                    <td className="mt-4">
                        <Nav.Link href="#users">
                            <FontAwesomeIcon
                                icon={faGhost}
                                color="rgb(116, 35, 221)"
                                size="2x"
                            />
                            <p>Users</p>
                        </Nav.Link>
                    </td>
                    <td className="mt-4">
                        <Nav.Link href="#about">
                            <FontAwesomeIcon
                                icon={faQuestionCircle}
                                color="rgb(47, 153, 224)"
                                size="2x"
                            />
                            <p>About Us</p>
                        </Nav.Link>
                    </td>
                </Nav>
                {/* <Form inline>
                    <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                    />
                    <FontAwesomeIcon color="white" icon={faSearch} />
                </Form> */}
                <SearchBox />
                <LoginStatus user={user} />
            </Navbar>
        </div>
    );
};

MainNavBar.propTypes = { user: oneOfType([bool, object]) };

export default MainNavBar;
