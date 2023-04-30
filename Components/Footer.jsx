import React from 'react'

import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";


function Footer() {
  return (
    <div className='footer-container'>
      <p>2023 JSM Headphones All right reserverd</p>
      <p className='icons'>
        <AiFillInstagram />
        <BsTwitter/>
      </p>
    </div>
  )
}

export default Footer