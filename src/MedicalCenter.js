import React from 'react'


const handleSubmit = (e) => {
    e.preventDefault();
}

function MedicalCenter() {
    return (
        <iframe
            src="https://covid19.who.int/"
            type="text/html"
            width="100%"
            height="1000px"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
            allowFullScreen="yes"
        ></iframe>
    )
}

export default MedicalCenter;
