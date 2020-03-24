/**
 * Raise number to the power
 *  
 * Time Complexity: O(power)
 * Space Complexity: O(1)
 * 
 * @param {number} number
 * @param {number} power 
 * @return {number}
 */
export function iterativePower(number, power) {
    let result = 1;

    if (power > 0) {
        for (let i = 1; i <= power; i++) {
            result *= number;
        }
    } else if (power < 0) {
        for (let i = -1; i >= power; i--) {
            result /= number;
        }
    }

    return result;
}