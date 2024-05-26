"use client"
import CallButton from "./ui/CallButton"
import { IoIosSend } from "react-icons/io";


const Cta = () => {
  return (
    <section className="py-20 dark:bg-[#3b404b]">
        <div className="container mx-auto">
            <div className="flex flex-col items-center gap-6">
                <h2 className="text-3xl font-bold mb-2">Oavsett vilken typ av Projekt du har, så finns jag redo till tjänst!</h2>
                  <div className="kontakt-btn w-[150px] flex items-center gap-2 transition duration-300 ease-in-out hover:bg-sky-400 hover:text-white hover:shadow-lg dark:hover:shadow-black/30">
                  <CallButton phoneNumber="+46123456789" buttonStyles="custom-button-styles"/>
                  <IoIosSend />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Cta