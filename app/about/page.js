import Content from "../components/content";
import Header from "../components/header";
import about from "../data/about";

export default function AboutMe() {

    const { title, subtitles, links, images, tagline, description, content } = about;

    return (
        <main className="flex grow flex-col items-center">
            <Header title={title} subtitles={subtitles} links={links} images={images} tagline={tagline} description={description} />
            <Content content={content} />
        </main >
    )
}