const links = {
    "linkedIn": "https://www.linkedin.com/in/nitish-sharma-771aa4138/",
    "instagram": "https://www.instagram.com/nitishsharma.design/",
    "behance": "https://www.behance.net/nitish_1503",
    "github": "https://github.com/nitish-dev-1503",
    "medium": "https://nitish1503.medium.com/"
}

function Social() {

    const handleClick = (link_to, target) => {
        window.open(link_to, target, 'noopener,noreferrer')
    }

    const linkedIn = <div onClick={() => handleClick(links["linkedIn"], '_blank')} className=" hover:scale-95 m-auto rounded-full w-8 h-8 ring-midnight_black dark:ring-whisper_white ring-1 hover:ring-raisin_black hover:dark:ring-platinum flex items-center justify-center group  duration-300 ease-in-out cursor-pointer">
        <svg className=" group-hover:fill-raisin_black group-hover:dark:fill-platinum fill-midnight_black dark:fill-whisper_white duration-500 ease-in-out" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.3333 0H2.66667C1.19333 0 0 1.19333 0 2.66667V21.3333C0 22.8067 1.19333 24 2.66667 24H21.3333C22.8067 24 24 22.8067 24 21.3333V2.66667C24 1.19333 22.8067 0 21.3333 0ZM8 18.6667H4.636V9.33333H8V18.6667ZM6.25867 7.62267C5.23067 7.62267 4.544 6.93733 4.544 6.02267C4.544 5.108 5.22933 4.42267 6.372 4.42267C7.4 4.42267 8.08667 5.108 8.08667 6.02267C8.08667 6.93733 7.40133 7.62267 6.25867 7.62267ZM20 18.6667H16.744V13.5653C16.744 12.1547 15.876 11.8293 15.5507 11.8293C15.2253 11.8293 14.14 12.0467 14.14 13.5653C14.14 13.7827 14.14 18.6667 14.14 18.6667H10.776V9.33333H14.14V10.636C14.5733 9.876 15.4413 9.33333 17.0693 9.33333C18.6973 9.33333 20 10.636 20 13.5653V18.6667Z" />
        </svg>
    </div>

    const instagram = <div onClick={() => handleClick(links["instagram"], '_blank')} className=" hover:scale-95 m-auto rounded-full w-8 h-8 ring-midnight_black dark:ring-whisper_white ring-1 hover:ring-raisin_black hover:dark:ring-platinum flex items-center justify-center group  duration-300 ease-in-out cursor-pointer">
        <svg className=" group-hover:fill-raisin_black group-hover:dark:fill-platinum fill-midnight_black dark:fill-whisper_white duration-500 ease-in-out" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.66667 0C2.98533 0 0 2.98533 0 6.66667V17.3333C0 21.0147 2.98533 24 6.66667 24H17.3333C21.0147 24 24 21.0147 24 17.3333V6.66667C24 2.98533 21.0147 0 17.3333 0H6.66667ZM20 2.66667C20.736 2.66667 21.3333 3.264 21.3333 4C21.3333 4.736 20.736 5.33333 20 5.33333C19.264 5.33333 18.6667 4.736 18.6667 4C18.6667 3.264 19.264 2.66667 20 2.66667ZM12 5.33333C15.6813 5.33333 18.6667 8.31867 18.6667 12C18.6667 15.6813 15.6813 18.6667 12 18.6667C8.31867 18.6667 5.33333 15.6813 5.33333 12C5.33333 8.31867 8.31867 5.33333 12 5.33333ZM12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8Z" />
        </svg>
    </div>

    const behance = <div onClick={() => handleClick(links["behance"], '_blank')} className=" hover:scale-95 m-auto rounded-full w-8 h-8 ring-midnight_black dark:ring-whisper_white ring-1 hover:ring-raisin_black hover:dark:ring-platinum flex items-center justify-center group  duration-300 ease-in-out cursor-pointer">
        <svg className=" group-hover:fill-raisin_black group-hover:dark:fill-platinum fill-midnight_black dark:fill-whisper_white duration-500 ease-in-out" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.66667 0C1.19792 0 0 1.19792 0 2.66667V21.3333C0 22.8021 1.19792 24 2.66667 24H21.3333C22.8021 24 24 22.8021 24 21.3333V2.66667C24 1.19792 22.8021 0 21.3333 0H2.66667ZM4.54167 6.25H8C11.0677 6.25 11.5833 8.13542 11.5833 9.33333C11.5833 11.0677 10.3906 11.6146 10.125 11.75C10.3906 11.8854 11.75 12.25 11.75 14.25C11.8854 16.651 10.3854 17.5833 8.25 17.5833H4.54167V6.25ZM13.875 6.25H18.7917V7.58333H13.875V6.25ZM6.79167 8.125V10.9167H8C8.80208 10.9167 9.33333 10.651 9.33333 9.58333C9.33333 8.65104 8.93229 8.125 8 8.125H6.79167ZM16.7917 9.08333C18.6563 9.08333 20 10.1406 20 13.2083V14.125H15.4583C15.4583 14.526 15.4844 16 17.0833 16C18.151 16 18.651 15.474 18.9167 15.2083L19.875 16.5417C19.7396 16.6771 18.8177 17.75 17.0833 17.75C15.0833 17.75 13.4583 16.6771 13.4583 13.875V13.2083C13.4583 10.1406 15.0573 9.08333 16.7917 9.08333ZM16.5417 10.7917C16.1406 10.7917 15.3333 10.9427 15.3333 12.5417H17.5833C17.5833 12.5417 17.875 10.7917 16.5417 10.7917ZM6.79167 12.6667V15.75H8.25C9.05208 15.75 9.45833 15.1823 9.45833 14.25C9.59375 13.1823 9.21875 12.6667 8.41667 12.6667H6.79167Z" />
        </svg>
    </div>

    const gitHub = <div onClick={() => handleClick(links["github"], '_blank')} className=" hover:scale-95 m-auto rounded-full w-8 h-8 ring-midnight_black dark:ring-whisper_white ring-1 hover:ring-raisin_black hover:dark:ring-platinum flex items-center justify-center group  duration-300 ease-in-out cursor-pointer">
        <svg className=" group-hover:fill-raisin_black group-hover:dark:fill-platinum fill-midnight_black dark:fill-whisper_white duration-500 ease-in-out" width="16" height="14" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.9665 0.0856765C5.2725 0.70459 0.692541 5.28455 0.073628 10.8548C-0.545285 16.6725 2.79685 21.8714 7.87193 23.8519C8.24328 23.9757 8.61463 23.7282 8.61463 23.233V21.2525C8.61463 21.2525 8.1195 21.3763 7.50059 21.3763C5.76763 21.3763 5.02493 19.8909 4.90115 19.0244C4.77737 18.5293 4.5298 18.1579 4.15845 17.7866C3.78711 17.6628 3.66332 17.6628 3.66332 17.539C3.66332 17.2915 4.03467 17.2915 4.15845 17.2915C4.90115 17.2915 5.52006 18.1579 5.76763 18.5293C6.38654 19.5195 7.12924 19.7671 7.50059 19.7671C7.99572 19.7671 8.36706 19.6433 8.61463 19.5195C8.73841 18.6531 9.10976 17.7866 9.85245 17.2915C7.00545 16.6725 4.90115 15.0634 4.90115 12.3402C4.90115 10.9785 5.52006 9.61694 6.38654 8.62668C6.26276 8.37911 6.13898 7.7602 6.13898 6.89372C6.13898 6.39859 6.13898 5.65589 6.51032 4.9132C6.51032 4.9132 8.24328 4.9132 9.97624 6.52237C10.5952 6.27481 11.4616 6.15102 12.3281 6.15102C13.1946 6.15102 14.0611 6.27481 14.8038 6.52237C16.4129 4.9132 18.2697 4.9132 18.2697 4.9132C18.5172 5.65589 18.5172 6.39859 18.5172 6.89372C18.5172 7.88398 18.3935 8.37911 18.2697 8.62668C19.1361 9.61694 19.7551 10.8548 19.7551 12.3402C19.7551 15.0634 17.6508 16.6725 14.8038 17.2915C15.5465 17.9104 16.0416 19.0244 16.0416 20.1385V23.3568C16.0416 23.7282 16.4129 24.0995 16.9081 23.9757C21.488 22.119 24.7064 17.6628 24.7064 12.4639C24.7064 5.03698 18.3935 -0.780802 10.9665 0.0856765Z" />
        </svg>
    </div>

    const medium = <div onClick={() => handleClick(links["medium"], '_blank')} className=" hover:scale-95 m-auto rounded-full w-8 h-8 ring-midnight_black dark:ring-whisper_white ring-1 hover:ring-raisin_black hover:dark:ring-platinum flex items-center justify-center group  duration-300 ease-in-out cursor-pointer">
        <svg className=" group-hover:fill-raisin_black group-hover:dark:fill-platinum fill-midnight_black dark:fill-whisper_white duration-500 ease-in-out" width="18" height="14" viewBox="0 0 38 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 0C9.55546 -3.04414e-08 8.12506 0.284523 6.79048 0.837325C5.4559 1.39013 4.24327 2.20038 3.22183 3.22183C2.20038 4.24327 1.39013 5.4559 0.837325 6.79048C0.284523 8.12506 0 9.55546 0 11C0 12.4445 0.284523 13.8749 0.837325 15.2095C1.39013 16.5441 2.20038 17.7567 3.22183 18.7782C4.24327 19.7996 5.4559 20.6099 6.79048 21.1627C8.12506 21.7155 9.55546 22 11 22C12.4445 22 13.8749 21.7155 15.2095 21.1627C16.5441 20.6099 17.7567 19.7996 18.7782 18.7782C19.7996 17.7567 20.6099 16.5441 21.1627 15.2095C21.7155 13.8749 22 12.4445 22 11C22 9.55546 21.7155 8.12506 21.1627 6.79048C20.6099 5.4559 19.7996 4.24327 18.7782 3.22183C17.7567 2.20038 16.5441 1.39013 15.2095 0.837325C13.8749 0.284523 12.4445 -3.04414e-08 11 0V0ZM28.2857 0.785714C27.0354 0.785714 25.8363 1.86186 24.9522 3.77741C24.0681 5.69296 23.5714 8.291 23.5714 11C23.5714 13.709 24.0681 16.307 24.9522 18.2226C25.8363 20.1381 27.0354 21.2143 28.2857 21.2143C29.536 21.2143 30.7351 20.1381 31.6192 18.2226C32.5033 16.307 33 13.709 33 11C33 8.291 32.5033 5.69296 31.6192 3.77741C30.7351 1.86186 29.536 0.785714 28.2857 0.785714ZM36.1429 3.14286C35.7261 3.14286 35.3264 3.97066 35.0317 5.44416C34.737 6.91766 34.5714 8.91616 34.5714 11C34.5714 13.0838 34.737 15.0823 35.0317 16.5558C35.3264 18.0293 35.7261 18.8571 36.1429 18.8571C36.5596 18.8571 36.9593 18.0293 37.254 16.5558C37.5487 15.0823 37.7143 13.0838 37.7143 11C37.7143 8.91616 37.5487 6.91766 37.254 5.44416C36.9593 3.97066 36.5596 3.14286 36.1429 3.14286Z" />
        </svg>
    </div>

    return (
        <div className="flex flex-wrap gap-4 w-fit justify-center items-center">
            {instagram}
            {behance}
            {gitHub}
            {medium}
            {linkedIn}
        </div>
    );
}

export default Social;