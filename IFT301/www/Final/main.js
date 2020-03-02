
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
    
    courtWrapper.appendChild(fnWrapper);
    courtWrapper.appendChild(lnWrapper);
    courtWrapper.appendChild(locationWrapper);

}
