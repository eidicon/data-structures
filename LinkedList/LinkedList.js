'use strict';

const LinkedListNode = require('./LinkedListNode');
const head = Symbol('head');

class LinkedList {
    constructor() {
        this[head] = null;
    }

    add (data) {
        const aNewLinkedListNode = LinkedListNode.create(data);
        if (this[head] === null) {
            this[head] = aNewLinkedListNode;
        } else {
            let current  = this[head];
            while(current.next !== null) {
                current = current.next;
            }
            current.next = aNewLinkedListNode;
        }
    }

    get (index) {
        if (index < 0) { 
            return undefined;
        }
        let current = this[head];
        let i = 0;
        while (current !== null && i < index){
            current = current.next;
            i++; 
        }
        return current !== null ? current.current : undefined;
    }

    remove (index) {
        if ((this[head] === null) || (index < 0)) {
            throw new RangeError(`Index ${index} does not exist in the list.`);
        }
        if (index === 0) {
            const data = this[head].current;
            this[head] = this[head].next;
            return data;
        }
        let current = this[head];
        let previous = null;
        let i = 0;
        while(current !== null && i < index) {
            previous = current;
            current = current.next;
            i++;
        }
        if (current !== null) {
            previous.next = current.next;
            return current.current;
        }
        throw new RangeError(`Index ${index} does not exist in the list.`);
    }

    *values () {
        let current = this[head];

        while (current !== null) {
            yield current.current;
            current = current.next;
        }
    }

    [Symbol.iterator]() {
        return this.values();
    }
}

module.exports = LinkedList;