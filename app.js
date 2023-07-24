
// variable declaration
let digitInput;
let data = [];

const sum = (inpt) => {
    data = inpt.split("+");
    // console.log(data.length)

    let a = parseInt(data[0]);
    let b = parseInt(data[1]);

    return(a + b)

}
const subs = (inpt) => {
    data = inpt.split("-");
    // console.log(data.length)

    let a = parseInt(data[0]);
    let b = parseInt(data[1]);

    return(a - b)

}
const multiply = (inpt) => {
    data = inpt.split("*");
    // console.log(data.length)

    let a = parseInt(data[0]);
    let b = parseInt(data[1]);

    return(a * b)

}
const divide = (inpt) => {
    data = inpt.split("/");
    // console.log(data.length)

    let a = parseInt(data[0]);
    let b = parseInt(data[1]);

    return(a / b)

}

document.addEventListener('DOMContentLoaded', function() {

    let operator = document.querySelectorAll('.sign');

    // get the digit
        document.querySelectorAll('.digit').forEach(function(digt) {

            digt.onclick = function() {
            digitInput = document.querySelector('.dis').innerHTML += digt.dataset.digit;

            // Get the signe
                    operator.forEach(function(sgn) {
                    sgn.onclick = function() {
                    digitInput = document.querySelector('.dis').innerHTML += sgn.dataset.sign;

                    // ------------------ logic

                    document.querySelector('.equal').onclick = () =>{

                        if(sgn.dataset.sign === '+') {
                            document.querySelector('.dis').innerHTML = sum(digitInput);
                        }
                        if(sgn.dataset.sign === '-') {
                            document.querySelector('.dis').innerHTML = subs(digitInput);
                        }
                        if(sgn.dataset.sign === '*') {
                            document.querySelector('.dis').innerHTML = multiply(digitInput);
                        }
                        if(sgn.dataset.sign === '/') {
                            document.querySelector('.dis').innerHTML = divide(digitInput);
                        }
                         
                   }

                                        //  ---------
                  }  
        }) 
            
            
  } 

    })
                    
    
                // // clear the screen
                    document.querySelector('.cl').onclick = () => {
                    document.querySelector('.dis').innerHTML = '';
                 }   
})