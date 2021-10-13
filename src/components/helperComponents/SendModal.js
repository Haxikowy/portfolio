import React, { useEffect } from 'react'
import {FaCheck} from 'react-icons/fa'
import {ImCross} from 'react-icons/im'
import { animated } from 'react-spring'

const SendModal = ({style, status, setShow}) => {
  useEffect(() => {
    const show = setTimeout(() => {
      setShow(prev => !prev)
    }, 3000);

    return () => {
      clearTimeout(show);
    }
  },[setShow])

  const renderText = () => {
    if(status >= 200 && status < 300){
      return (<>
      <FaCheck className="green-hi" />
      Email was sent!
      </>)
    } else {
      return (<>
      <ImCross className="red-hi" />
      {`Error (${status}) ocurred, please contact site administrator.`}
      </>)
    }
  }


  return (
    <animated.div style={style} className="modal__container">
      <div className="modal">
        {renderText()}
      </div>
    </animated.div>
  )
}

export default SendModal
