
function addCourt() {


    var gameGrid = document.getElementById("game-grid");
    var firstname = document.getElementById("submit-form").elements.namedItem("firstname").value;
    var lastname = document.getElementById("submit-form").elements.namedItem("lastname").value;
    var location = document.getElementById("submit-form").elements.namedItem("location").value;
    var discription = document.getElementById("submit-form").elements.namedItem("discription").value;

    firstname = "First Name: " + firstname;
    lastname = "Last Name: " + lastname;
    location = "Location: " + location;



    var courtWrapper = document.createElement('div');
    courtWrapper.setAttribute('class','game-card');
    
    var firstnameLi = document.createElement('h4');
    firstnameLi.innerHTML = firstname;
    

    
    var lastnameLi = document.createElement('h4');
    lastnameLi.innerHTML = lastname;
    

    
    var locationLi = document.createElement('p');
    locationLi.innerHTML = location;
    

    var discriptionLi = document.createElement('p');
    discriptionLi.innerHTML = discription;
    
    courtWrapper.appendChild(firstnameLi);
    courtWrapper.appendChild(lastnameLi);
    courtWrapper.appendChild(locationLi);
    courtWrapper.appendChild(discriptionLi);
    courtWrapper.appendChild(document.createElement('br'));

    gameGrid.appendChild(courtWrapper);
    //courtWrapper.appendChild(gameGrid.cloneNode(true));
    //gameGrid.parentNode.replaceChild(courtWrapper, gameGrid);
}