import React, {useEffect, useState} from 'react'
import ContactForm from './helperComponents/ContactForm'
import SendModal from './helperComponents/SendModal';
import {useTransition} from 'react-spring'

const Contact = () => {
  const [status, setStatus] = useState(0);
  const [show, setShow] = useState(false);

  const transition = useTransition(show, {
    from: {top: (window.innerHeight - 100), transform: 'translateY(200px)'},
    enter: {top: (window.innerHeight - 100), transform: 'translateY(0px)'},
    leave: {top: (window.innerHeight - 100), transform: 'translateY(200px)'}
  })

  useEffect(() => {
    if(status > 0){
      setShow(prev => !prev)
    }
  }, [status])

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
        <ContactForm setStatus={setStatus} />
      </article>
        {transition((style, item) => item ? <SendModal style={style} setShow={setShow} status={status} /> : '')}
    </main>
  )
}

export default Contact
