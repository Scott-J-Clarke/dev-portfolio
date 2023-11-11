import { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
    // 'state' variables for contact form fields are set to empty strings:
    const [formState, setFormState] = useState({
        email: '',
        username: '',
        message: ''
    })

    const [errorMessage, setErrorMessage] = useState('');

    const { email, username, message } = formState;

    const handleInputChange = (e) => {
        // Getting the value and name of the input that triggered the change:
        const { name, value } = e.target;
        setFormState({...formState, [name]: value })

        // Based on the input type, set the state of either email, username, or message:
        if (name === 'email') {
            const isValid = validateEmail(value);
            setErrorMessage(isValid ? '' : 'Email is not valid.');
        } else if (name === 'username') {
            setErrorMessage(value ? '' : 'Please enter a username.')
        }
    };

    const handleBlur = (e) => {
        setErrorMessage(`${e.target.name.charAt(0).toUpperCase() + e.target.name.slice(1)} cannot be blank.`)
    }

    // Stop default behavior of form submission (wants to refresh the page):
    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!message.trim()) {
            setErrorMessage('Message cannot be empty.');
            return;
        }

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
    if (!message.length) {
        setErrorMessage('Message cannot be empty.');
        return;
    }

    // After a successful submission, we want to clear the contact form:
    setFormState({ email: '', username: '', message: ''});
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
                        <label htmlFor='username'>Name:</label>
                        <br />
                        <input
                            value={username}
                            type='text'
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            name='username'
                        />
                    </div>

                    <div>
                        <label htmlFor='email'>Email:</label>
                        <br />
                        <input
                            value={email}
                            type='email'
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            name='email'
                        />
                    </div>

                    <div>
                        <label htmlFor='message'>Message:</label>
                        <br />
                        <textarea
                            value={message}
                            rows='5'
                            onChange={handleInputChange}
                            onBlur={handleBlur}
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
