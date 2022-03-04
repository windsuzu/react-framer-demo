import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    btnHoverVariants,
    centerVariants,
    itemHoverVariants,
} from "../variants/variants";

const Toppings = ({ addTopping, pizza }) => {
    let toppings = [
        "mushrooms",
        "peppers",
        "onions",
        "olives",
        "extra cheese",
        "tomatoes",
    ];

    return (
        <motion.div
            className="toppings container"
            variants={centerVariants.call(null, { duration: 0.2 })}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <h3>Step 2: Choose Toppings</h3>
            <ul>
                {toppings.map((topping) => {
                    let spanClass = pizza.toppings.includes(topping)
                        ? "active"
                        : "";
                    return (
                        <motion.li
                            key={topping}
                            onClick={() => addTopping(topping)}
                            variants={itemHoverVariants}
                            whileHover="hover"
                        >
                            <span className={spanClass}>{topping}</span>
                        </motion.li>
                    );
                })}
            </ul>

            <Link to="/order">
                <motion.button variants={btnHoverVariants} whileHover="hover">
                    Order
                </motion.button>
            </Link>
        </motion.div>
    );
};

export default Toppings;
