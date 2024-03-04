import { allProjects } from "../../../.contentlayer/generated"
import { notFound } from 'next/navigation';
import Header from "@/app/components/header";
import { promises as fs } from 'fs';
import Content from "@/app/components/content";

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

export default async function ProjectPage({ params }) {

    const slug = params?.slug;

    const filePath = `${process.cwd()}/app/data/projects/${slug}.json`;
    const file = await fs.readFile(filePath, 'utf8');
    const project = JSON.parse(file);

    // const project = allProjects.find((project) => {
    //     return project.slug === slug;
    // });

    if (!project) notFound()

    return (
        <main className="min-h-screen w-full flex grow flex-col">
            <Header title={project.title} subtitles={project.subtitles} links={project.links} tagline={project.tagline} description={project.description} images={project.images} />
            <Content content={project.content} />
        </main >
    );
}