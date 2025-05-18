class NewNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularLinkList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insert(data) {
    const newNode = new NewNode(data);
    this.size++;

    // check if the list is empty
    if (this.head === null) {
      this.head = newNode;
      newNode.next = this.head;
      return;
    }

    // Traverse the list until you find the head
    let current = this.head;
    while (current.next !== current.head) {
      current = current.next;
    }

    current.next = newNode;
    newNode.next = this.head;
  }

  remove() {
    if (this.head) {
      return false;
    }

    // prev variable to connect the next after the removal
    // if we remove a node suddenly in middle the previous and
    // next ndoe are disconnected as one node in their middle got removed
    // so after removing we need connect the previous node and current
    // node to fill the gap
    let current = this.head;
    let prev = null;



    /*
      Scenario: 1 🟢
      if the removal data is in head 
    */
    if (current.data == data) {
      if (this.size === 1) {
        // if only one data in list
        // we have nothing left to link or connect
        // one data means that is head and make it null
        this.head = null;
      } else {
        const last = this.head;
        while (last.next !== this.head) {
          // keep looping & stop at node that is before head
          // then reassing that last node in last variable
          last = last.next;
        }

        this.head = this.head.next;
        last.next = this.head;
      }
      this.size--;
      return true;
    }


    do {
      prev = current; 
      current = current.next; 
      if(current.data == data){
        prev.next = current.next; 
        this.size--; 
        return true; 
      }

    } while (current !== this.head);


  }
}
