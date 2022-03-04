import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    centerVariants,
    nextVariants,
    btnHoverVariants,
    itemHoverVariants,
} from "../variants/variants";

const Base = ({ addBase, pizza }) => {
    const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

    return (
        <motion.div
            className="base container"
            variants={centerVariants.call(null, { duration: 1 })}
            initial="hidden"
            animate="visible"
        >
            <h3>Step 1: Choose Your Base</h3>
            <ul>
                {bases.map((base) => {
                    let spanClass = pizza.base === base ? "active" : "";
                    return (
                        <motion.li
                            key={base}
                            onClick={() => addBase(base)}
                            variants={itemHoverVariants}
                            whileHover="hover"
                        >
                            <span className={spanClass}>{base}</span>
                        </motion.li>
                    );
                })}
            </ul>

            {pizza.base && (
                <motion.div className="next" variants={nextVariants.call(null)}>
                    <Link to="/toppings">
                        <motion.button
                            variants={btnHoverVariants}
                            whileHover="hover"
                        >
                            Next
                        </motion.button>
                    </Link>
                </motion.div>
            )}
        </motion.div>
    );
};

export default Base;
