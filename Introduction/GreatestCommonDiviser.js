'use strict';

function solve(first, second) {
    
    let bigger = second;
    let smaller = first;
    if(first > second)
    {
       bigger = first;
       smaller = second;
    }
      
    while(smaller != 0)
    {
       let temporary = smaller;
       smaller = bigger % smaller;
       bigger = temporary;
    }

    console.log(bigger)
}


