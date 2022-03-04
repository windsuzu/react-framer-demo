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
