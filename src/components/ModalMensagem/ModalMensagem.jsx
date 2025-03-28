import React from 'react'

const ModalMensagem = ( {message} ) => {
  return (
    <div style={{
        position: 'absolute',
        top: '10vh',
        left: '10vw',
        maxWidth: 'max-content',
        backgroundColor: 'white',
        borderRadius: '2rem',
        padding: '2rem',
        boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.25)',
        border: '0.1rem solid rgba(0, 0, 0, 0.20)'
    }}>{message.length && message}</div>
  )
}

export default ModalMensagem