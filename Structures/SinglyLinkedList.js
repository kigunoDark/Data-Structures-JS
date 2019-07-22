class Node{
    constructor(val)
        {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.length = 0;
        this.tail = null;
    }

// Push method add to the end of the list (tail)
    push(val)
    {
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail =  this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

// Unshift method add to the begining of the list (head)
    unshift(val)
    {
        var newNode = new Node(val);
        if(!this.head)
        {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;  
        }
         this.length++;
         return this;
    }

// Shift method delete form the begining of the list (head);
    shift(){
        if(!this.head) return undefined;
        let removed = this.head;
        this.head = removed.next;
        this.length --;
        return removed;
    }

// Pop method delete from the end of the list (tail);
    pop(){
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next)
        {
            newTail = current;
            current = current.next;
        }
        this.tail =  newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0)
        {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
// Get Index O(N)
    get(index)
    {
        if(index < 0 || index >= this.length) return null;
        let current =  this.head;
        let c = 0;
        while(c != index)
        {
            current = current.next;
            c++;
        }
        return current;
    }

//Set index
    set(index,val)
    {
        let current = this.get(index);
        if(!current) return false;

        current.val = val;
        return current;
    }
 
//   Insertion in the list O(1)
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === this.length)return this.push(val);
        if(index === 0) return this.unshift(val);
        
        let priv =this.get(index-1);
        let newNode = new Node(val);
        let temp = priv.next;
        priv.next = newNode;
        newNode.next = temp;
        this.length++;
        return this;
    }
// Removal from the list O(1)
    remove(index){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) this.pop(index);
        if(index === 0) this.shift(index);
        let priv = this.get(index-1);
        let removed = priv.next;
        priv.next = removed.next;
        this.length--;
        return removed;

    }

//     Reverse method in a list
    reverse()
    {

        let node = this.head;
        let tail = this.tail;
        this.tail = node;
        this.head = tail;

        let next = null;
        let prev = null;


        for(let i = 0; i < this.length; i++)
        {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}

var list = new SinglyLinkedList;