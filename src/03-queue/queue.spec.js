import { Queue } from './queue';

describe('constructor', () => {
    it('should create an empty LinkedList', () => {
        const queue = new Queue();

        expect(queue.linkedList.head).toBeUndefined();
        expect(queue.linkedList.tail).toBeUndefined();
    });

    it('should create a queue with values when called with arguments', () => {
        const queue = new Queue(1, 2, 3);

        expect(queue.linkedList.head.value).toBe(1);
        expect(queue.linkedList.tail.value).toBe(3);
    });
});

describe('enqueue', () => {
    it('should add a new node to the end of an empty queue', () => {
        const queue = new Queue();

        queue.enqueue(1);

        expect(queue.linkedList.head.value).toBe(1);
        expect(queue.linkedList.tail.value).toBe(1);
    });

    it('should add a new node to the end of a non empty queue', () => {
        const queue = new Queue(1, 2);

        queue.enqueue(3);

        expect(queue.linkedList.tail.value).toBe(3);
    });
});

describe('dequeue', () => {
    it('should return null if the queue is empty', () => {
        const queue = new Queue();

        expect(queue.dequeue()).toBeNull();
    });

    it('should remove the first node in the queue', () => {
        const queue = new Queue(1, 2, 3);

        expect(queue.dequeue()).toBe(1);
        expect(queue.linkedList.head.value).toBe(2);
        expect(queue.linkedList.tail.value).toBe(3);
    });
});

describe('peek', () => {
    it('should return null if the queue is empty', () => {
        const queue = new Queue();

        expect(queue.peek()).toBeNull();
    });

    it('should return the first node in the queue', () => {
        const queue = new Queue(1, 2, 3);

        expect(queue.peek()).toBe(1);
        expect(queue.linkedList.head.value).toBe(1);
        expect(queue.linkedList.tail.value).toBe(3);
    });
});

describe('isEmpty', () => {
    it('should return true if the queue is empty', () => {
        const queue = new Queue();

        expect(queue.isEmpty()).toBe(true);
    });

    it('should return false if the queue is not empty', () => {
        const queue = new Queue(1, 2, 3);

        expect(queue.isEmpty()).toBe(false);
    });
});

describe('toString', () => {
    const queue = new Queue(1, 2, 3);

    it('should strigify the nodes in the queue', () => {
        expect(queue.toString()).toEqual('1,2,3');
    });

    it('should stringify the format the nodes appropriately if a callback function is provided', () => {
        const callback = (value) => `{ value: ${value} }`;

        expect(queue.toString(callback)).toEqual(`{ value: 1 },{ value: 2 },{ value: 3 }`);
    });
});
