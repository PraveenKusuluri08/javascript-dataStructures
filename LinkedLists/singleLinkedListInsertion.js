class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}
class linkedlist {
  constructor() {
    this.head = null
    this.size = 0
  }
  insertBeggining(data) {
    this.head = new Node(data, this.head)
    this.tail = this.head.next
    //  console.log("line-28",this.tail)
    this.size++
  }
  //first approach

  insertionEnd(data) {
    //for insertion we need to check two conditions, is there any data in the head or not
    if (this.head === null) {
      this.head = new Node(data, this.head)
      this.size++
    } else {
      let NextPoint = this.head
      while (NextPoint.next) {
        NextPoint = NextPoint.next
      }
      NextPoint.next = new Node(data)
    }
    this.size++
  }

  // second approach
  // insertionEnd(data){
  //   let node = new Node(data);
  //   let present;
  //   if(this.head==null){
  //     this.head=node;
  //     this.tail=this.head;
  //     this.size++;
  //   }
  //   else{
  //     present=this.head;
  //     while(present.next){
  //       present=present.next;
  //     }
  //     present.next=node;
  //   }
  //   this.size++;
  // }
  // insert specific position
  insertPosition(pos, data) {
    if (pos < 0 && pos > this.size) {
      return
    }
    if (pos === 0) {
      this.insertBeggining(data)
    }

    const node = new Node(data)
    let current, previous
    current = this.head
    let i = 0
    while (i < pos) {
      previous = current
      i++
      current = current.next
    }
    node.next = current
    previous.next = node
  }
// reverse list
reverseList(){
  let prevNode=null;
  let current,nextNode;
  current=this.head;
 nextNode=this.head;

  while(current){
    nextNode=current.next;
    current.next=prevNode;
    prevNode=current;
    current=nextNode;
  }
  this.head=prevNode
}

  PrintList() {
    let list = this.head
    //  let listLast=this.tail
    while (list) {
      console.log(list.data)
      // console.log(list)
      //   console.log("line-37",listLast)
      list = list.next
    }
  }
}
const singlell = new linkedlist()
// singlell.insertBeggining(12)
// singlell.insertBeggining(92)
// singlell.insertBeggining(10)
// singlell.insertBeggining(18)
// singlell.insertBeggining(8)
singlell.insertionEnd(128)
singlell.insertionEnd(92)

singlell.insertPosition(2, 999)
singlell.insertPosition(1, 888)

singlell.reverseList()
singlell.PrintList()
