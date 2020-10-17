import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SearchBox.css";

function SearchBox() {
    return (
        <div className="search-box">
            <input type="text" className="search-input" />
            <a href="bla" className="search-btn">
                <div className="search-ico">
                    <FontAwesomeIcon icon={faSearch} color="rgb(7, 182, 80)" />
                </div>
            </a>
        </div>
    );
}

export default SearchBox;
