'use client'
import Socials from "./Socials";
import Badge from "./ui/Badge";

import { BsChevronDown } from "react-icons/bs";
import { IoIosSend } from "react-icons/io";
import { FaCode } from "react-icons/fa6";
import { GiPencilBrush } from "react-icons/gi";
import { GiDiploma } from "react-icons/gi";
import CallButton from "./ui/CallButton";


const Hero = () => {
  return (
    <section className="py-12 mb-20 xl:py-24 h-[84vh] xl:pt-28">
      <div className="container mx-auto">
        <div className="flex flex-col justify-between items-center gap-x-8 md:flex-row xl:flex-row">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase italic mb-2 tracking-[1px]">Front-End utvecklare</div>
            <h1 className="h1 mb-4">Hej, mitt namn är Rodrigo Sebastian</h1>
            <p className="paragraf text-sky-400 max-w-[490px] mx-auto xl:mx-0">Välkomen till mitt Portfoljo-site. 
              Jag designar och utvecklar moderna Webbsidor & webb applikationer!</p>
          {/* Btn */}
            <div className="flex flex-row justify-center items-center gap-4 mb-8 xl:justify-start">
               <a className="projekt-btn transition duration-300 hover:bg-slate-400 hover:text-slate-600" href="/projekt">Senaste projekt</a>
               <div className="kontakt-btn w-[150px] flex items-center gap-2 transition duration-300 ease-in-out hover:bg-sky-400 hover:text-white hover:shadow-lg dark:hover:shadow-black/30">
                <CallButton phoneNumber="+46123456789" buttonStyles="custom-button-styles"/>
                <IoIosSend />
              </div>
            </div>
            {/* Socials */}
            <Socials containerStyles='flex gap-x-4 mx-auto xl:mx-0' iconsStyle='text-3xl transition-all hover:text-slate-600'/>
          </div>
          {/* img */}
          <div className="hidden md:hidden xl:block">
          <Badge containerStyles="absolute top-[40%] -left-[-60rem]" icon ={<FaCode />} badgeNum={3} badgeText='Års erfarenhet'/>
          <Badge containerStyles="absolute top-[20%] -right-[-18rem]" icon ={<GiPencilBrush />} badgeNum={8} badgeText='Utveklade projket'/>
          <Badge containerStyles="absolute top-[70%] -right-[-40rem]" icon ={<GiDiploma />} badgeText='Leg/Utvecklare'/>
          </div>

          <div className=" xl:flex relative">
            <div className="w-[350px] xl:w-[550px] h-[550px]">
              <img src="/hero/hero-image.png" alt="Hero-image"/>
            </div>
          </div>
        </div>      
        {/* Icons */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
        <BsChevronDown className="text-3xl"/>
        </div>
      </div>
    </section>
  )
}

export default Hero