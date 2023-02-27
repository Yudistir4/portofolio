import Image from 'next/image';
import React from 'react'

import { data } from '../config';

const portofolio = () => {
    return (
        <div className='pb-[150px]'>
            <div className="mt-20 pt-20 " id="portofolio">
                <div className="text-center mb-10 flex items-center">
                    <h2 className="w-full shrink-0 text-4xl font-semibold text-gray-100">
                        Portofolio
                    </h2>
                    <div className="ml-3 h-[1px] flex-1 bg-slate-600"></div>
                </div>
            </div>
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3">
                {data.portofolio.map((val) => (
                    <div
                        key={val.namaProject}
                        className="bg-card w-full p-5 rounded-md flex flex-col gap-3"
                    >
                        <div className="group rounded-md relative aspect-[3/2] overflow-hidden">
                            <Image
                                src={val.cover}
                                layout="fill"
                                objectFit="cover"
                                alt="test"
                                // width={50}
                                // height={50}
                                className="  duration-300 transition-all  "
                            />
                            <div className="backdrop-grayscale group-hover:backdrop-grayscale-0 group-hover:bg-emerald-400/0 transition z-10 bg-emerald-500/40 absolute w-full h-full duration-300"></div>
                        </div>
                        <h3 className="text-gray-100 font-semibold text-lg hover:text-emerald-400">
                            {val.namaProject}
                        </h3>
                        <p>{val.desc}</p>
                        <div className="flex-1"></div>
                        <div className="grid grid-cols-2 gap-2">
                            <a
                                href={val.sc}
                                className="text-center transition font-semibold px-3 py-2 rounded-full border-[1px] hover:bg-emerald-400/10 border-emerald-400 text-emerald-400 cursor-pointer"
                                target="_blank"
                                rel="noreferrer"
                            >
                                CODE
                            </a>
                            <a
                                href={val.demo}
                                className="text-center transition font-semibold px-3 py-2 rounded-full border-[1px] hover:bg-emerald-400/10 border-emerald-400 text-emerald-400 cursor-pointer"
                                target="_blank"
                                rel="noreferrer"
                            >
                                DEMO
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default portofolio