function addCourt() {
    var courtDiv = document.getElementById("game-grid");



    var gameGrid = document.getElementsByClassName("game-grid");
    var firstname = document.getElementsByName("firstname");
    var lastname = document.getElementsByName("lastname");
    var location = document.getElementsByName("location");

    console.log(firstname);
    console.log(lastname);
    console.log(location);



    var fnWrapper = document.createElement('ul');
    var firstnameLi = document.createElement('li');
    firstnameLi.appendChild(firstname);
    courtDiv.appendChild(fnWrapper);

    var lnWrapper = document.createElement('ul');
    var lastnameLi = document.createElement('li');
    lastnameLi.appendChild(lastname);
    courtDiv.appendChild(lnWrapper);

    var lnWrapper = document.createElement('ul');
    var lastnameLi = document.createElement('li');
    lastnameLi.appendChild(lastname);
    courtDiv.appendChild(lnWrapper);
    
    var locationWrapper = document.createElement('ul');
    var locationLi = document.createElement('li');
    locationLi.appendChild(location);
    courtDiv.appendChild(locationWrapper);
}