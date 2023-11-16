import { allProjects } from "../../../.contentlayer/generated"
import { notFound } from 'next/navigation';
import Header from "./header";
import Mdx from "../../components/mdx";

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
        <main className="min-h-screen w-full flex flex-col items-center p-4">
            <Header title={project.title} category={project.category} date={project.date} discipline={project.discipline} />
            <article className="max-w-4xl w-full m-auto mb-32 ">
                <Mdx code={project.body.code} />
            </article>
        </main>
    );
}