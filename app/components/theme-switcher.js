import { useTheme } from 'next-themes'

export default function ThemeSwitcher() {
    const { systemTheme, theme, setTheme } = useTheme()

    const renderThemeChanger = () => {
        const currentTheme = theme === "system" ? systemTheme : theme;

        if (currentTheme === "dark") {
            return (
                <div className='hover:bg-platinum cursor-pointer dark:hover:bg-raisin_black rounded-lg w-8 h-8 flex items-center justify-center' onClick={() => setTheme('light')} >
                    <svg className=' fill-midnight_black dark:fill-whisper_white' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.99497 12.9481C7.90088 12.9481 6.97016 12.5628 6.2028 11.7923C5.43544 11.0218 5.05176 10.0895 5.05176 8.99545C5.05176 7.90137 5.43701 6.97065 6.20751 6.20329C6.97801 5.43593 7.9103 5.05225 9.00438 5.05225C10.0985 5.05225 11.0292 5.4375 11.7965 6.208C12.5639 6.9785 12.9476 7.91079 12.9476 9.00487C12.9476 10.099 12.5623 11.0297 11.7918 11.797C11.0213 12.5644 10.089 12.9481 8.99497 12.9481ZM0.749674 9.69808C0.558008 9.69808 0.393772 9.6301 0.256966 9.49414C0.120161 9.35817 0.0517578 9.19498 0.0517578 9.00456C0.0517578 8.81413 0.120161 8.64947 0.256966 8.51058C0.393772 8.37169 0.558008 8.30225 0.749674 8.30225H2.74967C2.94134 8.30225 3.10558 8.37023 3.24238 8.50618C3.37919 8.64216 3.44759 8.80535 3.44759 8.99577C3.44759 9.1862 3.37919 9.35086 3.24238 9.48975C3.10558 9.62863 2.94134 9.69808 2.74967 9.69808H0.749674ZM15.2497 9.69808C15.058 9.69808 14.8938 9.6301 14.757 9.49414C14.6202 9.35817 14.5518 9.19498 14.5518 9.00456C14.5518 8.81413 14.6202 8.64947 14.757 8.51058C14.8938 8.37169 15.058 8.30225 15.2497 8.30225H17.2497C17.4413 8.30225 17.6056 8.37023 17.7424 8.50618C17.8792 8.64216 17.9476 8.80535 17.9476 8.99577C17.9476 9.1862 17.8792 9.35086 17.7424 9.48975C17.6056 9.62863 17.4413 9.69808 17.2497 9.69808H15.2497ZM9.00407 3.44808C8.81364 3.44808 8.64898 3.37968 8.51009 3.24287C8.3712 3.10607 8.30176 2.94183 8.30176 2.75016V0.750163C8.30176 0.558496 8.36974 0.394259 8.5057 0.257454C8.64167 0.120648 8.80486 0.0522461 8.99528 0.0522461C9.18571 0.0522461 9.35037 0.120648 9.48926 0.257454C9.62815 0.394259 9.69759 0.558496 9.69759 0.750163V2.75016C9.69759 2.94183 9.62961 3.10607 9.49365 3.24287C9.35768 3.37968 9.19449 3.44808 9.00407 3.44808ZM9.00407 17.9481C8.81364 17.9481 8.64898 17.8797 8.51009 17.7429C8.3712 17.6061 8.30176 17.4418 8.30176 17.2502V15.2502C8.30176 15.0585 8.36974 14.8943 8.5057 14.7575C8.64167 14.6206 8.80486 14.5522 8.99528 14.5522C9.18571 14.5522 9.35037 14.6206 9.48926 14.7575C9.62815 14.8943 9.69759 15.0585 9.69759 15.2502V17.2502C9.69759 17.4418 9.62961 17.6061 9.49365 17.7429C9.35768 17.8797 9.19449 17.9481 9.00407 17.9481ZM4.07259 5.06266L3.03092 4.00016C2.88509 3.86822 2.81217 3.71197 2.81217 3.53141C2.81217 3.35086 2.88856 3.18766 3.04134 3.04183C3.17238 2.896 3.33188 2.82134 3.51982 2.81787C3.70778 2.8144 3.86773 2.88558 3.99967 3.03141L5.06217 4.07308C5.21495 4.21809 5.29134 4.38496 5.29134 4.57368C5.29134 4.76242 5.21495 4.9293 5.06217 5.07431C4.93023 5.21932 4.76877 5.29009 4.5778 5.28662C4.38683 5.28315 4.21842 5.2085 4.07259 5.06266ZM13.9997 14.9689L12.9372 13.9272C12.7913 13.786 12.7167 13.6223 12.7132 13.4359C12.7097 13.2496 12.7844 13.08 12.9372 12.9272C13.0691 12.7814 13.2306 12.7102 13.4215 12.7137C13.6125 12.7172 13.7809 12.7918 13.9268 12.9377L14.9684 14.0002C15.1143 14.1321 15.1872 14.2884 15.1872 14.4689C15.1872 14.6495 15.1141 14.8127 14.968 14.9585C14.8224 15.1043 14.6611 15.179 14.484 15.1825C14.307 15.1859 14.1455 15.1147 13.9997 14.9689ZM12.9255 5.06266C12.7805 4.93072 12.7097 4.76926 12.7132 4.57829C12.7167 4.38732 12.7913 4.21891 12.9372 4.07308L13.9997 3.03141C14.1455 2.88558 14.3052 2.81614 14.4788 2.82308C14.6525 2.83002 14.8122 2.90324 14.958 3.04273C15.1038 3.18102 15.1785 3.3387 15.182 3.51579C15.1854 3.69287 15.1143 3.85433 14.9684 4.00016L13.9268 5.06266C13.7817 5.21544 13.6149 5.29183 13.4262 5.29183C13.2374 5.29183 13.0705 5.21544 12.9255 5.06266ZM3.04134 14.9585C2.89551 14.8275 2.82086 14.668 2.81738 14.48C2.81391 14.2921 2.88509 14.1321 3.03092 14.0002L4.07259 12.9377C4.2138 12.8057 4.37757 12.738 4.5639 12.7345C4.75025 12.7311 4.91981 12.7988 5.07259 12.9377C5.21842 13.0835 5.28642 13.2496 5.27659 13.4359C5.26674 13.6223 5.19527 13.786 5.06217 13.9272L3.99967 14.9689C3.86773 15.1147 3.71148 15.1859 3.53092 15.1825C3.35037 15.179 3.18717 15.1043 3.04134 14.9585Z" />
                    </svg>
                </div>
            )
        }

        else {
            return (
                <div className='hover:bg-platinum cursor-pointer rounded-lg w-8 h-8 flex items-center justify-center' onClick={() => setTheme('dark')} >
                    <svg className=' fill-midnight_black dark:fill-whisper_white' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.99967 13.9481C5.07606 13.9481 3.43717 13.271 2.08301 11.9169C0.728841 10.5627 0.0517578 8.9238 0.0517578 7.00019C0.0517578 5.27102 0.628147 3.74324 1.78092 2.41685C2.9337 1.09046 4.36426 0.316158 6.07259 0.093936C6.26704 0.0661582 6.43197 0.0869916 6.56738 0.156436C6.7028 0.22588 6.80176 0.326575 6.86426 0.458519C6.92676 0.583519 6.95106 0.738033 6.93717 0.922061C6.92329 1.10609 6.86079 1.2988 6.74967 1.50019C6.58995 1.7988 6.46495 2.11998 6.37467 2.46373C6.2844 2.80748 6.23926 3.15296 6.23926 3.50019C6.23926 4.69463 6.65072 5.70331 7.47363 6.52623C8.29655 7.34914 9.30523 7.7606 10.4997 7.7606C10.8538 7.7606 11.1976 7.7172 11.5309 7.63039C11.8643 7.54359 12.1872 7.41685 12.4997 7.25019C12.7011 7.13213 12.892 7.06963 13.0726 7.06269C13.2531 7.05574 13.4059 7.08699 13.5309 7.15644C13.6559 7.22588 13.7531 7.32831 13.8226 7.46373C13.892 7.59914 13.9129 7.7606 13.8851 7.9481C13.6698 9.65644 12.9059 11.0835 11.5934 12.2294C10.2809 13.3752 8.74967 13.9481 6.99967 13.9481Z" />
                    </svg>
                </div>
            )
        }
    };

    return (
        <>
            {renderThemeChanger()}
        </>
    )
}
