export const btnHoverVariants = {
    hover: {
        // keyframes
        // scale: [1.1, 1, 1.1, 1, 1.1, 1, 1.1],
        scale: 1.1,
        textShadow: "0px 0px 8px rgb(255,255,255)",
        boxShadow: "0px 0px 8px rgb(255,255,255)",
        transition: {
            yoyo: Infinity,
            duration: 0.3,
        },
    },
};

export const itemHoverVariants = {
    hover: {
        scale: 1.3,
        originX: 0,
        color: "#f8e112",
        transition: {
            type: "spring",
            stiffness: 500,
        },
    },
};

export const opacityVariants = (transitionProps) => ({
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            ...transitionProps,
        },
    },
});

export const centerVariants = (transitionProps) => ({
    hidden: {
        opacity: 0,
        x: "10vw",
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            ...transitionProps,
        },
    },
    hover: btnHoverVariants.hover,
    exit: {
        opacity: 0,
        x: "-100vw",
        transition: { ease: "easeInOut" },
    },
});

export const nextVariants = (transitionProps) => ({
    hidden: {
        x: "-100vw",
    },
    visible: {
        x: 0,
        transition: {
            ...transitionProps,
            type: "spring",
            stiffness: 120,
        },
    },
});

export const modalVariants = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "200px",
        opacity: 1,
        transition: {
            delay: 0.1,
        },
    },
    exit: {},
};
