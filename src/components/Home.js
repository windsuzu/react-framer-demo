import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { opacityVariants, btnHoverVariants } from "../variants/variants";

const Home = () => {
    return (
        <motion.div
            className="home container"
            variants={opacityVariants.call(null, { delay: 0.5, duration: 1.5 })}
            initial="hidden"
            animate="visible"
        >
            <h2>Welcome to Pizza Joint</h2>
            <Link to="/base">
                <motion.button variants={btnHoverVariants} whileHover="hover">
                    Create Your Pizza
                </motion.button>
            </Link>
        </motion.div>
    );
};

export default Home;
