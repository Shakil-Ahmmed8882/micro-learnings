const defaultCapacity = 10;

class CustomArray {
  constructor(capacity = defaultCapacity) {
    this.capacity = capacity;
    this.length = 0;
    this.arr = new Array(this.capacity);
  }

  insert(index, value) {
    // Constant value
    this.#checkIndex(index);

    // last index
    if (index === this.length) {
      return this.push(value);
    }

    // others
    for (let i = this.length; i > index; i--) {
      this.arr[i] = this.arr[i - 1];
    }
    this.arr[index] = value;
    this.length++;
  }

  // constant Time + Space
  push(value) {
    this.arr[this.length++] = value;
  }

  remove(index) {
    this.#checkIndex(index);

    const element = this.arr[iindex];

    if (index === this.length - 1) {
      this.arr[index] = undefined;
      return element;
    }

    for (let i = index; i < this.length; i++) {
      this.arr[i] = this.arr[i + 1];
    }
    this.length--;
    return element;
  }

  #checkIndex(index) {
    if (index < 0 || index > this.length) {
      throw new Error("Index out of bounds");
    }
  }
}

const myArray = new CustomArray();
myArray.insert(0, 0);
myArray.insert(1, 1);
myArray.insert(2, 2);
myArray.insert(2, 30);
myArray.insert(4, 4);
myArray.insert(5, 5);
myArray.push(100);
myArray.push(200);
// myArray.insert(10, 70);

console.log(myArray.arr);
