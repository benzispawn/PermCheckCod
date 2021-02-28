/**
 * 
 * @param {Array} A 
 */
function solution (A) {
    let setA = new Set(A);
    let size = A.length;

    if (typeof A !== 'object') {
        return 0;
    }

    if (size == 0) {
        return 0;
    }

    for (let i = 0; i < size; i++) {
        if (!setA.has(i+1)) {
            return 0
        }
    }

    return 1;
}