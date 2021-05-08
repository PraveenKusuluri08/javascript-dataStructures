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
    if(pos<0 && pos>this.size){
      return;
    }
    if(pos===0){
      this.insertBeggining(data);
    }
    const node = new Node(data);
    let current,previous;
    current=this.head;
    let i=0;
    while(i<pos){
      previous=current
      current=current.next;
      i++;
    }
    node.next=current;
    previous.next=node;
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
getElementByIndex(index){
  let count=0;
  let current=this.head;
  while(current){
    if(count===index){
      console.log("The element is found at the loaction of",index , current.data)
    }
    count++;
    current=current.next
  }
}
// removeBeggining(){
//   let current=this.head;

//   this.head=current.next;
//   console.log("The element",current.data ,"is removed")
// }

removeElementByIndex(index){
  if(index<0 && index>this.size){
    return 
  }
  let current=this.head;
  let previous;
  let count=0;
 if(index===0){
  this.head=current.next;
  console.log("The element",current.data ,"is removed")
 }else{
    while(count<index){
      count++;
      previous=current;
      current=current.next;
    }
    previous.next=current.next;
    console.log("Element ",current.data ,"is deleted")
  }

}
  PrintList() {
    let list = this.head
    while (list) {
      console.log(list.data)
      list = list.next
    }
  }
}
const singlell = new linkedlist()
singlell.insertBeggining(12)
singlell.insertBeggining(92)
singlell.insertBeggining(10)
singlell.insertBeggining(18)
singlell.insertBeggining(8)
// singlell.insertionEnd(128)
// singlell.insertionEnd(92)

 singlell.insertPosition(2, 999)
 singlell.insertPosition(1, 888)

//singlell.reverseList()
//singlell.getElementByIndex(3);
singlell.removeElementByIndex(0)
//singlell.removeBeggining()
singlell.PrintList()
