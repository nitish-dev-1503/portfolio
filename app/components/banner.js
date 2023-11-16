'use client'
import Social from "./social";
import StaggeredText from "./staggered-text";
import { motion } from "framer-motion";

export default function Banner() {
    return (
        <div className="w-full">
            <div className=' p-4 w-full mt-32 md:my-32 flex md:flex-col gap-2 font-semibold items-center text-2xl md:text-8xl justify-start'>
                <StaggeredText text="Imagine." />
                <div className='flex items-center gap-6 divide-x-2 divide-midnight_black dark:divide-whisper_white'>
                    <StaggeredText text="Create." delay="0.5" />
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className=' max-w-sm lg:max-w-3xl text-lg mt-6 pl-6 hidden md:flex flex-col gap-1 pb-2 items-start font-normal'>
                        <span className=' text-mossy font-semibold '>Nitish Sharma</span>
                        {/* <h1 className="bg-mossy inline-block text-transparent bg-clip-text font-semibold">Nitish Sharma</h1> */}
                        <span>I'm a designer who can code and a coder who can design.</span>
                    </motion.div>
                </div>
                <StaggeredText text="Improve." />
            </div>

            <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className=' p-4 text-lg my-6 mb-32 md:hidden w-full flex flex-col gap-1 pb-2 items-start font-normal'>
                <span className=' text-mossy font-semibold '>Nitish Sharma</span>
                <span>I'm a designer who can code and a coder who can design.</span>
            </motion.div>

            <div className=" p-6 w-full bg-platinum dark:bg-raisin_black gap-6 flex flex-col items-center justify-center py-32 mb-32">
                <Social />
                <p className="text-lg max-w-xl  text-center">My <u>experience</u> as a developer and <u>passion</u> toward design when combined with your vision will end up in a great <u>result</u>.</p>
            </div>
        </div>
    );
}