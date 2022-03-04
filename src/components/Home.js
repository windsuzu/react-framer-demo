import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    opacityVariants,
    btnHoverVariants,
    centerVariants,
} from "../variants/variants";
import Pizza from "./Pizza";

const Home = () => {
    return (
        <motion.div
            className="home container"
            variants={opacityVariants.call(null, { delay: 1, duration: 1.5 })}
            initial="hidden"
            animate="visible"
            exit={{ ...centerVariants.call(null).exit }}
        >
            <h2>Welcome to Pizza Joint</h2>
            <Link to="/base">
                <motion.button variants={btnHoverVariants} whileHover="hover">
                    Create Your Pizza
                </motion.button>
            </Link>
            <br />
            <Pizza />
        </motion.div>
    );
};

export default Home;
