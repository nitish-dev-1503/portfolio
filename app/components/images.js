export default function Images({ images }) {

    const imgSize = () => {
        let width = "aspect-video w-full  "
        if (images.length === 2) {
            width = "aspect-square w-full sm:w-[48%] "
        } else if (images.length === 3) {
            width = "aspect-square w-full sm:w-5/12 lg:w-[32%] "
        }

        return width;
    }

    return (
        <div className={` flex gap-4 flex-wrap justify-center items-center text-xl w-full m-auto `}>
            {
                images && images.map((image, index) => {
                    return <div key={index} className={`object-cover rounded-3xl overflow-hidden ${imgSize()} bg-battleship_gray-800`}>
                        <img src={image.src} alt={image.alt} />
                    </div>
                })
            }
        </div>
    )

}