'use client'
import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import ThemeSwitcher from "./theme-switcher";
import Link from "next/link";

export default function Navbar() {
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();
    const variants = {
        visible: { y: 0, opacity: 1 },
        hidden: { y: -25, opacity: 0 }
    };

    useEffect(() => {
        return scrollY.on("change", () => {
            if (scrollY?.current < scrollY?.prev) {
                setHidden(false);
            } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
                setHidden(true);
            }
        });
    });


    return (
        <motion.div
            variants={variants}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="flex items-center justify-between gap-4 text-sm w-full p-6 lg:p-0 max-w-4xl m-auto my-4 fixed top-0 left-0 right-0 z-20">
            <Link href="/">
                <svg className="fill-midnight_black dark:fill-whisper_white" width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.8321 16H12.9877C12.8896 16 12.796 15.9591 12.7293 15.8874L6.52825 9.22365C6.08134 8.74352 5.27744 9.05965 5.27744 9.71564V15.647C5.27744 15.8418 5.11951 15.9997 4.92466 15.9997H0.352778C0.157933 15.9997 0 15.8418 0 15.647V0.353042C0 0.158197 0.157933 0.000263516 0.352778 0.000263516H3.65408C3.84892 0.000263516 4.00686 0.158197 4.00686 0.353042V1.22761C4.00686 1.42245 3.84892 1.58038 3.65408 1.58038H1.9329C1.73805 1.58038 1.58012 1.73832 1.58012 1.93316V14.0668C1.58012 14.2617 1.73805 14.4196 1.9329 14.4196H3.34401C3.53886 14.4196 3.69679 14.2617 3.69679 14.0668V5.69771C3.69679 5.04172 4.50069 4.72559 4.9476 5.20572L13.4169 14.307C13.4836 14.3787 13.5772 14.4196 13.6753 14.4196H15.4748C15.5465 14.4196 15.6045 14.3616 15.6045 14.2899C15.6045 14.2182 15.6625 14.1602 15.7342 14.1602H17.1849V15.647C17.1852 15.8421 17.027 16 16.8321 16ZM17.1852 14.2627H15.605V1.81557C15.605 1.68558 15.4996 1.58038 15.3699 1.58038H13.7233C13.5933 1.58038 13.4881 1.68585 13.4881 1.81557V8.84714C13.4881 8.97713 13.3829 9.08233 13.2529 9.08233H12.1432C12.0132 9.08233 11.908 8.97686 11.908 8.84714V0.235186C11.908 0.105201 12.0134 0 12.1432 0H16.95C17.08 0 17.1852 0.105464 17.1852 0.235186V14.2627Z" />
                    <path d="M20.6199 16C21.5943 16 22.3843 15.2101 22.3843 14.2356C22.3843 13.2611 21.5943 12.4712 20.6199 12.4712C19.6454 12.4712 18.8555 13.2611 18.8555 14.2356C18.8555 15.2101 19.6454 16 20.6199 16Z" />
                </svg>
            </Link>
            <ThemeSwitcher />
        </motion.div>
    );
}