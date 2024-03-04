import { Vollkorn } from "next/font/google";
import Images from "./images";

const vollkorn = Vollkorn({ weight: ['400', '600', '700'], subsets: ['latin'] })

const componentsMap = {
    heading: ({ level, text }) => {
        const HeadingTag = `h${level}`;
        return <HeadingTag className={`font-semibold text-2xl sm:text-3xl ${vollkorn.className}`}>{text}</HeadingTag>;
    },
    paragraph: ({ text }) => (
        <div className="flex flex-col gap-2">
            {
                text.map((para, index) => {
                    return <p key={index} className="text-lg sm:text-xl  text-justify">{para}</p>
                })
            }
        </div>
    ),
    images: ({ images }) => <Images images={images} />,
    list: ({ items }) => (
        <ul className="list-disc text-lg sm:text-xl list-inside">
            {items.map((item, index) => (
                <li key={index} className=" leading-8 ">{item}</li>
            ))}
        </ul>
    ),
    columns: ({ columns }) => (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {columns.map((column, index) => {
                const Component = componentsMap[column.type];
                if (Component) {
                    return <Component key={index} {...column} />
                }
            }
            )}
        </div>
    ),
    rows: ({ rows }) => (
        <div className="grid grid-cols-1 gap-6 w-full">
            {rows.map((row, index) => {
                const Component = componentsMap[row.type];
                if (Component) {
                    return <Component key={index} {...row} />
                }
            })}
        </div>
    )
};

export default function Content({ content }) {
    return (
        <div className=" flex flex-col gap-32 mb-32">
            {
                content.map((element, index) => {
                    const Component = componentsMap[element.type];
                    if (Component) {
                        return <Component key={index} {...element} />;
                    }
                })
            }
        </div>
    )
}