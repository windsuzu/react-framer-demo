import React from "react";
import { motion, useCycle } from "framer-motion";

const pizzaVariants = {
    popping: {
        scale: 1.2,
        transition: { repeat: Infinity, repeatType: "reverse", duration: 0.5 },
    },
    jumping: {
        x: [-20, 0, 20],
        y: [0, 20, 0],
        transition: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 0.5,
        },
    },
};

const Pizza = () => {
    const [animation, cycleAnimation] = useCycle("popping", "jumping");

    return (
        <motion.p
            style={{
                display: "inline-block",
                fontSize: "3rem",
                padding: "1rem",
                cursor: "pointer",
                userSelect: "none",
            }}
            variants={pizzaVariants}
            animate={animation}
            onClick={cycleAnimation}
        >
            🍕
        </motion.p>
    );
};

export default Pizza;
