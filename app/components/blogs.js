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
                                            <div className='flex gap-4 items-center group text-sm '>
                                                {blog.publishedAt.map((platform) => {
                                                    return <Link key={platform.url} className=' text-xs flex items-center gap-2 hover:underline bg-platinum dark:bg-onyx border border-platinum-400 dark:border-onyx-600 rounded-lg py-2 px-3' href={platform.url} target='_blank'>
                                                        {platform.platform}
                                                        <svg className=" fill-battleship_gray" width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1.7565 13.5831C1.38139 13.5831 1.06432 13.4536 0.80529 13.1946C0.546262 12.9356 0.416748 12.6185 0.416748 12.2434V1.75625C0.416748 1.38114 0.546262 1.06407 0.80529 0.805046C1.06432 0.546018 1.38139 0.416504 1.7565 0.416504H6.13787C6.29161 0.416504 6.42032 0.467928 6.524 0.570775C6.62768 0.673623 6.67952 0.801289 6.67952 0.953775C6.67952 1.10627 6.62768 1.23541 6.524 1.34117C6.42032 1.44694 6.29161 1.49982 6.13787 1.49982H1.7565C1.69239 1.49982 1.63362 1.52653 1.58019 1.57994C1.52677 1.63337 1.50006 1.69214 1.50006 1.75625V12.2434C1.50006 12.3075 1.52677 12.3663 1.58019 12.4197C1.63362 12.4731 1.69239 12.4998 1.7565 12.4998H12.2436C12.3077 12.4998 12.3665 12.4731 12.4199 12.4197C12.4734 12.3663 12.5001 12.3075 12.5001 12.2434V7.862C12.5001 7.70827 12.5515 7.57956 12.6543 7.47588C12.7572 7.3722 12.8848 7.32036 13.0373 7.32036C13.1898 7.32036 13.3189 7.3722 13.4247 7.47588C13.5305 7.57956 13.5834 7.70827 13.5834 7.862V12.2434C13.5834 12.6185 13.4539 12.9356 13.1948 13.1946C12.9358 13.4536 12.6187 13.5831 12.2436 13.5831H1.7565ZM12.5001 2.27384L5.45519 9.31871C5.3398 9.4341 5.2156 9.48966 5.0826 9.48538C4.94959 9.4811 4.82272 9.4186 4.702 9.29788C4.58128 9.17716 4.52091 9.04816 4.52091 8.91088C4.52091 8.77359 4.58128 8.64458 4.702 8.52386L11.726 1.49982H9.54171C9.38797 1.49982 9.25926 1.44839 9.15558 1.34555C9.0519 1.24271 9.00006 1.11505 9.00006 0.962546C9.00006 0.81006 9.0519 0.680935 9.15558 0.575171C9.25926 0.469393 9.38797 0.416504 9.54171 0.416504H13.5834V4.45817C13.5834 4.61191 13.532 4.74062 13.4291 4.8443C13.3263 4.94798 13.1986 4.99982 13.0461 4.99982C12.8936 4.99982 12.7645 4.94798 12.6587 4.8443C12.5529 4.74062 12.5001 4.61191 12.5001 4.45817V2.27384Z" />
                                                        </svg>
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