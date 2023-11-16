import { motion } from "framer-motion";

const StaggeredText = ({ text, duration = 0.15 }) => {

    const staggerVariants = {
        hidden: {
            opacity: 0,
            y: 40,
        },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * duration,
            },
        }),
    };

    return (
        <motion.div initial="hidden" animate='visible' >
            {text.split('').map((letter, index) => (
                <motion.span
                    key={index}
                    custom={index}
                    variants={staggerVariants}
                    className="inline-block">
                    {letter}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default StaggeredText;