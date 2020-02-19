
var ingArray, dirArray;

ingArray = ['1 lb. pasta', '½ c. butter','½ c. flour','4 c. milk',' 6 c. freshly shredded sharp Cheddar',
'½ T. Kosher or sea salt','½ T. pepper','2 T. butter','½ c. panko bread crumbs'];
dirArray = ['Boil pasta in salted water.',
'Melt butter in large saucepan over medium heat. Sprinkle in flour and whisk and cook 2-3 minutes. Add in salt and pepper.',
'Slowly pour in 4 c. milk whisking until smooth and heating to a low boil until thickened. Do not stop whisking and cooking until thick. Remove from heat.',
'Grease a 9x13" baking dish and add the hot pasta to the dish. Over the top sprinkle 6 c. of freshly shredded cheese.',
'Pour the thickened cream sauce over the hot pasta and cheese and let it sit until the cheese melts. Stir everything together.',
'Melt 2 T. butter over medium heat. Add in panko bread crumbs, stirring constantly 3-5 minutes or until golden brown.',
'Sprinkle the breadcrumbs over the mac and cheese.',
'Bake in a preheated 325 degree oven 12-15 minutes.'];



for( var i = 0; i<ingArray.length; i++ ){
    console.log(ingArray, i);
    var table = document.getElementById("ingredients");
    var row = table.insertRow(i);
    var cell = row.insertCell(0);
    cell.innerHTML = ingArray[i];
}

for( var i = 0; i<ingArray.length - 1; i++ ){
    console.log(dirArray, i);
    var ul = document.getElementById("directions");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(dirArray[i]));
    ul.appendChild(li);
}