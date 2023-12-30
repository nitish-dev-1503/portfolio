import { allProjects } from "../../../.contentlayer/generated"
import { notFound } from 'next/navigation';
import { format, parseISO } from 'date-fns';
import Mdx from "../../components/mdx";
import Link from "next/link";

export async function generateStaticParams() {
    return allProjects.map((project) => ({
        slug: project.slug
    }))
}

export const generateMetadata = ({ params }) => {
    const project = allProjects.find((project) => project.slug === params.slug)
    if (!project) throw new Error(`Post not found for slug: ${params.slug}`)
    return { title: project.title }
}

export default function ProjectPage({ params }) {
    const slug = params?.slug;
    const project = allProjects.find((project) => {
        return project.slug === slug;
    });

    if (!project) notFound()

    return (
        <main className="min-h-screen w-full flex grow flex-col">
            <div className="z-10 sticky top-0 backdrop-blur-lg bg-opacity-80 dark:bg-opacity-80 bg-white_smoke dark:bg-jet pt-2 ">
                <Link href='/' className="flex items-center gap-2 hover:gap-3 duration-300 ease-in-out transition-all group w-fit">
                    <svg className=" group-hover:fill-jet group-hover:dark:fill-white_smoke fill-battleship_gray" width="16" height="12" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.5832 14.3933L0.533776 8.34391C0.162553 7.97269 0.162553 7.37082 0.533776 6.99959L6.5832 0.950169C6.95442 0.578946 7.55629 0.578946 7.92752 0.950169C8.29874 1.32139 8.29874 1.92326 7.92752 2.29449L4.18367 6.03833C3.93168 6.29032 4.11015 6.72118 4.46651 6.72118L19.6264 6.72118C19.8473 6.72118 20.0264 6.90026 20.0264 7.12118L20.0264 8.22233C20.0264 8.44324 19.8473 8.62233 19.6264 8.62233L4.46651 8.62233C4.11015 8.62233 3.93168 9.05318 4.18367 9.30517L7.92752 13.049C8.29874 13.4202 8.29874 14.0221 7.92752 14.3933C7.55629 14.7646 6.95442 14.7646 6.5832 14.3933Z" />
                    </svg>
                    <p className=" py-2 text-battleship_gray group-hover:text-jet group-hover:dark:text-white_smoke">Back home</p>
                </Link>
                <hr className=" -z-10 absolute bottom-0 h-px border-0 bg-platinum-400 dark:bg-onyx-600 w-full" />
            </div>

            <div className="mt-20 mb-2 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xl py-1">{project.title}</p>
                <div className="flex gap-2 items-center">
                    {project.website &&
                        <Link href={project.website} target='_blank' className=" gap-2 px-2 h-8 rounded-lg bg-white_smoke dark:bg-jet flex items-center justify-center border border-platinum-400 dark:border-onyx-600 ">
                            <svg className="fill-battleship_gray" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.92 14.04C5.68 13.6 5.47 13.1433 5.29 12.67C5.11 12.1967 4.96 11.7067 4.84 11.2H2.48C2.86667 11.8667 3.35 12.4467 3.93 12.94C4.51 13.4333 5.17333 13.8 5.92 14.04ZM1.8 9.6H4.52C4.48 9.33333 4.45 9.07 4.43 8.81C4.41 8.55 4.4 8.28 4.4 8C4.4 7.72 4.41 7.45 4.43 7.19C4.45 6.93 4.48 6.66667 4.52 6.4H1.8C1.73333 6.66667 1.68333 6.93 1.65 7.19C1.61667 7.45 1.6 7.72 1.6 8C1.6 8.28 1.61667 8.55 1.65 8.81C1.68333 9.07 1.73333 9.33333 1.8 9.6ZM2.48 4.8H4.84C4.96 4.29333 5.11 3.80333 5.29 3.33C5.47 2.85667 5.68 2.4 5.92 1.96C5.17333 2.2 4.51 2.56667 3.93 3.06C3.35 3.55333 2.86667 4.13333 2.48 4.8ZM6.48 4.8H9.52C9.36 4.21333 9.15333 3.66 8.9 3.14C8.64667 2.62 8.34667 2.12 8 1.64C7.65333 2.12 7.35333 2.62 7.1 3.14C6.84667 3.66 6.64 4.21333 6.48 4.8ZM11.16 4.8H13.52C13.1333 4.13333 12.65 3.55333 12.07 3.06C11.49 2.56667 10.8267 2.2 10.08 1.96C10.32 2.4 10.53 2.85667 10.71 3.33C10.89 3.80333 11.04 4.29333 11.16 4.8ZM8 16C6.90667 16 5.87333 15.79 4.9 15.37C3.92667 14.95 3.07667 14.3767 2.35 13.65C1.62333 12.9233 1.05 12.0733 0.63 11.1C0.21 10.1267 0 9.09333 0 8C0 6.89333 0.21 5.85667 0.63 4.89C1.05 3.92333 1.62333 3.07667 2.35 2.35C3.07667 1.62333 3.92667 1.05 4.9 0.63C5.87333 0.21 6.90667 0 8 0C9.10667 0 10.1433 0.21 11.11 0.63C12.0767 1.05 12.9233 1.62333 13.65 2.35C14.3767 3.07667 14.95 3.92333 15.37 4.89C15.79 5.85667 16 6.89333 16 8C16 8.13333 15.9967 8.26667 15.99 8.4C15.9833 8.53333 15.9733 8.66667 15.96 8.8H14.34C14.3667 8.66667 14.3833 8.53667 14.39 8.41C14.3967 8.28333 14.4 8.14667 14.4 8C14.4 7.72 14.3833 7.45 14.35 7.19C14.3167 6.93 14.2667 6.66667 14.2 6.4H11.48C11.52 6.66667 11.55 6.93 11.57 7.19C11.59 7.45 11.6 7.72 11.6 8V8.41C11.6 8.53667 11.5933 8.66667 11.58 8.8H9.98C9.99333 8.66667 10 8.53667 10 8.41V8C10 7.72 9.99 7.45 9.97 7.19C9.95 6.93 9.92 6.66667 9.88 6.4H6.12C6.08 6.66667 6.05 6.93 6.03 7.19C6.01 7.45 6 7.72 6 8C6 8.28 6.01 8.55 6.03 8.81C6.05 9.07 6.08 9.33333 6.12 9.6H8.8V11.2H6.48C6.64 11.7867 6.84667 12.34 7.1 12.86C7.35333 13.38 7.65333 13.88 8 14.36C8.14667 14.1467 8.28667 13.93 8.42 13.71C8.55333 13.49 8.68 13.2667 8.8 13.04V15.96C8.66667 15.9733 8.53667 15.9833 8.41 15.99C8.28333 15.9967 8.14667 16 8 16ZM14.36 15.5L12 13.14V14.92H10.4V10.4H14.92V12H13.12L15.48 14.36L14.36 15.5Z" />
                            </svg>
                            <p className="text-xs text-battleship_gray">Live</p>
                        </Link>}

                    {project.github &&
                        <Link href={project.github} target='_blank' className=" gap-2  px-2 h-8 rounded-lg bg-white_smoke dark:bg-jet flex items-center justify-center border border-platinum-400 dark:border-onyx-600">
                            <svg className="fill-battleship_gray" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.1423 0C3.63982 0 0 3.66665 0 8.2028C0 11.8288 2.33216 14.8981 5.56748 15.9844C5.97198 16.0661 6.12014 15.8079 6.12014 15.5908C6.12014 15.4006 6.10681 14.7488 6.10681 14.0696C3.84182 14.5586 3.37015 13.0918 3.37015 13.0918C3.00615 12.1411 2.46682 11.8968 2.46682 11.8968C1.72549 11.3943 2.52082 11.3943 2.52082 11.3943C3.34315 11.4486 3.77465 12.2363 3.77465 12.2363C4.50248 13.4856 5.67531 13.1326 6.14714 12.9153C6.21447 12.3856 6.43031 12.0189 6.65947 11.8153C4.85298 11.6251 2.95232 10.919 2.95232 7.76813C2.95232 6.8718 3.27565 6.13847 3.78798 5.56814C3.70715 5.36448 3.42399 4.52231 3.86898 3.39515C3.86898 3.39515 4.55648 3.17782 6.10664 4.23715C6.77032 4.05759 7.45476 3.96625 8.1423 3.96548C8.8298 3.96548 9.53063 4.06065 10.1778 4.23715C11.7281 3.17782 12.4156 3.39515 12.4156 3.39515C12.8606 4.52231 12.5773 5.36448 12.4964 5.56814C13.0223 6.13847 13.3323 6.8718 13.3323 7.76813C13.3323 10.919 11.4316 11.6115 9.61163 11.8153C9.90829 12.0733 10.1643 12.5621 10.1643 13.3363C10.1643 14.4363 10.151 15.3191 10.151 15.5906C10.151 15.8079 10.2993 16.0661 10.7036 15.9846C13.9389 14.8979 16.2711 11.8288 16.2711 8.2028C16.2844 3.66665 12.6313 0 8.1423 0Z" />
                            </svg>
                            <p className="text-xs text-battleship_gray">GitHub</p>
                        </Link>}

                    {project.medium &&
                        <Link href={project.medium} target='_blank' className=" gap-2 px-2 h-8 rounded-lg bg-white_smoke dark:bg-jet flex items-center justify-center border border-platinum-400 dark:border-onyx-600 ">
                            <svg className=" fill-battleship_gray" width="16" height="16" viewBox="0 0 38 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 0C9.55546 -3.04414e-08 8.12506 0.284523 6.79048 0.837325C5.4559 1.39013 4.24327 2.20038 3.22183 3.22183C2.20038 4.24327 1.39013 5.4559 0.837325 6.79048C0.284523 8.12506 0 9.55546 0 11C0 12.4445 0.284523 13.8749 0.837325 15.2095C1.39013 16.5441 2.20038 17.7567 3.22183 18.7782C4.24327 19.7996 5.4559 20.6099 6.79048 21.1627C8.12506 21.7155 9.55546 22 11 22C12.4445 22 13.8749 21.7155 15.2095 21.1627C16.5441 20.6099 17.7567 19.7996 18.7782 18.7782C19.7996 17.7567 20.6099 16.5441 21.1627 15.2095C21.7155 13.8749 22 12.4445 22 11C22 9.55546 21.7155 8.12506 21.1627 6.79048C20.6099 5.4559 19.7996 4.24327 18.7782 3.22183C17.7567 2.20038 16.5441 1.39013 15.2095 0.837325C13.8749 0.284523 12.4445 -3.04414e-08 11 0V0ZM28.2857 0.785714C27.0354 0.785714 25.8363 1.86186 24.9522 3.77741C24.0681 5.69296 23.5714 8.291 23.5714 11C23.5714 13.709 24.0681 16.307 24.9522 18.2226C25.8363 20.1381 27.0354 21.2143 28.2857 21.2143C29.536 21.2143 30.7351 20.1381 31.6192 18.2226C32.5033 16.307 33 13.709 33 11C33 8.291 32.5033 5.69296 31.6192 3.77741C30.7351 1.86186 29.536 0.785714 28.2857 0.785714ZM36.1429 3.14286C35.7261 3.14286 35.3264 3.97066 35.0317 5.44416C34.737 6.91766 34.5714 8.91616 34.5714 11C34.5714 13.0838 34.737 15.0823 35.0317 16.5558C35.3264 18.0293 35.7261 18.8571 36.1429 18.8571C36.5596 18.8571 36.9593 18.0293 37.254 16.5558C37.5487 15.0823 37.7143 13.0838 37.7143 11C37.7143 8.91616 37.5487 6.91766 37.254 5.44416C36.9593 3.97066 36.5596 3.14286 36.1429 3.14286Z" />
                            </svg>
                            <p className="text-xs text-battleship_gray">Medium</p>
                        </Link>}
                </div>
            </div>
            <div className=" mb-20 flex flex-wrap gap-2 items-center justify-between text-sm text-battleship_gray  ">
                <time dateTime={project.date} className="">
                    {format(parseISO(project.date), 'LLLL d, yyyy')}
                </time>
                <p>{project.category} / {project.discipline}</p>
            </div>
            <article className="max-w-4xl w-full m-auto mb-32 ">
                <Mdx code={project.body.code} />
            </article>
        </main >
    );
}