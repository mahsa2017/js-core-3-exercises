function equals(got, expected) {
  if (got === expected) {
    console.log("✔︎ Passed");
    console.log();
  } else {
    console.log("𝙭 Failed");
    console.log("    Expected: " + expected);
    console.log("    But got:  " + got);
    console.log();
  }
}

var haystack1 = ['pony', 'water', 'keyboard', 'needle', 'cactus'];
var haystack2 = ['glass', 'needle',]

/*
Instructions:

Turn the below "find needle" code into a function
that returns the index of "needle" in the given haystack
*/
/* function findNeedle(myArr) {
  myArr.filter(function(i){return i})
  for (var i = 0; i < myArr.length; i++) {
    if (myArr[i] === "needle") {
      return i;
    };
  };
}; */

//using map and findIndex
/* function findNeedle(haystack) {
  return haystack.map((a)=>a+="").findIndex((a)=>a=="needle");
} */

//using map
 function findNeedle(haystack) {
  var found = 0;
  haystack.map((item, index) => {
    if (item === 'needle') {
      found = index;
    }
  })
  return found;
} 

//using filter and indexOf
function findNeedle(haystack) {
  haystack.filter(arr => arr === 'needle' )
  return haystack.indexOf('needle');
}

equals(findNeedle(haystack1), 3);
equals(findNeedle(haystack2), 1);
equals(findNeedle(haystack1), 5);

