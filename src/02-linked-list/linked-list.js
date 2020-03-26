import { LinkedListNode } from './linked-list-node';

export class LinkedList {
    /**
     * Create a LinkedList with the provided ordered values
     * 
     * @param  {...any} values 
     * @return {LinkedList}
     */
    static build(...values) {
        const nodes = values
            .reduceRight((acc, value) => {
                const nextIndex = acc.length - 1;
                const nextNode = nextIndex > -1 ? acc[nextIndex] : null;
                const node = new LinkedListNode(value, nextNode);
                acc.push(node);
                return acc;
            }, []);

        const linkedList = new LinkedList();
        linkedList.tail = nodes[0];
        linkedList.head = nodes[nodes.length - 1];

        return linkedList;
    }

    constructor() {
        /** @var LinkedListNode */
        this.head = null;

        /** @var LinkedListNode */
        this.tail = null;
    }

    /**
     * Add a node to the beginning of the list
     * 
     * Time Complexity: O(1)
     * 
     * @param {any} value 
     * @return {this}
     */
    prepend(value) {
        const newNode = new LinkedListNode(value, this.head);
        this.head = newNode;
        
        if (!this.tail) {
            this.tail = newNode;
        }

        return this;
    }

    /**
     * Add a node to the end of the list
     * 
     * Time Complexity: O(1)
     * 
     * @param {any} value 
     * @return {this}
     */
    append(value) {
        const newNode = new LinkedListNode(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            const currentTail = this.tail;
            currentTail.next = newNode;
            this.tail = newNode;
        }

        return this;
    }

    /**
     * Remove a node from the list
     * 
     * Time Complexity: O(n)
     * 
     * @param {any} value 
     * @return {LinkedListNode}
     */
    delete(value) {
        if (!this.head) {
            return null;
        }

        let deletedNode = null;

        while (this.head && this.head.value === value) {
            deletedNode = this.head;
            this.head = this.head.next;
        }

        let currentNode = this.head;

        if (currentNode !== null) {
            while (currentNode.next) {
                if (currentNode.next.value === value) {
                    deletedNode = currentNode.next;
                    currentNode.next = currentNode.next.next;
                } else {
                    currentNode = currentNode.next;
                }
            }
        }

        if (this.tail.value === value) {
            this.tail = currentNode;
        }

        return deletedNode;
    }

    /**
     * Remove the last node from the list
     * 
     * Time Complexity: O(n)
     * 
     * @return {LinkedListNode}
     */
    deleteTail() {
        const deletedTail = this.tail;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                if (!currentNode.next.next) {
                    currentNode.next = null;
                } else {
                    currentNode = currentNode.next;
                }
            }
            this.tail = currentNode;
        }

        return deletedTail;
    }

    /**
     * Remove the first node from the list
     * 
     * Time Complexity: O(1)
     * 
     * @return {LinkedListNode}
     */
    deleteHead() {
        if (!this.head) {
            return null;
        }
        
        const deletedHead = this.head;

        if (this.head.next) {
            this.head = this.head.next;
        } else {
            this.head = null;
            this.tail = null;
        }

        return deletedHead;
    }

    /**
     * Find a node in the list
     * 
     * Time Complexity: O(n)
     * 
     * @param {Object} query 
     * @param {number?} [query.value]
     * @param {function?} [query.callback]
     * @return {LinkedListNode}
     */
    find({ value, callback } = {}) {
        if (!this.head) {
            return null;
        }

        let currentNode = this.head;
        while (currentNode) {
            if (callback && callback(currentNode.value)) {
                return currentNode;
            }

            if (value !== undefined && currentNode.value === value) {
                return currentNode;
            }

            currentNode = currentNode.next;
        }

        return null;
    }

    /**
     * Converts the nodes of the LinkedList to an array
     * 
     * @return {LinkedListNode[]}
     */
    toArray() {
        const nodes = [];

        let currentNode = this.head;
        while (currentNode) {
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }

        return nodes;
    }

    /**
     * Prints out the values of the nodes as a string or pass their values to the callback function if exists
     * 
     * @param {function} callback 
     */
    toString(callback) {
        return this.toArray()
            .map((node) => node.toString(callback))
            .toString();
    }
}