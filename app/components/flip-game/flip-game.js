'use client'
import { useEffect, useState } from "react";
import Card from "./card";
import { symbols } from "./symbols";
import { motion } from "framer-motion";


const generateCards = () => {
    const face = ['N', 'I', 'T', 'I', 'S', 'H', 'S', 'H', 'A', 'R', 'M', 'A'];

    const doubledSymbols = symbols.concat(symbols);
    const shuffledSymbols = doubledSymbols.sort(() => Math.random() - 0.5);

    return shuffledSymbols.map((symbol, index) => ({
        id: index,
        symbol: symbol.svg,
        message: symbol.message,
        face: face[index],
        isFlipped: false,
    }));
};


export default function FlipGame() {
    const [cards, setCards] = useState(generateCards());
    const [flippedCount, setFlippedCount] = useState(0);
    const [flippedIndexes, setFlippedIndexes] = useState([]);
    const [matchedPairs, setMatchedPairs] = useState([]);


    useEffect(() => {
        matchedPairs && matchedPairs.length && console.log(matchedPairs.at(-1).message)
    }, [matchedPairs])

    useEffect(() => {
        if (flippedCount === 2) {
            const [firstIndex, secondIndex] = flippedIndexes;

            if (cards[firstIndex].symbol === cards[secondIndex].symbol) {
                setMatchedPairs((prev) => [...prev, cards[firstIndex]]);
            }

            setTimeout(() => {
                setCards((prevCards) =>
                    prevCards.map((card, index) =>
                        flippedIndexes.includes(index) ? { ...card, isFlipped: true } : card
                    )
                );

                if (cards[firstIndex].symbol !== cards[secondIndex].symbol) {
                    setCards((prevCards) =>
                        prevCards.map((card, index) =>
                            flippedIndexes.includes(index) ? { ...card, isFlipped: false } : card
                        )
                    );
                }

                setFlippedIndexes([]);
                setFlippedCount(0);
            }, 1000);
        }
    }, [flippedCount, flippedIndexes, cards]);

    const handleClick = (index) => {
        if (flippedCount < 2 && !flippedIndexes.includes(index)) {
            setFlippedIndexes((prev) => [...prev, index]);
            setFlippedCount((prev) => prev + 1);
            setCards((prevCards) =>
                prevCards.map((card, i) => (i === index ? { ...card, isFlipped: true } : card))
            );
        }
    };

    const resetGame = () => {
        setCards(generateCards());
        setFlippedCount(0);
        setFlippedIndexes([]);
        setMatchedPairs([]);
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 0.2 }} className="grid grid-cols-1 lg:grid-cols-2 mt-4 min-h-96 sm:h-96 ">
            <div className="text-sm overflow-scroll flex-col-reverse flex relative mb-6">
                <div className=" mt-6 flex flex-col items-start justify-end gap-4 grow">
                    {matchedPairs && matchedPairs.length > 0 &&
                        matchedPairs.map((matchedPair, index) => {
                            return <motion.p initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}} key={index} className="py-2 px-4 bg-white_smoke dark:bg-jet rounded-xl rounded-tl-none">{matchedPair.message}</motion.p>
                        })}
                </div>
                <p className=" mt-4 text-sm flex gap-2 items-center">
                    <svg className=" dark:fill-white_smoke fill-jet" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.9962 11.7915C8.14851 11.7915 8.27754 11.7396 8.3833 11.6357C8.48907 11.5319 8.54195 11.4033 8.54195 11.2498V7.54146C8.54195 7.388 8.49044 7.25937 8.38741 7.15555C8.28438 7.05173 8.15671 6.99982 8.00441 6.99982C7.8521 6.99982 7.72307 7.05173 7.6173 7.15555C7.51154 7.25937 7.45866 7.388 7.45866 7.54146V11.2498C7.45866 11.4033 7.51017 11.5319 7.6132 11.6357C7.71623 11.7396 7.8439 11.7915 7.9962 11.7915ZM7.99591 5.74021C8.16177 5.74021 8.30226 5.68412 8.41737 5.57194C8.53248 5.45975 8.59003 5.32073 8.59003 5.15488C8.59003 4.98903 8.53394 4.84855 8.42174 4.73342C8.30956 4.61831 8.17055 4.56075 8.0047 4.56075C7.83884 4.56075 7.69835 4.61685 7.58324 4.72905C7.46813 4.84124 7.41058 4.98026 7.41058 5.14611C7.41058 5.31196 7.46667 5.45243 7.57887 5.56755C7.69105 5.68266 7.83006 5.74021 7.99591 5.74021ZM8.00745 15.5831C6.96423 15.5831 5.98173 15.3858 5.05995 14.991C4.13816 14.5963 3.33134 14.0532 2.63949 13.3617C1.94763 12.6701 1.40425 11.864 1.00935 10.9432C0.614444 10.0224 0.416992 9.03857 0.416992 7.99167C0.416992 6.94475 0.614353 5.96388 1.00908 5.04905C1.4038 4.1342 1.94692 3.33085 2.63845 2.63901C3.32999 1.94714 4.13615 1.40376 5.05693 1.00886C5.97771 0.613956 6.96155 0.416504 8.00845 0.416504C9.05537 0.416504 10.0362 0.613866 10.9511 1.00859C11.8659 1.40331 12.6693 1.94643 13.3611 2.63796C14.053 3.3295 14.5964 4.13404 14.9913 5.05157C15.3862 5.96909 15.5836 6.94946 15.5836 7.99267C15.5836 9.03589 15.3863 10.0184 14.9915 10.9402C14.5968 11.862 14.0537 12.6688 13.3622 13.3606C12.6706 14.0525 11.8661 14.5959 10.9486 14.9908C10.031 15.3857 9.05066 15.5831 8.00745 15.5831Z" />
                    </svg>
                    Flip the cards to know me more
                </p>
            </div>
            <div className="flex items-start justify-start flex-col m-auto">
                <div className="grid grid-cols-4 gap-2 ">
                    {cards.map((card) => (
                        <Card
                            key={card.id}
                            id={card.id}
                            symbol={card.symbol}
                            face={card.face}
                            isFlipped={card.isFlipped || matchedPairs.includes(card.symbol)}
                            handleClick={handleClick}
                        />
                    ))}
                </div>
                <button onClick={resetGame} className=' mt-2 h-12 text-sm gap-2 p-4 flex items-center justify-center cursor-pointer border duration-300 ease-in-out border-platinum-400 dark:border-onyx-600 rounded-lg bg-white_smoke dark:bg-jet'>
                    <svg className=" dark:fill-white_smoke fill-jet" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C10.75 22 9.57917 21.7625 8.4875 21.2875C7.39583 20.8125 6.44583 20.1708 5.6375 19.3625C4.82917 18.5542 4.1875 17.6042 3.7125 16.5125C3.2375 15.4208 3 14.25 3 13C3 12.7167 3.09583 12.4792 3.2875 12.2875C3.47917 12.0958 3.71667 12 4 12C4.28333 12 4.52083 12.0958 4.7125 12.2875C4.90417 12.4792 5 12.7167 5 13C5 14.95 5.67917 16.6042 7.0375 17.9625C8.39583 19.3208 10.05 20 12 20C13.95 20 15.6042 19.3208 16.9625 17.9625C18.3208 16.6042 19 14.95 19 13C19 11.05 18.3208 9.39585 16.9625 8.03751C15.6042 6.67918 13.95 6.00001 12 6.00001H11.85L12.7 6.85001C12.9 7.05001 12.9958 7.28335 12.9875 7.55001C12.9792 7.81668 12.8833 8.05001 12.7 8.25001C12.5 8.45001 12.2625 8.55418 11.9875 8.56251C11.7125 8.57085 11.475 8.47501 11.275 8.27501L8.7 5.70001C8.5 5.50001 8.4 5.26668 8.4 5.00001C8.4 4.73335 8.5 4.50001 8.7 4.30001L11.275 1.72501C11.475 1.52501 11.7125 1.42918 11.9875 1.43751C12.2625 1.44585 12.5 1.55001 12.7 1.75001C12.8833 1.95001 12.9792 2.18335 12.9875 2.45001C12.9958 2.71668 12.9 2.95001 12.7 3.15001L11.85 4.00001H12C13.25 4.00001 14.4208 4.23751 15.5125 4.71251C16.6042 5.18751 17.5542 5.82918 18.3625 6.63751C19.1708 7.44585 19.8125 8.39585 20.2875 9.48751C20.7625 10.5792 21 11.75 21 13C21 14.25 20.7625 15.4208 20.2875 16.5125C19.8125 17.6042 19.1708 18.5542 18.3625 19.3625C17.5542 20.1708 16.6042 20.8125 15.5125 21.2875C14.4208 21.7625 13.25 22 12 22Z" />
                    </svg>
                    Reset
                </button>
            </div>
        </motion.div>
    )
}