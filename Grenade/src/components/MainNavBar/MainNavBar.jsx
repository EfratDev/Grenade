import React from "react";
import PropTypes from "prop-types";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import "./MainNavBar.css";
import LoginStatus from "./LoginStatus";

const MainNavBar = ({ user }) => {
    return (
        <div className="w-100 pl-2">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        className="img-fluid img-responsive"
                        src={require("../../images/logo.png")}
                        alt="logo"
                    />
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                    />
                </Form>
                <Button variant="outline-warning">
                    <LoginStatus user={user} />
                </Button>
            </Navbar>
        </div>
    );
};

MainNavBar.propTypes = {};

export default MainNavBar;
