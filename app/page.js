import Blogs from './components/blogs';
import Projects from './components/projects';
import Banner from './components/banner';

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Banner />
      <Projects />
      <Blogs />
    </main >
  )
}
