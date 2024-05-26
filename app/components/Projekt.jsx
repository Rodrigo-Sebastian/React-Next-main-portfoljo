'use client';
import Link from "next/link";

// komponenter
import PorjektKort from "./ui/PorjektKort";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const projektData = [
    {
        image: '/projekt/projekt-img.jpg',
        category: 'react js',
        name: 'React-To do list',
        description: 'En Todo list byggd med React js med addera, editera och radera komponeneter',
        link: '/',
        github: '/',
    },
    {
        image: '/projekt/projekt-img.jpg',
        category: 'react js',
        name: 'Radix UI theme',
        description: 'Radix UI layout med hjälp av dess komponenter och ReactJs',
        link: '/',
        github: '/',
    },
    {
        image: '/projekt/projekt-img.jpg',
        category: 'javascript',
        name: 'JS-Kalkylator',
        description: 'En Kalkylator/miniräknare utvecklad med Javascript som fokus och med HTML & CSS',
        link: '/',
        github: '/',
    },
    {
        image: '/projekt/projekt-img.jpg',
        category: 'tailwind',
        name: 'Zoom-redesign',
        description: 'Zooms hero sektion byggd med tailwind, en av de första projekt som involverade tailwind',
        link: '/',
        github: '/',
    },
    {
        image: '/projekt/projekt-img.jpg',
        category: 'html / css',
        name: 'Instagram-layout',
        description: 'Det här en enkel layout på Instagrams, hemskärm med hjälp av Html och CSS.',
        link: '/',
        github: '/',
    },
    {
        image: '/projekt/projekt-img.jpg',
        category: 'html / scss',
        name: 'Il-Divino-restaurang',
        description: 'En Hemsida för en italienskt resturang, med 4 sektioner och responsive layout.',
        link: '/',
        github: '/',
    },
];

const Projekt = () => {
  return (
    <section className="relative mb-12 xl:mb-[300px]">
        <div className="container mx-auto md:flex md:flex-col lg:flex-row">
            {/* Text */}
            <div className="flex flex-col items-center mb-10 gap-4 p-4 rounded-xl xl:items-start">
                <h2 className="text-2xl font-bold text-center">Senaste Projekt</h2>
                <p className="text-light text-center">Välkomen! här kan utforska och se mina senaste projekt!</p>
                <Link href='/projekt'></Link>
                <button className="projekt-btn w-[200px]">Besök min Github Repos</button>
            </div>
            {/* Slider */}
            <div className="xl:max-w-[1000px] xl:absolute right-0 top-">
                <Swiper className="h-[480px]" slidesPerView={1} breakpoints = {{640: {slidesPerView: 2}}} spaceBetween={30} modules={[Pagination]} pagination={{clickable: 'true'}}>
                    {/* Visa endast de 4 första */}
                    {projektData.slice(0.4).map((projekt, index) => {
                        return <SwiperSlide key={index}>
                            <PorjektKort projekt={projekt} />
                        </SwiperSlide>
                    })}
                </Swiper>
            </div>
        </div>
    </section>
  )
}

export default Projekt