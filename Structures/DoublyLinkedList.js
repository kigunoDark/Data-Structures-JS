

class Node
{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
   
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val);
        if(this.length=== 0)
        {
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this; 
    }

    pop()
    {
        if(!this.head) return undefined;
        let rem = this.tail;
        if(this.length === 1)
        {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = rem.prev;
            this.tail.next = null;
            rem.prev = null;
        }
       
        this.length--;
        return this;
    }

    shift()
    {
        if(this.length === 0) return undefined;
        var oldHead = this.head;
        if(this.length === 1)
        {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;  
            oldHead.next = null;
        }
        
        this.length--;
        return this;
    }

    unshift(val)
    {
        let newNode = new Node(val);
        if(this.length === 0)
        {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

     get(index)
    {
        if(index >= this.length || index < 0) return null;
        if(index <= this.length/2)
        {
            console.log("Less then middle");
            let count = 0;
            let current = this.head;
            while (count !== index)
            {
                current = current.next;
                count++;
            }
            return current;
        } else {
            console.log("More then middle!");
            var count = this.length-1;
            var current = this.tail;
            while(count !== index)
            {
                current = current.prev;
                count--;
            }
            return current;
        }
        
    }

    set(index, val)
    {
        let foundNode = this.get(index);
        if(foundNode != null)
        {
            foundNode.val = val;
            return true;
        }
        return false;
    }

// Have some questions about it
    insert(index,val)
    {
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length-1) return !!this.push(val);


        let newNode = new Node(val);
        let lastNode = this.get(index-1);
        let afterNode = lastNode.next;

        lastNode.next = newNode; newNode.prev = lastNode;
        newNode.next = afterNode; afterNode.prev = newNode;

        this.length++;
        return true;
    }

    remove(index)
    {
        if(index < 0 || index >= this.length)return false;
        if(index === 0 ) return this.shift();
        if(index === this.length-1) return this.pop();

        var removedNode = this.get(index);
        removedNode.prev.next =removedNode.next;
        removedNode.next.prev = removedNode.prev; 
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
       }

    
}
var list = new DoublyLinkedList();
