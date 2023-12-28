'use client'
import FlipGame from "./flip-game/flip-game";
import ThemeSwitcher from "./theme-switcher";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import Social from "./social";

export default function Navbar() {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <div className="w-full p-4 bg-platinum dark:bg-onyx border rounded-lg border-platinum-400 dark:border-onyx-600 ">
            <div className="flex items-center justify-between w-full">
                <div className="flex gap-4 items-center">
                    <Link href="/" className=" w-14 h-14 rounded-lg bg-white_smoke dark:bg-jet flex items-center justify-center border border-platinum-400 dark:border-onyx-600">
                        <svg className="fill-battleship_gray" width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.8321 16H12.9877C12.8896 16 12.796 15.9591 12.7293 15.8874L6.52825 9.22365C6.08134 8.74352 5.27744 9.05965 5.27744 9.71564V15.647C5.27744 15.8418 5.11951 15.9997 4.92466 15.9997H0.352778C0.157933 15.9997 0 15.8418 0 15.647V0.353042C0 0.158197 0.157933 0.000263516 0.352778 0.000263516H3.65408C3.84892 0.000263516 4.00686 0.158197 4.00686 0.353042V1.22761C4.00686 1.42245 3.84892 1.58038 3.65408 1.58038H1.9329C1.73805 1.58038 1.58012 1.73832 1.58012 1.93316V14.0668C1.58012 14.2617 1.73805 14.4196 1.9329 14.4196H3.34401C3.53886 14.4196 3.69679 14.2617 3.69679 14.0668V5.69771C3.69679 5.04172 4.50069 4.72559 4.9476 5.20572L13.4169 14.307C13.4836 14.3787 13.5772 14.4196 13.6753 14.4196H15.4748C15.5465 14.4196 15.6045 14.3616 15.6045 14.2899C15.6045 14.2182 15.6625 14.1602 15.7342 14.1602H17.1849V15.647C17.1852 15.8421 17.027 16 16.8321 16ZM17.1852 14.2627H15.605V1.81557C15.605 1.68558 15.4996 1.58038 15.3699 1.58038H13.7233C13.5933 1.58038 13.4881 1.68585 13.4881 1.81557V8.84714C13.4881 8.97713 13.3829 9.08233 13.2529 9.08233H12.1432C12.0132 9.08233 11.908 8.97686 11.908 8.84714V0.235186C11.908 0.105201 12.0134 0 12.1432 0H16.95C17.08 0 17.1852 0.105464 17.1852 0.235186V14.2627Z" />
                            <path d="M20.6199 16C21.5943 16 22.3843 15.2101 22.3843 14.2356C22.3843 13.2611 21.5943 12.4712 20.6199 12.4712C19.6454 12.4712 18.8555 13.2611 18.8555 14.2356C18.8555 15.2101 19.6454 16 20.6199 16Z" />
                        </svg>
                    </Link>
                    <div>
                        <p className=" text-xl">Nitish Sharma</p>
                        <p className="text-sm text-battleship_gray">Designer & Developer</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <ThemeSwitcher />
                    <motion.div onClick={() => setIsExpanded(!isExpanded)} className=" cursor-pointer w-10 h-10 rounded-lg bg-white_smoke dark:bg-jet flex items-center justify-center border  border-platinum-400 dark:border-onyx-600 " >
                        <motion.svg className=" fill-battleship_gray" initial={{ rotate: 0 }} animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9998 14.9499C11.8665 14.9499 11.7415 14.9291 11.6248 14.8874C11.5081 14.8457 11.3998 14.7749 11.2998 14.6749L6.6998 10.0749C6.51647 9.89157 6.4248 9.65824 6.4248 9.3749C6.4248 9.09157 6.51647 8.85824 6.6998 8.6749C6.88314 8.49157 7.11647 8.3999 7.3998 8.3999C7.68314 8.3999 7.91647 8.49157 8.0998 8.6749L11.9998 12.5749L15.8998 8.6749C16.0831 8.49157 16.3165 8.3999 16.5998 8.3999C16.8831 8.3999 17.1165 8.49157 17.2998 8.6749C17.4831 8.85824 17.5748 9.09157 17.5748 9.3749C17.5748 9.65824 17.4831 9.89157 17.2998 10.0749L12.6998 14.6749C12.5998 14.7749 12.4915 14.8457 12.3748 14.8874C12.2581 14.9291 12.1331 14.9499 11.9998 14.9499Z" />
                        </motion.svg>
                    </motion.div>
                </div>
            </div>
            {isExpanded && <hr className="h-px bg-battleship_gray border-0 my-4 " />}
            {isExpanded && <FlipGame />}
            {isExpanded && <hr className="h-px bg-battleship_gray border-0 my-4 " />}
            {isExpanded && <Social />}
        </div>
    );
}