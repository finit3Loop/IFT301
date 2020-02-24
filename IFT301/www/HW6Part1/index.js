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
var campButton = document.getElementById("campaignButton");
campButton.addEventListener("click", campaignLinks);

//function for adding campaign links
function campaignLinks(){

    //add link for Joe
    var joe = document.getElementById("Joe");
    var wrapper = document.createElement('a');
    wrapper.setAttribute('href', 'https://joebiden.com/');
    wrapper.appendChild(joe.cloneNode(true));
    joe.parentNode.replaceChild(wrapper, joe);

    //add link for Bernie
    var bern = document.getElementById("Bernie");
    var wrapper = document.createElement('a');
    wrapper.setAttribute('href', 'https://berniesanders.com/');
    wrapper.appendChild(bern.cloneNode(true));
    bern.parentNode.replaceChild(wrapper, bern);

    //add link for Elizabeth
    var liz = document.getElementById("Elizabeth");
    var wrapper = document.createElement('a');
    wrapper.setAttribute('href', 'https://elizabethwarren.com/');
    wrapper.appendChild(liz.cloneNode(true));
    liz.parentNode.replaceChild(wrapper, liz);
}