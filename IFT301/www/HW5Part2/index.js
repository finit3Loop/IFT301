seasonText = document.getElementById("youChoose")
seasonImg = document.getElementById("seasonImg")


var favSeason = prompt("What's your favorite season?").toLowerCase();
switch(favSeason) {
    case "winter":
        seasonText.textContent = "You Choose Winter";
        seasonImg.src = "./winter.jpg"
        break;
    case "spring":
        seasonText.textContent = "You Choose Spring";
        seasonImg.src = "./spring.jpg"
        break;
    case "summer":
        seasonText.textContent = "You Choose Summer";
        seasonImg.src = "./summer.jpg"
        break;
    case "fall":
        seasonText.textContent = "You Choose Fall";
        seasonImg.src = "./fall.jpg"
        break;
    default:
        seasonText.textContent = "I have never heard of that season...";
        seasonImg.src = "./question.png"
        break;
} 