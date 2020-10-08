import React from "react";
import { oneOfType, bool, object } from "prop-types";

import Button from "react-bootstrap/Button";

import UserConnectedButton from "../buttons/UserConnectedButton/UserConnectedButton";

function LoginStatus({ user }) {
    if (user && user.username) {
        return <UserConnectedButton user={user} />;
    } else {
        return (
            <div>
                <Button variant="outline-info">Login</Button>
                <Button variant="outline-warning">Sign up</Button>
            </div>
        );
    }
}

LoginStatus.propTypes = { user: oneOfType([bool, object]) };

export default LoginStatus;
