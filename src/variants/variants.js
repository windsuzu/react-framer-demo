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

export const btnHoverVariants = {
    hover: {
        scale: [1.1, 1, 1.1, 1, 1.1, 1, 1.1],
        textShadow: "0px 0px 8px rgb(255,255,255)",
        boxShadow: "0px 0px 8px rgb(255,255,255)",
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
