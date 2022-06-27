const submit = document.getElementById("submit");

const loopNumber = document.getElementById("loop-number");

const firstDivNumber = document.getElementById("first-division-number");

const secondDivNumber = document.getElementById("second-division-number");



submit.addEventListener("click", function(){
    myFunction();
});

function myFunction(){

    let text = "";
    
    for(let i = 1; i <= loopNumber.value; i++){
        if(i % firstDivNumber.value === 0 && i % secondDivNumber.value === 0){
            text += "Bish-Bosh" + "<br>";
        }
        else if(i % firstDivNumber.value === 0){
            text += "Bish" + "<br>";
        }
        else if(i % secondDivNumber.value === 0){
            text += "Bosh" + "<br>";
        }
        else{
            text += i + "<br>";
        }
    }
    document.getElementById("demo").innerHTML = text;
}

