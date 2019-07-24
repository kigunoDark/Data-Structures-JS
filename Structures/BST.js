class  Node {
    constructor(val)
    {
        this.val= val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(){
        this.root = null;
    }
    // createRootNode()
    // {
    //     function getRandomInt(max) {
    //         return Math.floor(Math.random() * Math.floor(max));
    //       }
    //     let newNode = new Node(getRandomInt(100));
    //     this.root = newNode;
    //     return this;
    // }

    insert(value)
    {
        let newNode = new Node(value);
        if(this.root === null)
        {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while(true)
            {
                if(value === current.val) return  undefined;
                if(value < current.val)
                {
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (value >  current.val)
                {
                    if(current.right === null)
                    {
                        current.right = newNode;
                        return this;
                    } else {
                        current =  current.right;
                    }
                }
            }
        }
    }

    find(value)
    {
        if(this.root === null) return false;
        let current = this.root, found=false;
        while(current && !found)
        {
            if(value  < current.val)
            {
                current = current.left;
            } else if (value > current.val)
            {
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return "You dont have this value";
        return current;
    }
}

let tree = new BST();
tree.insert(1);
console.log(tree.find(2));