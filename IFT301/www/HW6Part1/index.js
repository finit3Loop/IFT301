var cards = document.getElementsByTagName("div");
for(var i = 0; i < cards.length; i++){
   if(cards[i].id == "card"){
    cards[i].classList.add("card");
   }
}
var attributes = document.getElementsByTagName("ul");
for(var i = 0; i < attributes.length; i++){
   if(attributes[i].id == "attributes"){
    attributes[i].classList.add("attributes");
   }
}