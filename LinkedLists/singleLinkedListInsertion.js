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
    // while (this.head === null) {
    //   if (this.head == null) {
    //     this.head = new Node(data, this.head)
    //     this.tail = this.head
    //     console.log(this.head)
    //   }
    // }
    // while (this.head !== null) {
    //   this.head.next = new Node(data, this.head)
    //   this.tail = this.head
    //   this.size++
    //   console.log(this.head)
    // }
    this.head=new Node(data,this.head)
    this.tail=this.head.next;
  //  console.log("line-28",this.tail)
    this.size++;
  }
  //insertion end 
  // insertionEnd(data){
  //   //for insertion we need to check two conditions, is there any data in the head or not
  //   if(this.head===null){
  //     this.head=new Node(data,this.head);
  //     this.size++;
  //   }
  //   else{
  //     let NextPoint =this.head;
  //     while(NextPoint.next){
  //       NextPoint = NextPoint.next;
  //     }
  //     NextPoint.next= new Node(data)
  //   }
  //   this.size++;
  // }

// second approach
insertionEnd(data){
  let node = new Node(data);
  let present;
  if(this.head==null){
    this.head=node;
    this.tail=this.head;
    this.size++;
  }
  else{
    present=this.head;
    while(present.next){
      present=present.next;
    }
    present.next=node;
  }
  this.size++;
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
singlell.insertionEnd(12);
singlell.insertionEnd(92);
singlell.insertionEnd(72);
singlell.insertionEnd(2);
singlell.insertionEnd(122);
singlell.PrintList()
