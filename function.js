// let result = document.getElementById('result').innerText;  //when we use p tag
//  let result = document.getElementById('result').value;  //when we use input tag
// console.log(result);

// let add = document.getElementsByTagName('button')[0].value;
// console.log(add);

//value is used to get value or we can assign also
//inner text is used to get text or we can assign also

let result1= document.getElementById('result').innerText;

function appendcharacter(a){
    if(result1=="err")
        {
            result1=0;
        }
    result1 += a;
  
    document.getElementById('result').innerText=result1;
}

function calculateResult(){
    try{              //try - catch used when there is syntax error in the calculation eg ++ instead of +
     result1=eval(result1);
    document.getElementById('result').innerText=eval(result1);
    }catch(err){     
    result1="err";
    document.getElementById('result').innerText=result1;
    }
}

function clearDisplay(){
    result1 = 0;
    document.getElementById('result').innerText=result1;
    // document.getElementById('result').style.backgroundColor = 'red'
    // document.getElementsByClassName('main')[0].style.display = 'none'
}
