/**
 * Get all possible pairs out of provided letters
 * 
 * Time Complexity: O(letters.length^2)
 * Space Complexity: O(letters.length^2)
 * 
 * @param {string[]} letters 
 * @return {string[]}
 */
export function pairs(...letters) {
    const results = [];
    const len = letters.length;
    const isValid = letters.every((letter) => typeof letter === 'string' && letter.length === 1);
    if (!isValid) {
        throw new Error('Invalid input');
    }

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            results.push(`${letters[i]}${letters[j]}`);
        }
    }

    return results;
}