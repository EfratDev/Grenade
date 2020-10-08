import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SearchBox.css";

function SeachBox() {
    return (
        <div class="search-box">
            <input type="text" class="search-input" />
            <a href="bla" class="search-btn">
                <div class="search-ico">
                    <FontAwesomeIcon icon={faSearch} color="rgb(7, 182, 80)" />
                </div>
            </a>
        </div>
    );
}

export default SeachBox;
