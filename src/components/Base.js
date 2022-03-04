import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { centerVariants, nextVariants } from "../variants/variants";

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
                            whileHover={{
                                scale: 1.3,
                                originX: 0,
                                color: "#f8e112",
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
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
                            whileHover={{
                                scale: 1.1,
                                textShadow: "0px 0px 8px rgb(255,255,255)",
                                boxShadow: "0px 0px 8px rgb(255,255,255)",
                            }}
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
