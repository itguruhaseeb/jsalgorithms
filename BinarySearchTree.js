<script>
class BinarySearchTree{
	constructor(){
    	this.root = null;
    }
    
    treeWidth(){
    	//TBD
    }
    
    traverseBF(){
    	let elems  = [this.root];
        let values = [];
        
        while( elems.length > 0 ){
        	let current = elems.shift();
            if( current ){
            	
            	if( current.left ){
                	elems.push( current.left );
                }
                
                if( current.right ){
                	 elems.push( current.right );
                }
                
                values.push( current.data );
            }
        }
        
        return values;
    }
    
    traverseDF(){
    	let elems  = [this.root];
        let values = [];
        
        while( elems.length > 0 ){
        	let current = elems.shift();
            if( current ){
            	
            	if( current.left ){
                	elems.unshift( current.left );
                }
                
                if( current.right ){
                	 elems.unshift( current.right );
                }
                
                values.push( current.data );
            }
        }
        
        return values;
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
    	if( !this.root ){
            return null;
        }
        
        let current = this.root;
        let parentNode = null;
        while( current ){
        	if( data < current.data ){
            	current = current.left;
                parent  = current;
            }else if ( data > current.data ){
            	current = current.right;
                parent  = current;
            }else{
            	
                if( !current.left && !current.right  ){
                	console.log( parentNode );
                }
            
            	break;
            }
        }
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

let bst = new BinarySearchTree();
bst.add(10);
bst.add(9);
bst.add(8);
bst.add(7);

bst.add(20);
bst.add(15);
bst.add(14);
bst.add(12);
bst.add(5);
bst.add(4);
bst.add(3);
bst.add(2);
bst.add(1);

document.write("<h1>Binary Search Tree Traversal</h1>");
document.write( "<h4 style='display:inline;'>Breadth First ::: </h4>" + bst.traverseBF() + "<br/><br/>" );
document.write( "<h4 style='display:inline;'>Depth First ::: </h4>" + bst.traverseDF() );

</script>

**Playground**
https://js.do/jsninja/binarysearchtree
