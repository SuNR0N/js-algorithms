/**
 * Multiply all values of the array by certain value in-place
 * 
 * Time Complexity: O(array.length)
 * Auxiliary Space Complexity: O(1)
 * 
 * @param {number[]} array 
 * @param {number} multiplier 
 * @return {number[]}
 */
export function multiplyArrayInPlace(array, multiplier) {
    const len = array.length;
    
    for (let i = 0; i < len; i++) {
        array[i] *= multiplier;
    }
    
    return array;
}