'use client'

import React from 'react'

const Badge = ({containerStyles, icon, badgeNum, badgeText}) => {
  return (
    <div className={`badge ${containerStyles}`}>
        <div className='text-xl text-slate-400'>{icon}</div>
        <div className='flex flex-row gap-1 text-center'>
            <div>
                <h3 className='text-slate-400 font-semibold'>{badgeNum}</h3>
            </div>
            <div>
                <h3 className='text-slate-400 text-xsm'>{badgeText}</h3>
            </div>
        </div>
    </div>
  )
}

export default Badge