{
  class NewNode {
    constructor(data) {
      this.data = data;
      this.next = null;
      this.prev = null;
    }
  }

  class DoublyLinkList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }

    append(data) {
      const newNode = new NewNode(data);
      this.size++;

      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
        return;
      }

      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    prepend(data) {
      const newNode = new NewNode(data);
      this.size++;

      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
        return;
      }

      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    remove(data) {
      if (!this.head) {
        return false;
      }

      let current = this.head;

      while (current.data !== data) {
        current = current.next;
        continue;
      }

      // If there is only one node
      if (current === this.head && current === this.tail) {
        this.head = null;
        this.tail = null;
        this.size--;
        return true;
      }

      if (current == this.head) {
        this.head = current.next;
        this.head.prev = null;
        this.size--;
        return;
      }

      if (current == this.tail) {
        this.tail = current.prev;
        this.tail.next = null;
        this.size--;
        return;
      }

      current.prev.next = current.next;
      current.next.prev = current.prev;
    }
  }

  const List = new DoublyLinkList();
  List.append(10);
  List.append(20);
  List.prepend(70);
  console.log(List.head.next);
}
