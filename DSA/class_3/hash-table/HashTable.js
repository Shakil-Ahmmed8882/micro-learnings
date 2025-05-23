class NewNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(key, value) {
    const newNode = new NewNode(key, value);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    newNode.next = this.head;
    this.head = newNode;
  }

  find(key) {
    if (!this.head) return null;

    let current = this.head;
    while (current) {
      if (current.key == key) return current.value;
      return current.next;
    }
  }
}

class HashTable {
  constructor(size = 30) {
    this.table = new Array(size);
    this.size = size;
    this.count = 0;
    this.keys = new Set();
  }

  hash(key = "") {
    let hash = 5381;
    for (let char of key) {
      hash = (hash * 33) ^ char.charCodeAt(0);
    }

    return Math.abs(hash) % this.size;
  }
}
