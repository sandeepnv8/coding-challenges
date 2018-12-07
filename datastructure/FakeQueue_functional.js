/* FakeQueue_functional:
A functional datastructure for Queue implemented using the array
One advantage of a functional data structure is chaining.
For instance:
  
 let q = new Queue() // queue as functional datastructure
 q.enqueue(1).enqueue(2).enqueue(3).dequeue()[1].getData() //> [2,1]
 let removed = q.dequeue()[0] //> 2
 q.getData() //> [1]

 On the other hand, the non-functional FakeQueue implementation 
 requires the following to construct the queue

  let q = new Queue() // non-functional queue
  q.enqueue(1)
  q.enqueue(2)
  q.enqueue(3)
  q.dequeue() //> 3
  q.data //> [2, 1]
  let removed = q.dequeue() //> 2
  q.data //> [1]
 */

function Queue() {
  this.data = []
  this.enqueue = item => {
    this.data.unshift(item)
    return this
  }
  this.dequeue = () => {
    return [this.data.shift(), this]
  }
  this.getData = () => this.data
}

export default Queue;