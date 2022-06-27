let myBodyId = document.querySelector("#myBodyId");
const colourChange = document.querySelector("#colour-change");
const inputItem = document.querySelector("#input-item");
const addItem = document.querySelector("#add-item");
const checkItem = document.querySelector("#check-item");


/* Här är en EventListener som vid klick av add-item knappen skapar först ett
nytt element li eller itemListContent. Efter det skapar vi itemListText där vi använder createTextNode
som skapar en text sträng från det specificerade värdet, i vårt fall inputItem.value vilket är input
fältets värde. Detta passar perfekt till det vi vill göra. 

Därefter tar vi itemListContent.appendChild för att lägga till våran string till li-elementet.

Till sist skapar vi en ny variabel itemList som representerar listans skal. Vi tar i detta fall ut
vårat ul element med id:t item-list som vi deklarerade i index.html och lägger det i itemList variabeln.
Sedan så gör vi ännu en appendChild fast den här gången på itemList variablen och sätter våran 
itemListContent på den alltså li elementet så det blir som en helt vanlig lista

*/

const addItemListContent = function(){
                
    let itemListContent = document.createElement("li");
    itemListContent.setAttribute("class", "my-3 border rounded");

    if(inputItem.value === ""){
        return false;
    }

    let itemListText = document.createTextNode(inputItem.value.toString().toUpperCase());
    inputItem.value = "";
                
    itemListContent.appendChild(itemListText);
                
    return itemListContent
                
}

const addRemoveButton = function(){
    
    let itemListRemoveButton = document.createElement("input");
    itemListRemoveButton.setAttribute("class", "mx-3")
    itemListRemoveButton.setAttribute("type", "button");
    itemListRemoveButton.setAttribute("value", "Ta bort 🞨")
    
    return itemListRemoveButton;
    
}

const addCheckButton = function(){
    
    let checkButton = document.createElement("input");
    checkButton.setAttribute("type", "button");
    checkButton.setAttribute("value", "Inköpt ☐")
    checkButton.setAttribute("class", "mx-1")
    
    return checkButton;
    
}

const addUndoButton = function(){
    let undoButton = document.createElement("input");
    undoButton.setAttribute("type", "button");
    undoButton.setAttribute("value", "Ångra ↩")
    undoButton.setAttribute("class", "mx-1")
    
    return undoButton;
}

    addItem.addEventListener("click", function(){
        
        let itemListContent = addItemListContent();

        if(itemListContent === false){
            return errorMessage();
        }
        
        let itemListRemoveButton = addRemoveButton();
        
        itemListContent.appendChild(itemListRemoveButton);
        
        let checkButton = addCheckButton();
        
        itemListContent.appendChild(checkButton);
        
        let undoButton = addUndoButton();
        
        itemListContent.appendChild(undoButton);
        
        // Remove Button
        itemListRemoveButton.addEventListener("click", function(){
            itemListContent.remove();
        });
        
        // Check Button
        checkButton.addEventListener("click", function(){
            itemListContent.setAttribute("class", "my-3 text-decoration-line-through border rounded");
            checkButton.setAttribute("value", "Inköpt ☑");
        });
        
        // Undo Button
        undoButton.addEventListener("click", function(){
            itemListContent.setAttribute("class", "my-3 text-decoration-none border rounded");
            checkButton.setAttribute("value", "Inköpt ☐");
        });

        
        let itemList = document.querySelector("#item-list");
        itemList.appendChild(itemListContent);
    });

    // Här lägger vi till ifall man trycker Enter så fungerar det som att klicka på "Lägg till" knappen
    inputItem.addEventListener("keypress", function(event){
        if(event.key === "Enter"){
            event.preventDefault();

            addItem.click();
        }
    });

    /* Denna eventlistenern tillhör en "knapp" eller en symbol uppe till höger på sidan.
    Eventet är ett klick så när vi klickar på knappen så körs all funktionalitet. 
    
    Det vi gör är att när vi klickar på denna knapp så skapar vi först en referens till vår body 
    med myBodyId. Sedan kallar vi på randomColor funktionen, sätter in min värdet 1 och max värdet 10. 
    Resultatet lagrar vi sedan i variabeln color. 
    
    Därefter ändrar vi våran bodys attribut genom class och sätter bakgrunden eller bg- + color alltså
    bg plus den sträng som representerar bootstrap färgerna. När vi konkatenerar dessa två strängar 
    så blir resultatet tex bg-primary, bg-success, bg-danger, bg-warning, bg-info, bg-light osv.
    
    På så sätt ändrar vi bodyns bakgrund. Genom att helt enkelt ändra dess bootstrap class.*/

    colourChange.addEventListener("click", function(){
        let myBodyId = document.querySelector("#myBodyId");

        const color = randomColor(1, 10);

        myBodyId.setAttribute("class", "bg-" + color + " d-flex flex-column min-vh-100");
    });

    

    // Här skapar vi ett errorMessage
    const errorMessage = function(){
    
        alert("Du kan inte lägga till en vara som en tom sträng!");     
    }


    /*Här skapar vi en funktion randomColor som tar in ett min värde och ett max värde.
    Det denna funktionen gör är att den genererar ett slumpat värde från 1, 10 med colorSelector.
    Efter det så skapar vi variabeln color. Sedan lägger vi vår colorSelector i en switch med
    värdena 1 till 10. Alla dessa innehåller alla färger som kommer med bootstrap i form av en sträng som vi sedan lägger
    i variablen color. Till sist returnerar vi denna sträng och använder den uppe vid en 
    event listener till en knapp (colourChange). ↑ */
    const randomColor = function(min, max){
    
    min = Math.ceil(min);
    max = Math.ceil(max);
    
    let colorSelector = Math.floor((Math.random() * (max - min) + min));
    let color;

    switch(colorSelector){
        
        case 1:
            color = "primary";
            break;
        case 2:
            color = "secondary";
            break;
        case 3:
            color = "success";
            break;
        case 4:
            color = "danger";
            break;
        case 5:
            color = "warning";
            break;
        case 6:
            color = "info";
            break;
        case 7:
            color = "light";
            break;
        case 8:
            color = "dark";
            break;
        case 9:
            color = "muted";
            break;
        case 10:
            color = "white";
            break;
        }

        return color;
                
}
    
    
    
    
    