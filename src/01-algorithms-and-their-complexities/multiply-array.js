/**
 * Multiply all values of the array by certain value with allocation
 * of additional memory to prevent input array modification.
 *
 * Time Complexity: O(array.length)
 * Space Complexity: O(array.length)
 * Auxiliary Space Complexity: O(array.length) 
 * 
 * @param {number[]} array 
 * @param {number} multiplier 
 * @return {number[]}
 */
export function multiplyArray(array, multiplier) {
    return array.map((item) => item *= multiplier);
}