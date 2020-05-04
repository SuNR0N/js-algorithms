import { LinkedList } from '../02-linked-list/linked-list';

export class Stack {
    constructor(...values) {
        this.linkedList = new LinkedList();
        values.forEach((value) => {
            this.linkedList.prepend(value);
        });
    }

    /**
     * Add a new value to the top of the stack
     *
     * @param {*} value
     */
    push(value) {
        this.linkedList.prepend(value);
    }

    /**
     * Return the element from the top of the stack
     *
     * @return {*}
     */
    pop() {
        const removedHead = this.linkedList.deleteHead();
        return removedHead ? removedHead.value : null;
    }

    /**
     * Return the element from the top of the stack without removing it
     *
     * @return {*}
     */
    peek() {
        if (this.isEmpty()) {
            return null;
        }

        return this.linkedList.head.value;
    }

    /**
     * Check whether the stack is empty
     *
     * @return {boolean}
     */
    isEmpty() {
        return !this.linkedList.head;
    }

    /**
     * Return the elements of the stack as an array
     *
     * @return {*[]}
     */
    toArray() {
        return this.linkedList.toArray().map((linkedListNode) => linkedListNode.value);
    }

    /**
     * Convert the elements of the stack to a string with an optional callback argument
     * which can be used to format the values of the elements
     *
     * @param {function} [callback]
     * @return {string}
     */
    toString(callback) {
        return this.linkedList.toString(callback);
    }
}
