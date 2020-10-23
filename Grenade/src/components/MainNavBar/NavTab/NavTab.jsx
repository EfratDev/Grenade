import React from "react";
import PropTypes from "prop-types";

function NavTab({ onSelect, isExact, href }) {
    return (
        <td>
            <Nav.Link onSelect={onSelect} exact={true} href="/">
                <FontAwesomeIcon
                    icon={faHome}
                    size="2x"
                    color="rgb(199, 67, 67)"
                />
                <p>Home</p>
            </Nav.Link>
        </td>
    );
}

NavTab.propTypes = {};

export default NavTab;
