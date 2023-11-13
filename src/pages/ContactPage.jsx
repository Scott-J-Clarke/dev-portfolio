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
        } else if (name === 'message') {
            setErrorMessage('');
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        setErrorMessage(value ? '' : `${name.charAt(0).toUpperCase() + name.slice(1)} cannot be blank.`)
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
        <section className='bg-gray-500 text-white m-5 mx-64 p-4 text-center'>
            <div>
                <form id='contact-form' onSubmit={handleFormSubmit}>
                    <div className='m-4'>
                        <label htmlFor='username' className='mr-2'>Username:</label>
                        <br />
                        <input
                            value={username}
                            type='text'
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            name='username'
                            placeholder='Leave your username'
                            className='w-1/2 px-4 text-black border-2 border-black'
                        />
                    </div>

                    <div className='m-4'>
                        <label htmlFor='email'>Email:</label>
                        <br />
                        <input
                            value={email}
                            type='email'
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            name='email'
                            placeholder='Leave your email'
                            className='w-1/2 px-4 text-black border-2 border-black'
                        />
                    </div>

                    <div className='m-4'>
                        <label htmlFor='message'>Message:</label>
                        <br />
                        <textarea
                            value={message}
                            rows='5'
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            name='message'
                            placeholder='Leave a message'
                            className='w-1/2 px-4 text-black border-2 border-black'
                        />
                    </div>

                    {errorMessage && (
                        <div>
                            <p className='error-text'>{errorMessage}</p>
                        </div>
                    )}
                    <button type='submit' className='m-4 bg-black p-2 rounded-md'>Submit</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;
