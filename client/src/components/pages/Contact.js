
import React, {useState} from 'react';
import background from '../assets/retro-bg.webp'

export function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };
    return (

        <section  className='flex justify-center items-center' style={{backgroundImage:`url(${background})`,
        height:'500px'}}>
      <body className='flex'>
      <form className="grid sm:grid-cols-2 items-start gap-14 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md"id="contact-form" onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder='Name' name="name" defaultValue={name}/>
        </div>
        <br/>
        <div>
          <input type="email" placeholder="Email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <br/>
        <div>
          <textarea name="message" placeholder="Enter Message" rows="4" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button className='hover:bg-cream text-[#7e9342] font-semibold py-2 px-4 border border-gray-400 rounded shadow' data-testid="button" type="submit">Send Message!</button>
      </form>
    </body>


        </section>
      );
}