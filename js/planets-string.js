(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray = planetsString.split('|')
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful? */

    planetsString = planetsArray.join("\n");        // for whatever reason the line break wont work in the console but when
    console.log(planetsString);                     // i do \n it works ohh nvm i had it right but the line breaks dont actually
                                                    // appear in the console
     /** BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
// var listOfPlanets;
//
// planetsArray.unshift("<ul>");                     //  <-- that's hard i cant figure it out right now .... unless that's how that works...
// planetsArray.push("</ul>");                      // nvm it isn't.
// listOfPlanets = planetsArray.join(" <li> ");
//
    var listOfPlanets = "<ul><li>" + planetsArray.join("</li><li>") + "</li></ul>"

    console.log(listOfPlanets);
    document.write(listOfPlanets);
})();
