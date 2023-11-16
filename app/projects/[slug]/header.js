'use client'
import { motion } from "framer-motion";
import { format, parseISO } from 'date-fns';

export default function Header({ title, category, date, discipline }) {

    return (
        <header className='w-full max-w-4xl font-semibold mt-24'>
            <motion.div
                initial={{ opacity: 0, }}
                animate={{ opacity: 1, transition: { duration: 1.5 } }}
                className="mt-24 mb-12 flex-col flex gap-2">
                <p className='text-2xl'>{title}</p>
                <hr className="h-px bg-midnight_black dark:bg-whisper_white border-0 my-2 " />
                <div className=" flex flex-wrap gap-2 items-center justify-between text-sm font-normal ">
                    <time dateTime={date} className=" flex gap-2 items-center">
                        <svg className=" fill-raisin_black dark:fill-whisper_white" width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.00469 12.9165C8.46351 12.9165 8.00451 12.7297 7.62771 12.356C7.2509 11.9823 7.0625 11.5249 7.0625 10.9837C7.0625 10.4425 7.24934 9.98352 7.62302 9.60671C7.99669 9.22991 8.45412 9.0415 8.99531 9.0415C9.53649 9.0415 9.99549 9.22834 10.3723 9.60202C10.7491 9.97569 10.9375 10.4331 10.9375 10.9743C10.9375 11.5155 10.7507 11.9745 10.377 12.3513C10.0033 12.7281 9.54588 12.9165 9.00469 12.9165ZM1.58333 15.7915C1.19949 15.7915 0.870882 15.6524 0.597521 15.3742C0.324174 15.096 0.1875 14.7698 0.1875 14.3957V3.56234C0.1875 3.1882 0.324174 2.86202 0.597521 2.58382C0.870882 2.30561 1.19949 2.1665 1.58333 2.1665H3.1875V0.864421C3.1875 0.672754 3.25548 0.508517 3.39144 0.371712C3.52741 0.234906 3.6906 0.166504 3.88102 0.166504C4.07145 0.166504 4.23611 0.234906 4.375 0.371712C4.51389 0.508517 4.58333 0.672754 4.58333 0.864421V2.1665H9.41667V0.864421C9.41667 0.672754 9.48465 0.508517 9.6206 0.371712C9.75658 0.234906 9.91977 0.166504 10.1102 0.166504C10.3006 0.166504 10.4653 0.234906 10.6042 0.371712C10.7431 0.508517 10.8125 0.672754 10.8125 0.864421V2.1665H12.4167C12.8005 2.1665 13.1291 2.30561 13.4025 2.58382C13.6758 2.86202 13.8125 3.1882 13.8125 3.56234V14.3957C13.8125 14.7698 13.6758 15.096 13.4025 15.3742C13.1291 15.6524 12.8005 15.7915 12.4167 15.7915H1.58333ZM1.58333 14.3957H12.4167V7.0415H1.58333V14.3957Z" />
                        </svg>
                        {format(parseISO(date), 'LLLL d, yyyy')}
                    </time>
                    <p>{category} / {discipline}</p>
                </div>
            </motion.div>
        </header>
    );
}