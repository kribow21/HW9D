//function 1
function problem(number1, number2){
var adding = number1 + number2;
var multiply = adding* 5;
return(multiply);
}
//calling function 1
var result = problem(1,2);
console.log(result);

//function 2
function isCount(word){
    var a = word.length;
    if (a > 10){
        return true;
    }else{
        return false;
    }
}
//calling function 2
var answer = isCount("superduperexcited")
console.log(answer);

//function 3

function organize(array){


    function sort(item){
        var letters = item.substring(0,2);
        if (letters == "ph"){
            return true;
        }else{
            return false;
        }
    
    } 


    var answer = array.filter(sort);
    console.log(answer[0]);
}
//testing to see if it really does print the first "ph" in the list
var items = ["watch", "television", "money", "phone", "lipbalm", "photo"];
organize(items);

























