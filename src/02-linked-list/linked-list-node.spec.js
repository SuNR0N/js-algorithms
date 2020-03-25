import { LinkedListNode } from './linked-list-node';

describe('constructor', () => {
    it('should create a node with the value provided', () => {
        const node = new LinkedListNode(3);

        expect(node.value).toBe(3);
        expect(node.next).toBeNull();
    });

    it('should create a node with the value and next pointer provided', () => {
        const otherNode = new LinkedListNode(7);
        const node = new LinkedListNode(3, otherNode);

        expect(node.value).toBe(3);
        expect(node.next).toBe(otherNode);
    });
});

describe('toString', () => {
    const node = new LinkedListNode(13);

    it('should stringify the value if called without a callback', () => {
        expect(node.toString()).toEqual('13');
    });

    it('should call the callback function with the value if it is provided', () => {
        const callback = jest.fn();
        node.toString(callback);

        expect(callback).toHaveBeenCalledWith(13);
    });
});