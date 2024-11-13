//function to help add, subtract,divide and multiply any two digits of my choice
function computation(first_digit, second_digit, operator){
    switch(operator){//this helps to satisfy the work for different selected operators
        case '+':
            return first_digit + second_digit;//this returns the sum of the two digits
        case '-':
            return first_digit - second_digit;//this returns the digits got after subtracting
        case '/':
            return first_digit / second_digit;//this returns the digits got after dividing
        case '*':
            return first_digit * second_digit;//this returns multiplication of the two digits
    }
    return "Invalid operator. Please select one of the following: +, -, /, *";//this returns an error message if the operator is invalid

}

//test the function with given numbers and operator

console.log(computation(6, 5, '+'));//this will return 11
console.log(computation(9,10, 't'));//this brings an error message

console.log(computation(13, 2, '-'));//this will return 11

console.log(computation(120, 5, '/'));//this will return 24

console.log(computation(10,5 , '*'));//this will return 20

console.log(computation(5, 3, 'x'));//this will return an error message as the operator is invalid