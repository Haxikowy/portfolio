import React, {useRef, useState} from 'react'
import emailjs from 'emailjs-com'
import {service_id,template_id, user_id} from '../api'

const ContactForm = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [error, setError] = useState('');

  const form = useRef();

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  }

  const sendEmail = e => {
    e.preventDefault();
    if(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email)){
      emailjs.sendForm(service_id, template_id, form.current, user_id).then(result => props.setStatus(result.status))
      setError('');
      resetForm();
    } else {
      setError('Enter correct e-mail address.')
    }
  }

  return (
    <form className="ContactForm" ref={form} onSubmit={sendEmail}>
      <label htmlFor="name" className="contact__label">
        <input onChange={e => setName(e.target.value.trimStart())} id="name" type="text" name="user_name" required value={name} />
        <span className="label__text">Name</span>
        <span className="label__border"></span>
      </label>
      <label htmlFor="email" className="contact__label">
        <input onChange={e => setEmail(e.target.value.trim())} id="email" type="text" name="user_email" required value={email}/>
        <span className="label__text">E-mail</span>
        <span style={error.length > 0 ? {backgroundColor: 'var(--red)'} : null} className="label__border"></span>
        <span className="label__error">{error}</span>
      </label>
      <label htmlFor="message" className="contact__label">
        <textarea onChange={e => setMessage(e.target.value)} id="message" name="message" required value={message}/>
        <span className="label__text">Message</span>
        <span className="label__border"></span>
      </label>
      <button className="button" type="submit">Send</button>
    </form>
  )
}

export default ContactForm
