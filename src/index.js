
    const flatten = (list, acc = []) => {
        return list.reduce((newAcc, elem) => {
            if(!Array.isArray(elem)){
               return [...newAcc, elem];
            }
            return flatten(elem, newAcc);
        },acc);
    };

    export default flatten;

