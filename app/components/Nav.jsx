'use client';
//Links Next-js
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import Link from "next/link";

// next hooks
import { usePathname } from "next/navigation";

// framer motion
import {motion} from 'framer-motion';

const Links = [
    {path: '/', name:'hem', scrollTo: 'hero'},
    {path: '/#about', name:'om', scrollTo: 'about'},
    {path: '/projekt', name:'projekt'},
    {path: '/#cta', name:'kontakt', scrollTo: 'cta'},
];

/*
const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
    const path = usePathname();
  return (
    <nav className={`${containerStyles}`}>
        {Links.map((link, index)=>{
            return <Link href={link.path} key={index} className={`capitalize ${linkStyles}`}
            >
            {link.path === path && (
                <motion.span 
                initial={{y: '-100%'}} 
                animate={{y: 0}}
                transition={{type: 'tween'}} 
                layoutId='underline' 
                className={`${underlineStyles}`}/>
            )}
            {link.name}</Link>
        })}
    </nav>
  );
};

export default Nav;*/

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
    const path = usePathname();

    return (
        <nav className={`${containerStyles}`}>
            {Links.map((link, index) => {
                const isCurrentPage = link.path === path || link.path === `/${path.split('/')[1]}`; // Check for current path
                const isHashLink = link.path.includes('#');

                return isHashLink ? (
                    <ScrollLink
                        key={index}
                        to={link.scrollTo}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        className={`capitalize cursor-pointer ${linkStyles}`}
                    >
                        {isCurrentPage && (
                            <motion.span
                                initial={{ y: '-100%' }}
                                animate={{ y: 0 }}
                                transition={{ type: 'tween' }}
                                layoutId='underline'
                                className={`${underlineStyles}`}
                            />
                        )}
                        {link.name}
                    </ScrollLink>
                ) : (
                    <Link href={link.path} key={index} className={`capitalize ${linkStyles}`}>
                        {isCurrentPage && (
                            <motion.span
                                initial={{ y: '-100%' }}
                                animate={{ y: 0 }}
                                transition={{ type: 'tween' }}
                                layoutId='underline'
                                className={`${underlineStyles}`}
                            />
                        )}
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Nav;