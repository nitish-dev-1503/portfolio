export default function About() {

    return (
        <div className="w-full py-16 ">
            <p className=" leading-6 text-justify">Namaste! 🙏<br /> I'm a developer from Bharat with 3.5 years of experience, working with backend as well as frontend technologies. But beyond the lines of code, I'm also a passionate designer, using my graphic design skills to help small businesses and organizations find their visual voice / brand identity that resonates with their audience. </p>
            <div className=" mt-12">
                <p className="text-xl my-4">Work Experience</p>
                <div>
                    <div className="flex items-center gap-3">
                        <div className=" w-10 h-10 flex items-center justify-center  bg-platinum dark:bg-onyx border rounded-lg border-platinum-400 dark:border-onyx-600">
                            <svg className="fill-battleship_gray" width="19.2" height="12" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.125 4.99984L5.54167 8.4165C5.69444 8.56928 5.77083 8.74637 5.77083 8.94775C5.77083 9.14914 5.69444 9.32623 5.54167 9.479C5.38889 9.63178 5.21181 9.70817 5.01042 9.70817C4.80903 9.70817 4.6296 9.62943 4.47213 9.47196L0.520833 5.52067C0.451389 5.44567 0.399306 5.36442 0.364583 5.27692C0.329861 5.18942 0.3125 5.09567 0.3125 4.99567C0.3125 4.89567 0.329861 4.80192 0.364583 4.71442C0.399306 4.62692 0.451389 4.54845 0.520833 4.479L4.47917 0.520671C4.62732 0.367893 4.80324 0.291504 5.00694 0.291504C5.21065 0.291504 5.38889 0.367893 5.54167 0.520671C5.69444 0.673448 5.77083 0.851691 5.77083 1.0554C5.77083 1.25909 5.69444 1.43502 5.54167 1.58317L2.125 4.99984ZM13.875 4.99984L10.4583 1.58317C10.3056 1.43039 10.2292 1.25331 10.2292 1.05192C10.2292 0.850532 10.3056 0.673448 10.4583 0.520671C10.6111 0.367893 10.7882 0.291504 10.9896 0.291504C11.191 0.291504 11.3704 0.37024 11.5279 0.527713L15.4792 4.479C15.5486 4.554 15.6007 4.63525 15.6354 4.72275C15.6701 4.81025 15.6875 4.904 15.6875 5.004C15.6875 5.104 15.6701 5.19775 15.6354 5.28525C15.6007 5.37275 15.5486 5.45123 15.4792 5.52067L11.5208 9.479C11.3731 9.63178 11.2008 9.7047 11.0038 9.69775C10.8068 9.69081 10.6319 9.61095 10.4792 9.45817C10.3264 9.30539 10.25 9.12715 10.25 8.92344C10.25 8.71975 10.3264 8.54382 10.4792 8.39567L13.875 4.99984Z" />
                            </svg>
                        </div>
                        <p className=" font-medium text-lg">Thoughtworks, India</p>
                    </div>

                    <div className="my-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 flex items-center justify-center" >
                                <div className="w-3 h-3  bg-platinum-400 dark:bg-onyx-600 rounded-full " />
                            </div>
                            <p>Senior Consultant - Application Developer</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-10 flex justify-center" >
                                <div className="w-px h-10 bg-platinum-400 dark:bg-onyx-600 rounded-full " />
                            </div>
                            <p className=" text-battleship_gray text-sm my-1">Sept 2023 - Present</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="w-10 flex items-center justify-center" >
                                <div className="w-3 h-3  bg-platinum-400 dark:bg-onyx-600 rounded-full " />
                            </div>
                            <p>Consultant - Application Developer</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-10 flex justify-center" >
                                <div className="w-px h-10 bg-platinum-400 dark:bg-onyx-600 rounded-full " />
                            </div>
                            <p className=" text-battleship_gray text-sm my-1">July 2020 - Sept 2023</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 flex items-center justify-center" >
                                <div className="w-3 h-3  bg-platinum-400 dark:bg-onyx-600 rounded-full " />
                            </div>
                            <p>Application Developer Intern</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-10 flex justify-center" >
                                {/* <div className="w-px h-10 bg-platinum-400 dark:bg-onyx-600 rounded-full " /> */}
                            </div>
                            <p className=" text-battleship_gray text-sm my-1">Jan 2020 - Mar 2020</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}