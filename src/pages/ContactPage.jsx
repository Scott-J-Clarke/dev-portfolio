import { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
    // Create 'state' variables for contact form fields (set initial values to empty strings):
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

    // Stop default behavior of form submission (wants to refresh the page):
    const handleFormSubmit = (e) => {
        e.preventDefault();

    // First, check to see that an email has been entered:
    const isValid = validateEmail(email);
    if (!isValid) {
        setErrorMessage('Email is not valid.');
        // Exit from this code block so user can make correction(s):
        return;
    }

    // Has a username been entered:
    if (!username) {
        setErrorMessage('Please enter a name.');
        // Exit from this code block so user can make correction(s):
        return;
    }

    // Second, check that a message has been entered into the form:
    if (!message) {
        setErrorMessage('Please enter a message.');
        return;
    }

    // After a successful submission, we want to clear the contact form:
    setEmail('');
    setUsername('');
    setMessage('');
    setErrorMessage('');
    }

    return (
        <section>
            <div className='center'>
                <h2 className='page-header'>Contact Me</h2>
            </div>

            <div>
                <form id='contact-form' onSubmit={handleFormSubmit}>
                    <div>
                        <label>Name:</label>
                        <br></br>
                        <input
                            value={username}
                            type='text'
                            onChange={handleInputChange}
                            name='username'
                        />
                    </div>

                    <div>
                        <label>Email:</label>
                        <br></br>
                        <input
                            value={email}
                            type='email'
                            onChange={handleInputChange}
                            name='email'
                        />
                    </div>

                    <div>
                        <label>Message:</label>
                        <br></br>
                        <textarea
                            value={message}
                            rows='5'
                            onChange={handleInputChange}
                            name='message'
                        />
                    </div>

                    {errorMessage && (
                        <div>
                            <p className='error-text'>{errorMessage}</p>
                        </div>
                    )}
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;
