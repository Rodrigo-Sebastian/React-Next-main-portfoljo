'use client';

import React, { useState } from "react";
import PorjektKort from "../components/ui/PorjektKort";

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

const uniqueCategories = ['alla projekt', ...new Set(projektData.map((item) => item.category))];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [activeCategory, setActiveCategory] = useState('alla projekt');

  const filteredProjects = projektData.filter(projekt => {
    return activeCategory === 'alla projekt' ? projekt : projekt.category === activeCategory;
  });

  return (
    <section className='min-h-screen pt-12'> 
      <div className="container mx-auto">
        <h2 className="mb-8 xl:mb-16 text-center mx-auto text-3xl font-bold">Mina Projekt</h2>
      </div>
      <div className="container mx-auto mb-20">
        <div className="tabslist cursor-pointer w-full grid justify-items-center gap-1 h-full md:grid-cols-6 lg:max-w-[660px] mb-12 mx-auto">
          {categories.map((category, index) => (
            <div
              onClick={() => setActiveCategory(category)}
              key={index}
              className={`p-2 rounded-md transition-all duration-300 hover:delay-100 hover:bg-slate-300 w-max ${
                category === activeCategory ? 'bg-slate-600 text-white font-light w-max' : ''
              }`}
            >
              {category}
            </div>
          ))}
        </div>
        <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((projekt, index) => (
            <div key={index}><PorjektKort projekt={projekt}/></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;