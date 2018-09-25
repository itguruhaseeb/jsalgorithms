/*
Write a function to generate unique substrings from a given string with k
distinct characters.
*/
function subStr( inputStr, num ){
	let str = new Set();
    
    let i = 0;
    let k = num;
    for( let char of inputStr ){
    	let s = inputStr.substring( i, num );
        if( s !== "" && s.length === k && !hasDuplicateChars( s ) ){
            str.add( s );
        }
        num++;
        i++;
    }
    
    return Array.from( str );
}

function hasDuplicateChars( str ){
	let isDuplicate = false;
    let prevChar    = "";
    
    for( let char of str ){
    	if( char === prevChar ){
        	isDuplicate = true;
            break;
        }
        prevChar = char;
    }
    
    return isDuplicate;
}

console.log( subStr( "aa", 2 ) );
console.log( subStr( "abc", 2 ) );
console.log( subStr( "aba", 2 ) );
console.log( subStr( "abcbaa", 3 ) );
console.log( subStr( "abcd", 3 ) );
console.log( subStr( "abacuusttlvbnc", 3 ) );
console.log( subStr( "abcadcacacaca", 3 ) );

