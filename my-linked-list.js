class Node {
  constructor(data, next=null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // insert last
  insertLast(data) {
    if (!this.head) {
      this.insertFirst(data);
    } else {
      let node = new Node(data)
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  // insert at index
  insertAt(index, data) {
    if (index === 0) {
      this.insertFirst(data);
    } else if (index > 0 && index > this.size) {
      return;
    } else {
      let node = new Node(data);
      let current = this.head;
      let previous;
      let count = 0;
      while(count < index) {
        previous = current;
        current = current.next;
        count++;
      }
      node.next = current;
      previous.next = node;
      this.size++;
    }
  }
  // get first data
  getFirst() {
    if (this.head) console.log(this.head.data);
  }

  // get last data
  getLast() {
    if (!this.head) return null;
    let current = this.head;
    while(current.next) {
      current = current.next;
    }
    console.log(current.data)
  }

  // get data at index
  getAt(index) {
    if (!this.head || index < 0 || index > this.size) return null;
    let current = this.head;
    let count = 0;
    while(current) {
      if(count === index) {
        console.log(current.data);
      }
      current = current.next;
      count++;
    }
  }

  // remove first
  removeFirst() {
    if (!this.head) return null;
    let current = this.head;
    this.head = current.next;
    this.size--;
  }

  // remove last
  removeLast() {
    if (!this.head) return null;
    let current = this.head;
    let previous;
    while(current.next) {
      previous = current;
      current = current.next;
    }
    previous.next = null;
    this.size--;
  }
  // remove at index
  removeAt(index) {
    if (!this.head || index < 0 || index > this.size) return null;
    let current = this.head;
    let previous;
    let count = 0;
    while(count < index) {
      previous = current;
      current = current.next;
      count++;
    }
    previous.next = current.next
    this.size--;
  }

  // clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }

  // print list
  printList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}


ll = new LinkedList();
ll.insertFirst("a");
ll.insertLast("b");
ll.insertLast("c");
ll.insertLast("e");
ll.insertAt(3, "d");
ll.insertLast("f");
// ll.removeFirst();
// ll.removeLast();
ll.removeAt(2)
ll.printList();
// ll.getFirst();
// ll.getLast();
// ll.getAt(3);



// console.log(ll)