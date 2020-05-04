import { Stack } from './stack';

describe('constructor', () => {
    it('should create an empty LinkedList', () => {
        const stack = new Stack();

        expect(stack.linkedList.head).toBeUndefined();
        expect(stack.linkedList.tail).toBeUndefined();
    });

    it('should create a stack with values when called with arguments', () => {
        const stack = new Stack(1, 2, 3);

        expect(stack.linkedList.head.value).toBe(3);
        expect(stack.linkedList.tail.value).toBe(1);
    });
});

describe('push', () => {
    it('should add a new node to the top of an empty stack', () => {
        const stack = new Stack();

        stack.push(1);

        expect(stack.linkedList.head.value).toBe(1);
        expect(stack.linkedList.tail.value).toBe(1);
    });

    it('should add a new node to the top of a non empty stack', () => {
        const stack = new Stack(1, 2);

        stack.push(3);

        expect(stack.linkedList.head.value).toBe(3);
    });
});

describe('pop', () => {
    it('should return null if the stack is empty', () => {
        const stack = new Stack();

        expect(stack.pop()).toBeNull();
    });

    it('should remove the top node in the stack', () => {
        const stack = new Stack(1, 2, 3);

        expect(stack.pop()).toBe(3);
        expect(stack.linkedList.head.value).toBe(2);
        expect(stack.linkedList.tail.value).toBe(1);
    });
});

describe('peek', () => {
    it('should return null if the stack is empty', () => {
        const stack = new Stack();

        expect(stack.peek()).toBeNull();
    });

    it('should return the top node in the stack', () => {
        const stack = new Stack(1, 2, 3);

        expect(stack.peek()).toBe(3);
        expect(stack.linkedList.head.value).toBe(3);
        expect(stack.linkedList.tail.value).toBe(1);
    });
});

describe('isEmpty', () => {
    it('should return true if the stack is empty', () => {
        const stack = new Stack();

        expect(stack.isEmpty()).toBe(true);
    });

    it('should return false if the stack is not empty', () => {
        const stack = new Stack(1, 2, 3);

        expect(stack.isEmpty()).toBe(false);
    });
});

describe('toString', () => {
    const stack = new Stack(1, 2, 3);

    it('should strigify the nodes in the stack', () => {
        expect(stack.toString()).toEqual('3,2,1');
    });

    it('should stringify the format the nodes appropriately if a callback function is provided', () => {
        const callback = (value) => `{ value: ${value} }`;

        expect(stack.toString(callback)).toEqual(`{ value: 3 },{ value: 2 },{ value: 1 }`);
    });
});

describe('toArray', () => {
    it('should return the values of nodes of the stack as an array', () => {
        const stack = new Stack(1, 2, 3);

        expect(stack.toArray()).toEqual([3, 2, 1]);
    });
});
