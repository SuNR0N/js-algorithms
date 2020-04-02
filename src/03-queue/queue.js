import { LinkedList } from '../02-linked-list/linked-list';

export class Queue {
    constructor(...values) {
        this.linkedList = new LinkedList();
        values.forEach((value) => {
            this.linkedList.append(value);
        });
    }

    /**
     * Append a new element to the end of the queue
     * 
     * @param {any} value 
     */
    enqueue(value) {
        this.linkedList.append(value);
    }

    /**
     * Remove the element from the front of the queue
     * 
     * @return {any}
     */
    dequeue() {
        const removedHead = this.linkedList.deleteHead();
        return removedHead ? removedHead.value : null;
    }

    /**
     * Return the element from the front of the queue without removing it
     * 
     * @return {any}
     */
    peek() {
        if (!this.linkedList.head) {
            return null;
        }

        return this.linkedList.head.value;
    }

    /**
     * Check whether the queue is empty 
     * 
     * @return {boolean}
     */
    isEmpty() {
        return !this.linkedList.head;
    }

    /**
     * Convert the elements of the queue to a string with an optional callback argument
     * which can be used to format the values of the elements
     * 
     * @param {function} [callback] 
     * @return {string}
     */
    toString(callback) {
        return this.linkedList.toString(callback);
    }
}