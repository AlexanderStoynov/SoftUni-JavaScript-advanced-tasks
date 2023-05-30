`use strict`;

function solve(number, ...params)
{
    params.forEach(element => {
        
        if(element == "chop")
        {
            number /= 2;
            console.log(number);
        }

        else if(element == "dice")
        {
            number = Math.sqrt(number);
            console.log(number);
        }

        else if(element == "spice")
        {
            number += 1;
            console.log(number);
        }

        else if(element == "bake")
        {
            number *= 3;
            console.log(number);
        }

        else if(element == "fillet")
        {
            number *= 0.8;
            console.log(number.toFixed(1));
        }
    });
}
