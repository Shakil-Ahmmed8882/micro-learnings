class NewNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class LinedList {
  constructor() {
    this.head = null;
  }

  insert(key, value) {
    const newNode = new NewNode(key, value);
    if (!this.head) {
      this.head = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
  }

  find(key) {
    if (!this.head) return null;

    let current = this.head;

    while (current) {
      if (current.key === key) return current.value;
    }
    return null;
  }

  remove(key) {
    if (!this.head) return null;

    if (this.head.key === key) {
      this.head = this.head.next;
    }

    let current = this.head;
    let previous = null;

    while (current && current.key === key) {
      previous = current;
      current = current.next;
    }

    if (current) {
      previous.next = current.next;
      return null;
    }
  }
}

const Hash = (key, size) => {
  let hash = 5381;
  for (let char of key) {
    hash = (hash * 33) ^ char.charCodeAt(0);
  }

  console.log(Math.abs(hash) % size);
  return Math.abs(hash) % size;
};

Hash("Shakil", 10);
const obj = {
  name: "Shakil",
  age: 20,
  nationality: "Bangladeshi",
  hobby: "Coding",
};

Hash(JSON.stringify(obj), 10);
