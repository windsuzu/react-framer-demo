import React from "react";
import { motion } from "framer-motion";
import { centerVariants, opacityVariants } from "../variants/variants";

// mass: number
// Mass of the moving object. Higher values will result in more lethargic movement. Set to 1 by default.

// damping: number
// Strength of opposing force. If set to 0, spring will oscillate indefinitely. Set to 10 by default.

// staggerChildren: number
// if staggerChildren is 0.01, the first child will be delayed by 0 seconds, the second by 0.01, the third by 0.02 and so on.

const Order = ({ pizza }) => {
    return (
        <motion.div
            className="container order"
            variants={centerVariants.call(null, {
                type: "spring",
                when: "beforeChildren",
                stiffness: 120,
                mass: 0.4,
                damping: 8,
                staggerChildren: 0.5,
            })}
            initial="hidden"
            animate="visible"
        >
            <h2>Thank you for your order :)</h2>
            <motion.p variants={opacityVariants.call(null)}>
                You ordered a {pizza.base} pizza with:
            </motion.p>
            <motion.div variants={opacityVariants.call(null)}>
                {pizza.toppings.map((topping) => (
                    <div key={topping}>{topping}</div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Order;
