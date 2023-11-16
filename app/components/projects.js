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
        <div className='w-full mb-32 p-6'>
            <div className='w-full m-auto grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-6'>
                {
                    allProjects && allProjects
                        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                        .map((project, index) => {
                            return (
                                <Link key={index} href={project.url} className='flex flex-col group'>
                                    <motion.div
                                        initial="hidden"
                                        animate="hidden"
                                        whileHover="visible"
                                        className=' cursor-pointer bg-secondary w-full aspect-square relative object-fill overflow-hidden'>
                                        <Image src={project.cover} width='1000' height='1000' className='object-cover' alt='Work cover' />
                                    </motion.div>
                                    <motion.p variants={titleVariant} className='mt-6 text-sm'>{project.discipline}</motion.p>
                                    <motion.p variants={titleVariant} className=' text-lg font-semibold'>{project.title}</motion.p>
                                </Link>
                            );
                        })
                }
            </div>
        </div>
    );
}