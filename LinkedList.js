class Node{
	constructor( val ){
		this.value = val;
		this.next  = undefined;
	}
}

class LinkedList{
	constructor(){
        this.head    = undefined;
        this.tail    = undefined;
		this.length  = 0;
	}

    insert( value ){
		let node = new Node(value);

		if( this.head === undefined ){
			this.head = node;
            this.tail = node;
			this.length++;
			return;
		}

        let prevNode = this.head;
        node.next    = prevNode;
        this.head    = node; 
        this.length++;
	}
    
    getAllNodes(){
        let currentNode = this.head;
        while( currentNode ){
			console.log( currentNode.value );
			currentNode = currentNode.next;
		}
	}
    
    delete( val ){
		let currentNode = this.head;
        let prevNode    = null;
        while( currentNode ){
			let targetValue = currentNode.value;
            if( targetValue === val ){
            	
                if( prevNode === null ){
                	let nextNode = currentNode.next;
                    this.head    = nextNode;
                }else{
					prevNode.next = currentNode.next;
				}
                currentNode.next = undefined;
                currentNode = null;
                this.length--;
				break;
			}
            prevNode    = currentNode;
            currentNode = currentNode.next
		}
	}
    
}	

let list = new LinkedList();
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);
list.insert(6);
list.insert(7);
list.insert(8);
list.insert(9);
list.insert(10);
list.insert(11);
list.insert(12);
list.insert(13);
list.insert(14);
list.insert(15);

//LinkedList Delete
list.delete(7);
list.delete(12);
list.delete(15);
list.delete(1);

list.insert(20);
list.insert(21);
list.insert(23);
list.insert(24);
list.insert(25);

list.delete(23);
list.getAllNodes();
console.log( "Length of list :::: " + list.length );
