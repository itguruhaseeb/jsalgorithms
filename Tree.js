<script>
class Node{
	constructor( data ){
    	this.data = data;
        this.children = [];
    }
    
    add( data ){
    	let newNode = new Node( data ); 
    	this.children.push( newNode );
    }
    
    remove( data ){
    	this.children = this.children.filter( node => {
        	return node.data !== data;
        });
    }
}

class Tree{
	constructor( data ){
    	this.root = new Node( data );
    }
    
    contains( data ){
    
    }
    
    getWidth(){
    	let elems   = [this.root, "E"];
        let values  = [0];
        
        while( elems.length > 1 ){
        	let node = elems.shift();
            
            if( node === "E" ){
				values.push(0);
				elems.push( "E" );
			}else{
            	elems.push(...node.children);
                values[values.length - 1]++;
            }
        }
        
        return values;
    }
    
    
    traverseBF(){
    	let elems   = [this.root];
        let values  = [];
        
        while( elems.length > 0 ){
        	let node = elems.shift();
            values.push( node.data );
            
            if( node.children.length > 0 ){
            	elems.push(...node.children);
            }
        }
        
        return values;
    }
    
    traverseDF(){
    	let elems   = [this.root];
        let values  = [];
        
        while( elems.length > 0 ){
        	let node = elems.shift();
            values.push( node.data );
            
            if( node.children.length > 0 ){
            	elems.unshift(...node.children);
            }
        }
        
        return values;
    }
}

let tree = new Tree( 20 );
tree.root.add( 0 );
tree.root.add( 40 );
tree.root.add( -15 );
tree.root.children[0].add( 12 );
tree.root.children[0].add( -2 );
tree.root.children[0].add( 1 );
tree.root.children[2].add( -2 );


console.log( tree.root );


document.write("<h1>Tree Traversal</h1>");
document.write( "<h4 style='display:inline;'>Breadth First ::: </h4>" + tree.traverseBF() + "<br/><br/>" );
document.write( "<h4 style='display:inline;'>Depth First ::: </h4>" + tree.traverseDF() + "<br/><br/>" );
document.write( "<h4 style='display:inline;'>Tree Width ::: </h4>" + tree.getWidth() + "<br/><br/>" );

//Playground
//============
//https://js.do/jsninja/tree
</script>
