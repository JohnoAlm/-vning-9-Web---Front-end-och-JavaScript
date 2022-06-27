/* En första implementation.

Här skriver vi enbart ut resultatet till konsolen.
Vi börjar med en enkel for-loop som går från 1 till 100.

Inuti loopen så gör vi 3 stycken ifs som kollar först om i är delbart med 3 och 4,
sedan om den är delbar med bara 3 och om den är delbar med bara 4.

Detta gör vi med modulus-operatorn som kollar resten vid division och om resten är 0 så är det
no problemas att jämnt dela
*/

for(let i = 1; i <= 100; i++){
    
    if(i % 3 === 0 && i % 4 === 0){
        console.log("Bish-Bosh");
    }
    else if(i % 3 === 0){
        console.log("Bish");
    }
    else if(i % 4 === 0){
        console.log("Bosh");
    }
    else{
        console.log(i);
    }
}