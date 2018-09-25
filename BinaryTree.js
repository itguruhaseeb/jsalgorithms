class BinaryTree{
	constructor(){
    	this.root = null;
    }
    
    add( data ){
    	let newNode = new Node( data );
        
        if( !this.root ){
        	this.root = newNode;
            return;
        }
        
        let current = this.root;
        while( current ){
   			//Check if its smaller and add to the left
            
            if( data < current.data ){
            	
            	//If the node is null or not created yet. This where we want to iterate meaning the last node where the new node has to be added
                if( !current.left ){
                	current.left = newNode;
                    break;
                }
                //If there exists a node. Then make that as the current node and compare the data until you find a empty node
                else{
                	current  = current.left;
                }
            }
            //check if its greater and add to the right
            
            else if( data > current.data ){
            	//If the node is null or not created yet. This where we want to iterate
                //meaning the last node where the new node has to be added
                if( !current.right ){
                	current.right = newNode; 
                    break;
                }
                //If there exists a node. 
                //Then make that as the current node 
                //and compare the data until you find a empty node
                else{
                	current = current.right;
                }
            }
            //if its equal then its a duplicate and it shouldn't be added.
            //As it breaks the BinaryTree rule and relationship.
            else{
            	console.log( "Found a duplicate for ::: " + data );
                break;
            }
        }
    }
    
    remove( data ){
    
    }
    
    search( data ){
    	if( !this.root ){
            return null;
        }
        
        let current = this.root;
        while( current ){
   			//Check if its smaller and add to the left
            if( data < current.data ){
               current = current.left;
            }
            //check if its greater and add to the right
            else if( data > current.data ){
            	current = current.right;
            }
            else{
            	console.log( "Match found  for ::: " + current.data );
                return current;
            }
        }
        
        return null;
    }
}

class Node{
	constructor( data ){
    	this.data   = data;
        this.left   = null;
        this.right  = null;
    }
}

let tree = new BinaryTree();
tree.add(10);
tree.add(9);
tree.add(8);
tree.add(7);

tree.add(20);
tree.add(15);
tree.add(14);
tree.add(12);
tree.add(5);
tree.add(4);
tree.add(3);
tree.add(2);
tree.add(1);

console.log( tree );
console.log( tree.search( 5 ) );

