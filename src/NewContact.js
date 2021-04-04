import React, { useState, useEffect } from "react";
import './NewContact.css';
import db  from './firebase.js';



const NewContact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        db.collection("contacts").add({
            name: name,
            email: email,
            message: message,
        }).then(() => {
            setLoader(false);
            alert("Your message has been submitted");
        }).catch((error) => {
            alert(error.message);
            setLoader(false);
        });



        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h1>Contact Us</h1>

            <label>Name</label>
            <input
                placeholder="Full Name"
                value={name}
                rules={[{ required: true, message: 'Please input your full name!' }]}
                onChange={(e) => setName(e.target.value)}
            />

            <label>Email</label>
            <input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <label>Message</label>
            <textarea
                placeholder="Message"
                value={message}
                rules={[{ required: true, message: 'Please input your email!' }]}
                onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button
                type="submit"
                style={{ background: loader ? "#ccc" : " #2e81f4" }}
            >
                Submit
      </button>
        </form>
    );
};

export default NewContact;