import React from "react";
import PropTypes from "prop-types";

function NavTab({ onSelect, isSelected, href }) {
    return (
        <td>
            <Link className="nav-link" onSelect={onSelect} to="/">
                <FontAwesomeIcon
                    icon={faHome}
                    size="2x"
                    color="rgb(199, 67, 67)"
                />
                <p>Home</p>
            </Link>
        </td>
    );
}

NavTab.propTypes = {};

export default NavTab;
