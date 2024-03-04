import { Vollkorn } from "next/font/google";
import Link from "next/link";
import Images from "./images";

const vollkorn = Vollkorn({ weight: ['600'], subsets: ['latin'] })

export default function Header({ title, subtitles, links, images, tagline, description, openLinkInNewTab = true }) {

    return (
        <div className="my-44 flex flex-col gap-44">
            <div className="">
                <p className={`font-semibold text-4xl text-center ${vollkorn.className}`}>{title}</p>
                {
                    subtitles.length > 0 &&
                    <div className="flex flex-wrap gap-4 justify-center items-center my-2 text-xl">
                        {subtitles && subtitles[0]}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.732643 4.9046C-1.15669 2.16195 2.16243 -1.15716 4.90508 0.732173L10.2986 4.44762C11.3234 5.15356 12.6776 5.15356 13.7024 4.44761L19.0959 0.732169C21.8385 -1.15717 25.1576 2.16195 23.2683 4.9046L19.5529 10.2981C18.8469 11.3229 18.8469 12.6771 19.5529 13.7019L23.2683 19.0954C25.1576 21.8381 21.8385 25.1572 19.0959 23.2678L13.7024 19.5524C12.6776 18.8464 11.3234 18.8464 10.2986 19.5524L4.90507 23.2678C2.16242 25.1572 -1.15669 21.838 0.732647 19.0954L4.44809 13.7019C5.15403 12.6771 5.15403 11.3229 4.44809 10.2981L0.732643 4.9046Z" fill="#E6B464" />
                        </svg>
                        {subtitles && subtitles[1]}
                    </div>
                }


                <div className="flex flex-wrap gap-4 justify-center items-center mt-4 text-xl">
                    {
                        links && links.map((link, index) => {
                            return <Link href={link.url} target={openLinkInNewTab && "_blank"} key={index} className=" p-2 group flex items-center gap-1 duration-150 ease-in-out hover:text-battleship_gray text-base">{link.label}
                                <svg className=" fill-jet group-hover:fill-battleship_gray group-hover:translate-x-1 duration-150 ease-in-out" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M11.736 5.20385C12.0376 4.91996 12.5123 4.93435 12.7962 5.23598L16.7962 9.48598C17.068 9.77477 17.068 10.2252 16.7962 10.514L12.7962 14.764C12.5123 15.0657 12.0376 15.08 11.736 14.7962C11.4343 14.5123 11.42 14.0376 11.7038 13.736L14.5142 10.75H3.75C3.33579 10.75 3 10.4142 3 10C3 9.58579 3.33579 9.25 3.75 9.25H14.5142L11.7038 6.26403C11.42 5.9624 11.4343 5.48774 11.736 5.20385Z" />
                                </svg>
                            </Link>
                        })
                    }
                </div>
            </div>

            {images.length > 0 && <Images images={images} />}

            <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <p className={`font-semibold text-2xl sm:text-3xl ${vollkorn.className}`}>{tagline}</p>
                <p className=" text-lg sm:text-xl text-justify">{description}</p>
            </div>
        </div>
    )
}