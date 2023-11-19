import './card.css'

export default function Card({ id, symbol, face, isFlipped, handleClick }) {
    return (
        <div className={`card w-16 h-16 flex items-center justify-center cursor-pointer border duration-300 ease-in-out border-platinum-400 dark:border-onyx-600 rounded-lg overflow-hidden ${isFlipped ? 'flipped ' : 'hover:scale-95'}`} onClick={() => handleClick(id)}>
            <div className="card-inner">
                <div className="card-face flex items-center justify-center bg-white_smoke dark:bg-jet rounded-lg">{face}</div>
                <div className="card-face card-back flex items-center justify-center bg-onyx dark:bg-platinum rounded-lg">{symbol}</div>
            </div>
        </div>
    );
};