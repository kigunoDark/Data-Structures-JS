class Graph {
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(vertex) {
      if(!this.adjacencyList[vertex])  this.adjacencyList[vertex] = [];
    }
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(
            v => v !== v2
        );

        this.adjacencyList[v2] = this.adjacencyList[v2].filter(
            v => v !== v1
        );
    }

    removeVertext(vertex) {
        while(this.adjacencyList[vertex].length) {
            console.log(this.adjacencyList[vertex])
            const adjesentVertex =  this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjesentVertex);
        }
        delete this.adjacencyList[vertex];
    }

    // depthFirstRecurcive(vertex){
    //     const result = [];
    //     const vesited = {};
    //     const adjacencyList = this.adjacencyList;
    
    //     (function dfs(vertex) {
    //         if(!vertex) return null;
    //         vesited[vertex] = true;
    //         result.push(vertex);
    //         adjacencyList[vertex].forEach(neighbor => {
    //             if(!vesited[neighbor]){
    //                 return dfs(neighbor);
    //             }
    //         });
    //     })(vertex);
    //     return result;
    // }

    // My effort
    dfsAlg(vertex) {
        let result = [];
        let vesited = {};
        let adjacencyList = this.adjacencyList;

        (function dfs(vertex) {
            if(!vertex)  {
                return null 
            } else {
                vesited[vertex] = true;
                result.push(vertex);
                adjacencyList[vertex].forEach(n => {
                    if(!vesited[n]) {
                        dfs(n);
                    }
                }) 
            }
          
        }(vertex))

        return result;
    }


    depthFirstIterative(vertex) {
        const stack = [vertex];
        const result = [];
        const vesited = {};
        let currentVertex;
        vesited[vertex] = true;
        while(stack.length) {
            console.log(stack);
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(n => {
                if(!vesited[n]) {
                    vesited[n] = true;
                    stack.push(n);
                }
            })
        }
        return result;
    }

    breadthFirst(vertex) {
        const queue = [vertex];
        const result = [];
        const vesited = {};
        vesited[vertex] = true;

        let currentVertex;
        while(queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);
            // this.adjacencyList[currentVertex].slice().reverse().forEach
            this.adjacencyList[currentVertex].forEach(n => {
                if(!vesited[n]) {
                    vesited[n] = true;
                    queue.push(n);
                }
            })
            
        }

        https://www.youtube.com/watch?v=KS2ngnRAKlg
        return result;
    }
}


let g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

// console.log(g. dfsAlg("B"));

// console.log(g.depthFirstIterative("B"))

console.log(g.breadthFirst("A"));