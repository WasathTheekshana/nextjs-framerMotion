export const container = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {
            delayChildern: 0.5,
            staggerChildern: 0.2,
        },
    },
};

export const items = {
    hidden: {y: '100%'},
    show: {y: '0%', transition: {duration: 1}},
}