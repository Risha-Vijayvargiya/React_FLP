
export const loading = () => {
    return {
        type: "LOADING"
    }
}
export const addAsnc = (val) => {
    return {type: "ADDITION", value:val};
};

export const add = val => {
    return dispach => {
        dispach(loading());
        setTimeout(() => {
            dispach(addAsnc(val));
        }, 5000)
    }
};

export const sub = (val) => {
    return {type: "SUBTRACTION", value:val};
};