/**
 * Calculate factorial
 * 
 * Time Complexity: O(number)
 * Space Complexity: O(number)
 * 
 * @param {number} number 
 * @return {number}
 */
export function factorial(number) {
    if (number === 0) {
        return 1;
    } else if (number > 0) {
        return factorial(number - 1) * number;
    } else {
        return -Math.abs(factorial(number + 1) * number);
    }
}