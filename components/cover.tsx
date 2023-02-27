import Image from 'next/image'
import React from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { data } from '../config';

import { motion } from 'framer-motion';

const animateCover = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0, transition: { ease: "easeInOut", duration: 1, staggerChildren: 0.1, delayChildren: 0.5 } },
    exit: {}
}

const animateChild = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { ease: 'easeInOut' } },
    // exit: {}
}




const cover = () => {
    return (
        <motion.div
            variants={animateCover}
            initial="initial"
            animate="animate"
            className="h-[100vh] w-full flex flex-col items-center justify-center gap-3"
            id="home"
        >
            <Image
                src="/profilePic.jpg"
                className="rounded-full w-[100px] h-[100px]"
                // layout="fill"
                alt="profile"
                width={100}
                height={100}
            />
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold text-gray-200">
                    Yudistira Maulana
                </h1>
                <p className="text-gray-300">I&apos;m Fullstack developer</p>
            </div>
            <div className="flex items-center">
                <motion.a
                    variants={animateChild}
                    href={data.sosmed.ig}
                    target="_blank"
                    className="h-10 w-10 rounded-full group hover:text-emerald-500 transition text-gray-100 flex items-center justify-center"
                    rel="noreferrer"
                >
                    <FaInstagram
                        size={20}
                        className="group-hover:mb-2 transition-all"
                    />
                </motion.a>
                <motion.a
                    variants={animateChild}
                    href={data.sosmed.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="h-10 w-10 rounded-full group hover:text-emerald-500 transition text-gray-100 flex items-center justify-center"
                >
                    <FiLinkedin
                        size={20}
                        className="group-hover:mb-2 transition-all"
                    />
                </motion.a>
                <motion.a
                    variants={animateChild}
                    href={data.sosmed.github}
                    target="_blank"
                    rel="noreferrer"
                    className="h-10 w-10 rounded-full group hover:text-emerald-500 transition text-gray-100 flex items-center justify-center"
                >
                    <FiGithub size={20} className="group-hover:mb-2 transition-all" />
                </motion.a>
                <motion.a
                    variants={animateChild}
                    href={data.sosmed.wa}
                    target="_blank"
                    rel="noreferrer"
                    className="group-hover-10 w-10 rounded-full group hover:text-emerald-500 transition text-gray-100 flex items-center justify-center"
                >
                    <FaWhatsapp
                        size={20}
                        className="group-hover:mb-2 transition-all"
                    />
                </motion.a>
            </div>
        </motion.div>
    )
}

export default cover