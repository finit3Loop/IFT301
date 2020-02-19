
//Variable declairations
var memeName, reason, year;

//Assigning values to variables
memeName = "Mr. Bones' wild ride";
reason = "Mr. Bones' wild ride was always a very funny meme to me due to the absurdity of Mr. Bones. It has always been one of my favorite responses when discussing undesirable situations I would rather be done with";
year = 2014;

//Concatinating variables and assigning to new variable
sentence = "The first time I saw " + memeName + " was in " + year + " and I like it because " + reason + ".";
    
//assign to id = sentence element in HTML doc
document.getElementById("sentence").innerHTML = sentence;

document.getElementById("memeName").innerHTML = memeName;