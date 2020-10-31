import React, { useState } from "react";
import { oneOfType, bool, object } from "prop-types";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import "./MainNavBar.css";
import LoginStatus from "./LoginStatus";

import SettingsButton from "../buttons/SettingsButton/SettingsButton";
import { Background, Backgrounds } from "../Backgrounds/Background";
import { Tab, Tabs } from "./Tab/Tab";

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
                    <Tab tab={Tabs.home} onSelect={onSelect} />
                    <Tab tab={Tabs.games} onSelect={onSelect} />
                    <Tab tab={Tabs.users} onSelect={onSelect} />
                    <Tab tab={Tabs.aboutUs} onSelect={onSelect} />
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto"></Nav>
                        <LoginStatus user={user} />
                        <SettingsButton />
                    </Navbar.Collapse>
                </Navbar>
                <Background type={user.background || Backgrounds.Default} />
                <Switch>
                    <Route
                        exact
                        path={Tabs.home.href}
                        component={Tabs.home.component}
                    ></Route>
                    <Route
                        exact
                        path={Tabs.games.href}
                        component={Tabs.games.component}
                    ></Route>
                    <Route
                        exact
                        path={Tabs.users.href}
                        component={Tabs.users.component}
                    ></Route>
                    <Route
                        exact
                        path={Tabs.aboutUs.href}
                        component={Tabs.aboutUs.component}
                    ></Route>
                </Switch>
            </BrowserRouter>
        </span>
    );
};

MainNavBar.propTypes = { user: oneOfType([bool, object]) };

export default MainNavBar;
