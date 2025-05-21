class SimpleHashTable {
  constructor() {
    this.size = 10;
    this.table = new Array(this.size);
  }

  hash(key) {
    let hash = 999;
    for (let char of key) {
      hash += char.charCodeAt(0);
    }

    return hash % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    this.table[index] = value;
  }

  get(key) {
    const index = this.hash(key);
    return this.table[index];
  }

  remove(key) {
    const index = this.hash(key);
    const element = this.table[index];
    this.table[index] = undefined;
    return element;
  }
}

const hashTable = new SimpleHashTable();
hashTable.set('Name', 'Shakil')
hashTable.set('nationality', 'Bangladeshi')
hashTable.set('Hobby', 'Coding')

console.log(hashTable.get('Name'))
console.log(hashTable.get('nationality'))
console.log(hashTable.get('Hobby'))
console.log(hashTable)
