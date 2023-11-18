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

            <p className="mt-16 text-xl py-2">{project.title}</p>
            <div className=" mb-16 flex flex-wrap gap-2 items-center justify-between text-sm text-battleship_gray  ">
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