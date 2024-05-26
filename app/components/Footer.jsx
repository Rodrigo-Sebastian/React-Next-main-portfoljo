import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="bg-slate-800 py-12">
      <div className="container mw-auto">
        <div className="flex flex-col items-center">
          {/* socials */}
          <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0 mb-4'  iconsStyle='text-3xl text-white transition-all hover:text-slate-600' />
          <div className="text-white font-light">
              Copyright, &copy; Alla rättigheter tillhör Rodrigo Sebastian.
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer