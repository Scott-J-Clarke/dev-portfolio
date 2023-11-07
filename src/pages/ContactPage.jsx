import React, { useState } from 'react';
// If using an email validator function, import it here (and develop it in a 'utils' folder).
// Should I import Tailwind so that I can use a form later?

function Contact() {
    // Create 'state' variables for the fields in the contact form.
    // Set their initial values to an empty string:
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input that triggered the change:
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, set the state of either email, username, or message:
        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'username') {
            setUsername(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    // Stop the default behavior of the form submit (which is to refresh the page):
    const handleFormSubmit = (e) => {
        e.preventDefault();

    // First, check to see that an email and username has been entered (go back later to add email validation):
    if (!email || !username) {
        setErrorMessage('Email or username has not been entered into form.');
        // Exit from this code block so user can make correction(s):
        return;
    }

    // Second, check that a message has been entered into the form:
    // if (!setMessage(message)) { // Before altering the line.
    if (!message) {
        setErrorMessage('Message is required in form.');
        return;
    }

    // Finally, after a successful submission, we want to clear the contact form:
    setEmail('');
    setUsername('');
    setMessage('');
    }

// How do I import a Tailwind form?
return (
    <div className='contact-form'>
        <h3>Contact Me</h3>
            <form className='form'>
                <label for='contact-name'>Your Name</label>
                <input
                    value={username}
                    name='username'
                    onChange={handleInputChange}
                    type='text'
                    id='contact-name'
                    placeholder='Your name'
                />

                <label for='contact-email'>Your Email</label>
                <input 
                    value={email}
                    name='email'
                    onChange={handleInputChange}
                    type='email'
                    id='contact-email'
                    placeholder='Your email'
                />

                <label for='contact-message'>Your Message</label>
                <input 
                    value={message}
                    name='message'
                    onChange={handleInputChange}
                    type='message'
                    id='contact-message'
                    placeholder='Your message'
                />

                <button type='button' onClick={handleFormSubmit}>
                    Submit
                </button>
            </form>
    
    {errorMessage && (
        <div>
            <p className='error-text'>{errorMessage}</p>
        </div>
    )}
    </div>
    );
}

export default Contact;
