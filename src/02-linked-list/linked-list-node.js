export class LinkedListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }

    /**
     * Prints out the value as a string or pass its value to the callback function if exists
     * 
     * @param {function} callback 
     */
    toString(callback) {
        return callback ? callback(this.value) : `${this.value}`;
    }
}