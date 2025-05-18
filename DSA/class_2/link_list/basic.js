// const node_2 = {
//     value: 2,
//     next: null
// }

// const node_1 = {
//     value: 1,
//     next: node_2
// }

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}


const head = new Node(5); 
const node_2 = new Node(10); 
head.next = node_2; 
const node_3 = new Node(20); 
node_2.next = node_3; 
const node_4 = new Node(30); 
node_3.next = node_4; 
const node_5 = new Node(40); 
node_4.next = node_5; 


let current = head; 

while(current){
    
    console.log(current.data);
    current = current.next
}