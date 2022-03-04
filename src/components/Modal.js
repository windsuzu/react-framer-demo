import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    opacityVariants,
    modalVariants,
    btnHoverVariants,
} from "../variants/variants";

const Modal = (props) => {
    return (
        <AnimatePresence exitBeforeEnter>
            {props.showModal && (
                <motion.div
                    className="backdrop"
                    variants={opacityVariants.call(null)}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    onClick={props.setShowModal.bind(null, false)}
                >
                    <motion.div className="modal" variants={modalVariants}>
                        <p>Do you want to make another 🍕?</p>
                        <Link to="/">
                            <motion.button
                                variants={btnHoverVariants}
                                whileHover="hover"
                            >
                                Start Again
                            </motion.button>
                        </Link>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
