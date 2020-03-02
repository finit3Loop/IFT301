var fnArray = [];
var lnArray = [];
var locationArray = [];

console.log(fnArray.length);


for(var i = 0; i < length.fnArray; i++){
    
    var gameGrid = getElementById("game-grid");
    
    var gameUl = document.createElement('ul');
    gameUl.setAttribute('id', 'game-ul')


    var firstnameLi = document.createElement('li');
    firstnameLi.appendChild(fnArray[i]);
    
    var lastnameLi = document.createElement('li');
    lastnameLi.appendChild(lnArray[i]);
    
    var locationLi = document.createElement('li');
    locationLi.appendChild(locatonArray[i]);

    gameUl.appendChild(firstnameLi);
    gameUl.appendChild(lastnameLi);
    gameUl.appendChild(locaitonLi);

    gameUl.appendChild(gameGrid.cloneNode(true));
    gameGrid.parentNode.replaceChilde(gameUl,gameGrid);

}







function addCourt() {


    var gameGrid = document.getElementsByClassName("game-grid");
    var firstname = document.getElementById("submit-form").elements.namedItem("firstname").value;
    var lastname = document.getElementById("submit-form").elements.namedItem("lastname").value;
    var location = document.getElementById("submit-form").elements.namedItem("location").value;

    console.log(firstname);
    console.log(lastname);
    console.log(location);


    var courtWrapper = document.createElement('ul');
    
    var fnWrapper = document.createElement('ul');
    var firstnameLi = document.createElement('li');
    firstnameLi.innerHTML = firstname;
    fnWrapper.appendChild(firstnameLi);

    var lnWrapper = document.createElement('ul');
    var lastnameLi = document.createElement('li');
    lastnameLi.innerHTML = lastname;
    lnWrapper.appendChild(lastnameLi);

    var locationWrapper = document.createElement('ul');
    var locationLi = document.createElement('li');
    locationLi.innerHTML = location;
    locationWrapper.appendChild(locationLi);
    
    
}
