//find all div elements
var cards = document.getElementsByTagName("div");

//iterate through all divs selecting only the correct ones to apply card class to
for(var i = 0; i < cards.length; i++){
   if(cards[i].id == "card"){
    cards[i].classList.add("card");
   }
}

//find all ul elements
var attributes = document.getElementsByTagName("ul");

//iterate through all uls selecting only those for the attributes class
for(var i = 0; i < attributes.length; i++){
   if(attributes[i].id == "attributes"){
    attributes[i].classList.add("attributes");
   }
}