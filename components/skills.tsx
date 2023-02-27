/* eslint-disable react/jsx-key */
import React from 'react'
import { AiFillHtml5 } from 'react-icons/ai';
import { TbBrandNextjs } from 'react-icons/tb';
import { DiCss3 } from 'react-icons/di';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiChakraui, SiFramer, SiMaterialui, SiTailwindcss, SiExpress, SiMongodb, SiTypescript, SiFirebase, SiGraphql, SiRedux } from 'react-icons/si';
import { motion } from 'framer-motion';


const skillIcons = [
    <AiFillHtml5 />,
    <FaReact />,
    <TbBrandNextjs />,
    <FaNodeJs />,
    <SiExpress />,
    <SiMongodb />,
    <SiTypescript />,
    <SiFirebase />,
    <SiGraphql />,
    <SiRedux />,
    <DiCss3 />,
    <SiTailwindcss />,
    <SiChakraui />,
    <SiMaterialui />,
    <SiFramer />,
]

const animationIcon = {
    animate: {
        y: [0, -40, 0],
        x: 0,

    },
    transition: { ease: "easeInOut", duration: 2, repeatDelay: 2, repeat: Infinity }
}

const skills = () => {
    return (
        <div id="skills">
            <div className="mt-20 pt-20"  >
                <div className="text-center mb-10 flex items-center">
                    <h2 className="w-full shrink-0 text-4xl font-semibold text-gray-100">
                        Skills
                    </h2>
                </div>
            </div>
            <div className='flex gap-5 flex-wrap justify-center   max-w-md m-auto'>
                {skillIcons.map((icon, i) => <motion.div transition={{ ease: "easeInOut", duration: 2, repeatDelay: Math.floor(Math.random() * 10) + 10, repeat: Infinity }} animate={{
                    y: [0, -20, 0],
                    x: 0,
                }} className='text-4xl hover:text-white cursor-pointer transition-all'>{icon}</motion.div>)}
            </div>

        </div >
    )
}

export default skills


// HTML AiFillHtml5
// React FaReact
// Next js TbBrandNextjs
// Node.js FaNodeJs
// Express js SiExpress
// Mongodb SiMongodb
// Typescript SiTypescript
// Firebase SiFirebase
// GraphQL SiGraphql
// Redux SiRedux
// Zustand

// css DiCss3
// Tailwind SiTailwindcss
// Chakra UI SiChakraui
// Material UI SiMaterialui
// React Query
// Framer motion SiFramer
// JWT

// Golang
// Gin
// Gorm
// Echo
