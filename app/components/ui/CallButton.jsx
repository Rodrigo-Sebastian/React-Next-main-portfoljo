"use client"

import React from 'react'

const CallButton = ({ phoneNumber, buttonStyles }) => {
  return (
    <a href={`tel:${phoneNumber}`} className={`btn ${buttonStyles}`}>Kontakta mig!</a>
  )
}

export default CallButton;