'use client'
import { motion } from "framer-motion";
import blogs from "../data/blogs";
import { format, parseISO } from 'date-fns';
import Link from "next/link";

export default function Blogs() {
    const cardVariant = {
        offscreen: {
            opacity: 0,
            y: -20
        },
        onscreen: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 2
            }
        }
    }

    return (
        <div className="w-full py-16 ">
            <div className="w-full grid grid-cols-1 gap-12 items-center  ">
                {
                    blogs && blogs
                        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                        .map((blog, index) => {
                            return (
                                <motion.div
                                    key={index}
                                    variants={cardVariant}
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    viewport={{ once: true, amount: 0.8 }}
                                    className=' '>

                                    <h1 className='text-xl my-2'>{blog.title}</h1>

                                    <hr className="h-px bg-battleship_gray border-0 mb-2 " />
                                    <p className='my-2 line-clamp-2 text-battleship_gray text-sm'>{blog.description}</p>
                                    <hr className="h-px bg-battleship_gray border-0 mb-2 " />

                                    <div className=" mt-3 flex flex-wrap items-start justify-between">
                                        {blog.publishedAt.length &&
                                            <div className='flex gap-2 items-center'>
                                                {blog.publishedAt.map((platform) => {
                                                    return <Link key={platform.url} className=' px-2 h-8 rounded-lg bg-white_smoke dark:bg-jet flex items-center justify-center border border-platinum-400 dark:border-onyx-600 gap-2' href={platform.url} target='_blank'>
                                                        <svg className=" fill-battleship_gray" width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M4.36 9.26981L3.24 8.14981L5.66 5.70981H0V4.1098H5.66L3.24 1.6698L4.36 0.549805L8.72 4.9098L4.36 9.26981ZM8.8 8.90981V7.30981H16V8.90981H8.8ZM8.8 2.5098V0.909805H16V2.5098H8.8ZM11.2 5.70981V4.1098H16V5.70981H11.2Z" />
                                                        </svg>
                                                        <p className="text-xs text-battleship_gray">{platform.platform}</p>
                                                    </Link>
                                                })}
                                            </div>
                                        }
                                        <time dateTime={blog.date} className="flex gap-2 items-center text-sm text-battleship_gray">
                                            {format(parseISO(blog.date), 'LLLL d, yyyy')}
                                        </time>
                                    </div>
                                </motion.div>
                            );
                        })
                }
            </div>
        </div>
    );
}