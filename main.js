/**
 * 
 * @param {Array} A 
 */
function solution (A) {
    let setA = new Set(A);
    let result = 1;
    let proof = 1;
    let minA = 0;
    let size = A.length;

    if (typeof A !== 'object') {
        return 0;
    }

    if (size == 0) {
        return 0;
    }

    // if (size == 1 && A[0] !== 1) {
    //     return 0;
    // }

    for (let i = 0; i < size; i++) {
        // proof *= i + 1;
        // result *= A[i];
        if (!setA.has(i+1)) {
            return 0
        }
    }

    // if (result == proof && setA.has(1)) {
    //     return 1;
    // }

    return 1;
}