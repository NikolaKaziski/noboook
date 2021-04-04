import React from 'react';

function Video() {
    return (
        <iframe
            src="https://www.youtube.com"
            type="text/html"
            width="100%"
            height="1000px"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allowTransparency="true"
            allow="encrypted-media"
            allowFullScreen="yes"
        ></iframe>
    )
}

export default Video;
