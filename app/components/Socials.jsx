'use client'

import Link from "next/link";
import React from 'react'

import { CiInstagram, CiLinkedin  } from "react-icons/ci";
import { BiLogoGithub } from "react-icons/bi";

const  icons = [
  {
    path: '/',
    name: <CiInstagram />
  },
  {
    path: '/',
    name: <CiLinkedin />
  },
  {
    path: '/',
    name: <BiLogoGithub />
  }
]

const Socials = ({containerStyles, iconsStyle}) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return <Link href={icon.path} key={index}><div className={`${iconsStyle}`}>{icon.name}</div></Link>
      })}
      </div>
  )
}

export default Socials