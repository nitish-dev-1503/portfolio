'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { allProjects } from '../../.contentlayer/generated'

export default function Projects() {
    const titleVariant = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3
            }
        },
        hidden: {
            opacity: 0,
            y: 10,
            transition: {
                duration: 0.3
            }
        }
    }

    const overlayVariant = {
        visible: {
            opacity: 1,
            transition: {
                duration: 0.3
            }
        },
        hidden: {
            opacity: 0,
            transition: {
                duration: 0.3
            }
        }
    }

    return (
        <div className='w-full py-16'>
            <div className='w-full m-auto grid grid-col-1 md:grid-cols-2 gap-x-6 gap-y-12'>
                {
                    allProjects && allProjects
                        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                        .map((project, index) => {
                            return (
                                <Link key={index} href={project.url} className={` ${index === 0 ? ' ' : ''} flex flex-col group`}>
                                    <motion.div
                                        initial="hidden"
                                        animate="hidden"
                                        whileHover="visible"
                                        className='  cursor-pointer bg-secondary w-full flex items-center relative object-fill overflow-hidden rounded-lg'>
                                        <Image src={project.cover} width='1000' height='1000' className='object-cover' alt='Work cover' />
                                        <motion.div variants={overlayVariant} className=' hover:visible absolute top-0 bottom-0 left-0 right-0 backdrop-blur-sm'>
                                        </motion.div>
                                    </motion.div>

                                    <div className='flex items-center justify-between mt-2'>
                                        <p className='text-sm text-battleship_gray'>{project.category}</p>
                                        <p className='text-sm text-battleship_gray'>{project.discipline}</p>
                                    </div>
                                    <hr className="h-px bg-battleship_gray border-0 my-2 " />
                                    <p className='text-xl '>{project.title}</p>
                                </Link>
                            );
                        })
                }
            </div>
        </div>
    );
}