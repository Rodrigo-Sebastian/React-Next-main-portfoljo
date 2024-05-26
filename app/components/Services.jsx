import React from 'react'

import { PiFigmaLogoThin } from "react-icons/pi";
import { PiDesktopTowerThin } from "react-icons/pi";
import { FaReact } from "react-icons/fa";



const servicesData = [
    {
        icon: <PiFigmaLogoThin size={60} strokeWidth={0.8}/>,
        title: 'UI & UX design',
        description: 'Moderna och praktiska design, skisade med enbart det bästa av UI & UX design kan erbjuda.',
    },
    {
        icon: <FaReact  size={60} strokeWidth={0.8} />,
        title: 'Webbutveckling',
        description: 'Utveckling från design till snabb och mobilanpassad hemsida med hjälp av moderna tekniker, som React & Wordpress',
    },
    {
        icon: <PiDesktopTowerThin size={60} strokeWidth={0.8} />,
        title: 'Deployment',
        description: 'Uppladning av din hemsida till nätet med snabbt serverleverans och kontinuelligt stödtjänster.',
    },
]

const Services = () => {
  return (
    <section className='mb-12 xl:mb-36'>
        <div className="container mx-auto">
            <h2 className='section-title mb-36 xl:mb-24 text-center mx-auto text-xl uppercase font-semibold'>Mina Tjänster</h2>
            {/* Grid */}
            <div className='grid xl:grid-cols-3 justify-center gap-y-20 xl:gap-y-24 xl:gap-x-8'>
                {servicesData.map((item, index) => {
                    return <div className='w-full max-w-[420px] h-[300px] border border-gray-300 rounded-3xl flex flex-col pt-15 pb-10 justify-center items-center relative' 
                            key={index}>
                            <div className='kort-header absolute -top-[60px]'>
                            <div className='w-[100px] h-[120px] rounded-md bg-[#eeeeee] dark:bg-[#2e323a]  flex justify-center items-center'>
                                {item.icon}</div>
                            </div>
                            <h2 className='kort-title text-xl font-semibold'>{item.title}</h2>
                            <div className='kort-info text-center p-4 font-light'>
                                {item.description}
                            </div>
                    </div>
                })}
            </div>
        </div>
    </section>
  )
}

export default Services