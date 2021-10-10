import React from 'react'
import ContactForm from './helperComponents/ContactForm'

const Contact = () => {
  return (
    <main className="Contact container">
      <h1 className="contact__title">haxikowy<span className="highlight">.</span><span className="green-hi">contact</span>()</h1>
      <article className="contact__content">
        <div className="contact__info">
          <p className="contact__detail--container">tel.
          <span className="contact__detail">+48 694 705 668</span></p>
          <p className="contact__detail--container">e-mail
          <span className="contact__detail">szymon2407@hotmail.com</span></p>
        </div>
        <ContactForm />
      </article>
    </main>
  )
}

export default Contact
