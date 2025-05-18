class NewNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(data) {
    const newNode = new NewNode(data);
    this.size++;
    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  // Time O(1) + Space O(1)
  prepend(data) {
    const newNode = new NewNode(data);
    this.size++;
    if (this.head === null) {
      this.head = newNode;
      return;
    }

    newNode.next = this.head;
    this.head = newNode;
  }

  insert(index, value) {
    if (index < 0 || index > this.size) {
      throw Error("Index is out of link list capacity");
    }

    if (index === 0) {
      this.prepend(value);
      return;
    }
    if (index === this.size) {
      this.append(value);
      return;
    }

    const newNode = new NewNode(value);
    this.size++;

    let current = this.head;
    let previous = null;
    let count = 0;

    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }

    newNode.next = current;
    previous.next = newNode;
  }

  toString() {
    let current = this.head;
    let result = " ";
    while (current) {
      result += `${current.data} =>`;
      current = current.next;
    }
    return result;
  }
}

const List = new SinglyLinkList();
List.prepend(10);
List.prepend(20);
List.prepend(30);
List.prepend(1);
List.append(3000);
List.append(4);
List.insert(5, 8882);

console.log(List.toString());
