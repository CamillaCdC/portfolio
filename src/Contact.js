import React, { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({});
    const [message, setMessage] = useState("");

    const handleInput = e => {
        const copyFormData = { ...formData };
        copyFormData[e.target.name] = e.target.value;
        setFormData(copyFormData);
    };

    const sendData = async e => {
        e.preventDefault();
        const {name, email, message} = formData
        try {
            const response = await fetch(
                "https://v1.nocodeapi.com/camillacdc/google_sheets/VqgNmAJgOwiTAush?tabId=Sheet1",
                {
                    method: "post",
                    body: JSON.stringify([[name, email, message]]),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );
            const json = await response.json();
            console.log("Success:", JSON.stringify(json));
            setMessage("Owl Sent");
        } catch (error) {
            console.error("Error:", error);
            setMessage("Error");
        }
    };
    
    return (
        <div className="App">
            <form
                className="input-form"
                id="contact"
                name="contact"
                required
                onSubmit={sendData}
            >
                <p>
                Your name:&ensp;
                    <input
                        name="name" 
                        type="text"
                        placeholder="Harry Potter"
                        required
                        onChange={handleInput}
                        style={{ width: "60%" }}
                    />
                </p>

                <p>
                Your email:&ensp;
                    <input
                        name="email"
                        type="email"
                        placeholder="harry_potter@hogwarts.com"
                        required
                        onChange={handleInput}
                        style={{ width: "60%" }}
                    />
                </p>
                
                <p>
                    <textarea
                        rows="12"
                        cols="85"
                        name="message"
                        placeholder="Type your message here..."
                        onChange={handleInput}
                    />
                </p>
                
                <p>
                    <input name="submit" type="submit" value="Send" />
                    {message}
                </p>
            </form>
        </div>
    );
}