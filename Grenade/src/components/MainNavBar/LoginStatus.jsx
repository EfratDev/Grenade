import React from "react";
import { oneOfType, bool, object } from "prop-types";

import Button from "react-bootstrap/Button";
import UserLink from "../buttons/UserLink/UserLink";

function LoginStatus({ user }) {
    if (user && user.username) {
        return (
            <Button variant="outline-warning">
                <UserLink user={user} />
            </Button>
        );
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
