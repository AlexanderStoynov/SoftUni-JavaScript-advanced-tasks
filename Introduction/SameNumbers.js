'user strict';

function solve(number) {

    let string = number.toString();
    let array = Array.from(string);

    let n = array[0];
    let sum = 0;
    let isTheSame = true;

    array.forEach(element => {

        sum += parseInt(element);

        if (element != n) {
            isTheSame = false;
        }
    });

    console.log(isTheSame);
    console.log(sum);
}

