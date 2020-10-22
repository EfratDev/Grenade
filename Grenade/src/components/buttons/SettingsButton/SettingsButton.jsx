import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

function SettingsButton() {
    return (
        <button className="pr-0" href="/about-us">
            <FontAwesomeIcon
                icon={faCog}
                color="rgb(177, 169, 176)"
                size="2x"
            />
        </button>
    );
}

export default SettingsButton;
