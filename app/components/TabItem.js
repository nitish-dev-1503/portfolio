export default function TabItem({ id, title, activeTab, setActiveTab }) {

    const handleClick = () => {
        setActiveTab(id);
    };

    const commonStyle = "cursor-pointer py-2 duration-300 ease-in-out border-b-2 text-lg sm:text-xl ";

    return (
        <li onClick={handleClick}
            className={`${commonStyle} + ${activeTab === id ? "border-b-jet dark:border-b-white_smoke"
                : " border-b-transparent text-battleship_gray hover:dark:text-white_smoke hover:text-jet "}`}>{title}</li>
    );
};
