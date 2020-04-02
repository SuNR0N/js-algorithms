import { LinkedList } from './linked-list';
import { LinkedListNode } from './linked-list-node';

describe('constructor', () => {
    describe('given its called without argument', () => {
        const list = new LinkedList();

        it('should initialise the list with its head as null', () => {
            expect(list.head).toBeUndefined();
        });
    
        it('should initialise the list with its tail as null', () => {
            expect(list.tail).toBeUndefined();
        });
    });

    describe('given its called with arguments', () => {
        const list = new LinkedList(1, 2, 3);

        it('should initialise the list with the provided head', () => {
            expect(list.head).toEqual(expect.objectContaining({
                value: 1,
                next: expect.objectContaining({ value: 2 })
            }));
        });
    
        it('should initialise the list with the provided tail', () => {
            expect(list.tail).toEqual(expect.objectContaining({
                value: 3,
                next: null
            }));
        });
    });
});

describe('prepend', () => {
    it('should set the new node for both the head and tail if the list is empty', () => {
        const list = new LinkedList();
        list.prepend(3);

        expect(list.head).toBeInstanceOf(LinkedListNode);
        expect(list.head.value).toBe(3);
        expect(list.head).toBe(list.tail);
    });

    it('should only set the new node as the list head if it is not empty', () => {
        const list = new LinkedList(1);
        list.prepend(3);

        expect(list.head).toBeInstanceOf(LinkedListNode);
        expect(list.head.value).toBe(3);
        expect(list.head).not.toBe(list.tail);
    });
});

describe('append', () => {
    it('should set the new node for both the head and tail if the list is empty', () => {
        const list = new LinkedList();
        list.append(3);

        expect(list.tail).toBeInstanceOf(LinkedListNode);
        expect(list.tail.value).toBe(3);
        expect(list.tail).toBe(list.head);
    });

    it('should only set the new node as the list tail if it is not empty', () => {
        const list = new LinkedList(1);
        list.append(3);

        expect(list.tail).toBeInstanceOf(LinkedListNode);
        expect(list.tail.value).toBe(3);
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

    it('should remove the head if its value is specified and it is the only node', () => {
        const list = new LinkedList(1);
        const deletedNode = list.delete(1);

        expect(deletedNode.value).toBe(1);
        expect(list.head).toBeNull();
    });

    it('should return null if a node with the provided value does not exist', () => {
        const list = new LinkedList(1, 2, 3);
        const deletedNode = list.delete(4);

        expect(deletedNode).toBeNull();
    });

    it('should remove the node with the provided value if it exists', () => {
        const list = new LinkedList(1, 2, 3);
        const deletedNode = list.delete(2);

        expect(deletedNode.value).toBe(2);
        expect(list.toString()).toEqual('1,3');
    });

    it('should remove all nodes with the provided value if they exist', () => {
        const list = new LinkedList(1, 2, 1, 3, 1);
        const deletedNode = list.delete(1);

        expect(deletedNode.value).toBe(1);
        expect(list.toString()).toEqual('2,3');
    });
});

describe('deleteTail', () => {
    it('should delete the tail if there is only one node in the list', () => {
        const list = new LinkedList(1);

        const deletedTail = list.deleteTail();

        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();
        expect(deletedTail.value).toBe(1);
    });

    it('should delete the tail if there are multiple nodes in the list', () => {
        const list = new LinkedList(1, 2, 3);

        const deletedTail = list.deleteTail();

        expect(list.tail.value).toBe(2);
        expect(deletedTail.value).toBe(3);
    });
});

describe('deleteHead', () => {
    it('should return null in case of an empty list', () => {
        const list = new LinkedList();

        const deletedHead = list.deleteHead();

        expect(deletedHead).toBeNull();
    });

    it('should delete the head in case if there is a single node in the list', () => {
        const list = new LinkedList(1);

        const deletedHead = list.deleteHead();

        expect(deletedHead.value).toBe(1);
        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();
    });

    it('should delete the head in case if there are multiple nodes in the list', () => {
        const list = new LinkedList(1, 2, 3);

        const deletedHead = list.deleteHead();

        expect(deletedHead.value).toBe(1);
        expect(list.head.value).toBe(2);
        expect(list.tail.value).toBe(3);
    });
});

describe('find', () => {
    it('should return null if called without argument', () => {
        const list = new LinkedList(1, 2, 3);

        const node = list.find();

        expect(node).toBeNull();
    });

    describe('by value', () => {
        it('should return null if the list is empty', () => {
            const list = new LinkedList();
    
            const node = list.find({ value: 1 });
    
            expect(node).toBeNull();
        });
    
        it('should return the node if it can be found', () => {
            const list = new LinkedList(1, 2, 3);
    
            const node = list.find({ value: 2 });
    
            expect(node.value).toBe(2);
        });
    
        it('should return the first node if multiple can be found with the same value', () => {
            const list = new LinkedList(1, 2, 1, 3, 1);
    
            const node = list.find({ value: 1 });
    
            expect(node).toEqual(expect.objectContaining({
                value: 1,
                next: expect.objectContaining({
                    value: 2
                })
            }));
        });
    
        it('should return null if no node can be found with the provided value', () => {
            const list = new LinkedList(1, 2);
    
            const node = list.find({ value: 3 });
    
            expect(node).toBeNull();
        });
    });

    describe('by callback', () => {
        it('should return the first node which fulfils the condition provided in the callback', () => {
            const list = new LinkedList(1, 2, 3);
    
            const node = list.find({ callback: (value) => value > 2 });

            expect(node.value).toBe(3);
        });

        it('should return null if no node can be found which would fulfil the condition provided in the callback', () => {
            const list = new LinkedList(1, 2, 3);
    
            const node = list.find({ callback: (value) => value > 3 });

            expect(node).toBeNull();
        });
    });
});

describe('toArray', () => {
    it('should convert the list to an array', () => {
        const list = new LinkedList(1, 2, 3);

        const arr = list.toArray();

        expect(arr).toEqual([
            expect.objectContaining({
                value: 1,
                next: expect.objectContaining({ value: 2 })
            }),
            expect.objectContaining({
                value: 2,
                next: expect.objectContaining({ value: 3 })
            }),
            expect.objectContaining({
                value: 3,
                next: null
            })
        ]);
    });
});

describe('toString', () => {
    const list = new LinkedList(1, 2, 3);

    describe('given a callback is provided', () => {
        it('should stringify its nodes using the provided callback function', () => {
            const callback = (value) => `{ value: ${value} }`;
            expect(list.toString(callback)).toEqual('{ value: 1 },{ value: 2 },{ value: 3 }');
        });
    });

    describe('given it is called without a callback', () => {
        it('should stringify its nodes using their pure values', () => {
            expect(list.toString()).toEqual('1,2,3');
        });
    });
});