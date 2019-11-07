'use strict';

class LinkedListNode {
    constructor(data) {
        this.current = data;
        this.next = null;
    }
    static create(data) {
        return new this(data);
    }
}

module.exports = LinkedListNode;
