import {Sheet,SheetContent, SheetTrigger} from '@/app/components/ui/sheet'
import { PiSquaresFourLight } from "react-icons/pi";


import Nav from './Nav';
import Logo from './Logo';
import Socials from './Socials';


const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <PiSquaresFourLight className='cursor-pointer text-white text-2xl' />
      </SheetTrigger>
      <SheetContent className="bg-sky-950 border-none text-white">
        <div className='flex flex-col items-center justify-between h-full py-8'>
          <div className='flex flex-col items-center gap-y-32'>
            <Logo />
            <Nav containerStyles="flex flex-col items-center gap-y-6" linkStyles="text-xl font-thin"/>
          </div>
          <Socials containerStyles="flex gap-x-4" iconsStyle="text-2xl"/>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav