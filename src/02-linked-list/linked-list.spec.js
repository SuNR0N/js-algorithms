import { LinkedList } from './linked-list';
import { LinkedListNode } from './linked-list-node';

describe('build', () => {
    it('', () => {
        // TODO
    });
});

describe('constructor', () => {
    const list = new LinkedList();

    it('should initialise the list with its head as null', () => {
        expect(list.head).toBeNull();
    });

    it('should initialise the list with its tail as null', () => {
        expect(list.tail).toBeNull();
    });
});

describe('prepend', () => {
    it('should set the new node for both the head and tail if the list is empty', () => {
        const list = new LinkedList();
        list.prepend(3);

        expect(list.head).toBeInstanceOf(LinkedListNode);
        expect(list.head).toEqual(expect.objectContaining({ value : 3 }));
        expect(list.head).toBe(list.tail);
    });

    it('should only set the new node as the list head if it is not empty', () => {
        const list = LinkedList.build(1);
        list.prepend(3);

        expect(list.head).toBeInstanceOf(LinkedListNode);
        expect(list.head).toEqual(expect.objectContaining({ value : 3 }));
        expect(list.head).not.toBe(list.tail);
    });
});

describe('append', () => {
    it('should set the new node for both the head and tail if the list is empty', () => {
        const list = new LinkedList();
        list.append(3);

        expect(list.tail).toBeInstanceOf(LinkedListNode);
        expect(list.tail).toEqual(expect.objectContaining({ value : 3 }));
        expect(list.tail).toBe(list.head);
    });

    it('should only set the new node as the list tail if it is not empty', () => {
        const list = LinkedList.build(1);
        list.append(3);

        expect(list.tail).toBeInstanceOf(LinkedListNode);
        expect(list.tail).toEqual(expect.objectContaining({ value : 3 }));
        expect(list.tail).not.toBe(list.head);
        expect(list.head.next).toBe(list.tail);
    });
});

describe('delete', () => {
    it('should return null if the list is empty', () => {
        const list = new LinkedList();
        const deletedNode = list.delete(1);

        expect(deletedNode).toBeNull();
    });

    it('should return null if a node with the provided value does not exist', () => {
        const list = LinkedList.build(1, 2, 3);
        const deletedNode = list.delete(4);

        expect(deletedNode).toBeNull();
    });

    it('should remove the node with the provided value if it exists', () => {
        const list = LinkedList.build(1, 2, 3);
        const deletedNode = list.delete(2);

        expect(deletedNode).toEqual(expect.objectContaining({ value: 2 }));
        expect(list.toString()).toEqual('1,3');
    });

    it('should remove all nodes with the provided value if they exist', () => {
        const list = LinkedList.build(1, 2, 1, 3, 1);
        const deletedNode = list.delete(1);

        expect(deletedNode).toEqual(expect.objectContaining({ value: 1 }));
        expect(list.toString()).toEqual('2,3');
    });
});

describe('deleteTail', () => {
    it('', () => {
        // TODO
    });
});

describe('deleteHead', () => {
    it('', () => {
        // TODO
    });
});

describe('find', () => {
    it('', () => {
        // TODO
    });
});

describe('toArray', () => {
    it('', () => {
        // TODO
    });
});

describe('toString', () => {
    it('', () => {
        // TODO
    });
});