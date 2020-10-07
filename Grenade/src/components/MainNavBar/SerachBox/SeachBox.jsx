import React from "react";

import "./SearchBox.css";

function SeachBox() {
    return (
        <div class="search-box">
            <input type="text" className="search-input" />
            <a href="github.com" className="search-btn">
                <div class="search-ico">
                    <embed src="" type="image/svg+xml" />
                </div>
            </a>
        </div>
    );
}

export default SeachBox;
