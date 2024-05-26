import React from 'react'
import { PiDownloadSimpleLight } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { IoSchoolOutline } from "react-icons/io5";



const aboutInfo = [
    {
        icon: <CiUser size={20} strokeWidth={0.8} />,
        title: "Rodrigo Sebasitan",
    },
    {
        icon: <CiPhone size={20} strokeWidth={0.8} />,
        title: "+46707764623",
    },
    {
        icon: <CiMail size={20} strokeWidth={0.8} />,
        title: "rodrigo.seb93@gmail.com",
    },
    {
        icon: <CiCalendar size={20} strokeWidth={0.8} />,
        title: "Född 07 april 1993",
    },
    {
        icon: <IoSchoolOutline  size={20} strokeWidth={0.8} />,
        title: "Legitimerad Front-end utvecklare",
    },
]

const About = () => {
  return (
    <section className='xl:h-[860px] pb-12 xl:py-24'>
        <div className='container mx-auto'>
            <h2 className='text-center font-bold uppercase text-xl mb-10'>Om mig Rodrigo Sebastian!</h2>
            <div className=' flex flex-col justify-between gap-6 xl:flex-row-reverse'>
                <div className='flex flex-col text-center gap-4 xl:w-1/2'>
                    <h3 className='font-bold xl:text-end xl:text-6xl xl:mb-8'>Vem är jag? & vad gör jag?!</h3>
                    <p className='text-center font-light xl:text-end xl:text-md xl:font-light'>Mitt namn är Rodrigo Sebastian och jag läste 2 år till Front-End utvecklare på Högskolan!
                        Jag har haft djupt intresse inom Webbutveckling, finner att webbutveckling är intressant,
                        kreativt men även en utmaning som jag välkomnar med öppna händer!
                        jag älskar att vara kreativ och designa samt utveckla små som meddel stora projekt.
                        Under min utbildningsfas har jag kunnat lära mig och fördjupa mina kunskaper inom följande område, som 
                        kan se nedan.
                    </p>
                    <div>
                        {aboutInfo.map((item, index) => {
                            return <div className='flex flex-row gap-2 mt-4 pb-4 items-center justify-center xl:justify-end' key={index}>
                                <div className='text-slate-500'>{item.icon}</div>
                                <h3 className='font-light'>{item.title}</h3>
                            </div>
                        })}
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center gap-8 xl:w-1/2 xl:items-start'>
                    <div className='flex justify-center flex-wrap gap-2 p-4 xl:gap-5 xl:w-[300px] xl:justify-start'>
                        <img className='about-imgs' src="./about/bootstrap.svg" alt="" srcset="" />
                        <img className='about-imgs' src="./about/css.svg" alt="" srcset="" />
                        <img className='about-imgs' src="./about/git.svg" alt="" srcset="" />
                        <img className='about-imgs' src="./about/github.svg" alt="" srcset="" />
                        <img className='about-imgs' src="./about/html.svg" alt="" srcset="" />
                        <img className='about-imgs' src="./about/js.svg" alt="" srcset="" />
                        <img className='about-imgs' src="./about/react.svg" alt="" srcset="" />
                        <img className='about-imgs' src="./about/sass.svg" alt="" srcset="" />
                        <img className='about-imgs' src="./about/tailwind.svg" alt="" srcset="" />
                        <img className='about-imgs' src="./about/vscode.svg" alt="" srcset="" />
                    </div>
                    <div>
                        <a className=' flex items-center text-center gap-2 w-[200px] p-4 rounded-md bg-slate-600 text-white font-thin transition duration-300 hover:bg-slate-400 hover:text-slate-600"' href="/">Ladda ner mitt CV! <PiDownloadSimpleLight /></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About