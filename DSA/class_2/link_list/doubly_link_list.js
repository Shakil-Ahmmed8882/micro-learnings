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

    

  }

  const List = new DoublyLinkList();
  List.append(10);
  List.append(20);
  List.prepend(70);
  console.log(List.head.next);
}
