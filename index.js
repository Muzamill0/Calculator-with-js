let input = document.getElementById('input');
let buttons = document.querySelectorAll('button');


let result = '';

let buttonsArray = Array.from(buttons);

buttonsArray.forEach( (buttonText) =>{
    buttonText.addEventListener('click',  function(e){
        if(e.target.innerHTML == '='){
            result = eval(result);
            input.value = result;
        } else if(e.target.innerHTML == 'AC'){
            result = '';
            input.value = result;
        } else if(e.target.innerHTML == 'Del'){
            result = result.substring( 0, result.length-1);
            input.value = result;
        } else{
            result += e.target.innerHTML;
            input.value = result;
        }
    });
});

// if(confirmPasswordValue !== passwordValue  ){
    
// }