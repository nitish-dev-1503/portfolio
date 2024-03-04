import Tabs from "./components/Tabs";
import Header from "./components/header";
import landing from "./data/landing-data";

export default function Home() {

  const { title, subtitles, links, images, tagline, description } = landing;

  return (
    <main className="flex grow flex-col items-center">
      <Header title={title} subtitles={subtitles} links={links} images={images} tagline={tagline} description={description} openLinkInNewTab={false} />
      <Tabs />
    </main >
  )
}
