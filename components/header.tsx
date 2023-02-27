import React from 'react'
import { motion } from 'framer-motion';

const animateHeader = {
    initial: {
        opacity: 0, y: -100
    },
    animate: {
        opacity: 1, y: 0, transition: {
            duration: 1,
            ease: "easeInOut"
        }
    }
}
const header = () => {
    return (
        <motion.header variants={animateHeader} initial="initial" animate="animate" className="flex items-center justify-center bg-[#0A192F]/50 w-full h-14 fixed  backdrop-blur-sm shadow-lg shadow-[#0A192F] gap-8 px-5 z-50">
            {/* <div className="flex-1"></div> */}
            <a
                href="#home"
                className="font-semibold text-white hover:text-emerald-400 transition"
            >
                Home
            </a>
            <a
                href="#about"
                className="font-semibold text-white hover:text-emerald-400 transition"
            >
                About
            </a>
            <a
                href="#skills"
                className="font-semibold text-white hover:text-emerald-400 transition"
            >
                Skills
            </a>
            <a
                href="#portofolio"
                className="font-semibold text-white hover:text-emerald-400 transition"
            >
                Portofolio
            </a>
        </motion.header>
    )
}

export default header