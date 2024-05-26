import Link from "next/link"
import Image from "next/image"

import { BiLogoGithub } from "react-icons/bi";
import { Link2Icon } from "lucide-react";


const PorjektKort = ({projekt}) => {
  return (
    <div className="Kort flex flex-col gap-6">
        <div className="flex flex-col gap-4 h-full px-8 py-6 border rounded-3xl border-gray-300">
            <div className=" text-sm font-light mb-2 border-md bg-slate-600 w-fit p-2 rounded-md text-white">{projekt.category}</div>
            <h4 className="h4 mb-1 font-bold">{projekt.name}</h4>
            <p className="text-muted-foreground text-md">{projekt.description}</p>
        </div>
            <div className="Kort-header flex flex-row items-center">
                <img className="shadow-2xl rounded-3xl" src={projekt.image} width={247} height={250} alt="projekt-img" srcset="" />
                <div className=" flex flex-col gap-4 ml-20">
                    <Link href={projekt.link} className="bg-slate-600 w-[40px] h-[40px] rounded-full flex justify-center items-center transition-all duration-300 hover:delay-100 hover:bg-slate-400"><Link2Icon className="text-white"/></Link>
                    <Link href={projekt.github} className="bg-slate-600 w-[40px] h-[40px] rounded-full flex justify-center items-center transition-all duration-300 hover:delay-100 hover:bg-slate-400"><BiLogoGithub className="text-white"/></Link>
                </div>
            </div>
    </div>
  )
}

export default PorjektKort