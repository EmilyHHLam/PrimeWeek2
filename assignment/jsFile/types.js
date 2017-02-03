// We've created a website called "The Doubler"
// the website accepts a bunch of different inputs from our user
// we accept strings and numbers and booleans and objects and try to double them
// and expect output of the type
console.log('Script sourced!');

var someInput = prompt("Test theDoubler! Put something in here you would like to try, then check the console!");
var typeCheck = parseInt(someInput);

theDoubler(someInput, typeCheck);
//
function theDoubler(someInput, typeCheck) {
// 	// typeof is a built in javascript tool that allows us to find the type of an object
//     // for number, we have given an example of how that works
//
if (someInput !== "") {

					var funnyMark = someInput.match(/[^1-9]/g);
					//console.log(someInput.match(/[^1-9]/g));
					// if type is number, without funny marks on numbers log that number multiplied by 2
					if (!isNaN(typeCheck)) {
						if (funnyMark !==null) {
							console.log("It could be a date object");
						} else {
							console.log(someInput*someInput);
						}

					}
					// the rest are NotANumber
					else {
						someInput = someInput.substring(0,someInput.length);
						//finding the match [] {}
						var oSqBracket = someInput.match(/\[/g);
						var cSqBracket = someInput.match(/\]/g);
						var oCrBracket = someInput.match(/\{/g);
						var cCrBracket = someInput.match(/\}/g);

						// log "Super-duper true" if it is true
						if (someInput == "true") {
							console.log("That's very true!");
						// log "I won't double this" if it is false
						} else if (someInput == "false"){
							console.log("I won't double it");
						}
						// square bracket value is an object
						else if (oSqBracket !==null && cSqBracket !==null) {
							console.log("Everything is an object!");
						}
						//curly bracket value is an object
						else if (oCrBracket !==null && cCrBracket !==null ) {
							console.log("Everything is an object");
						}
						// if type is string pass back that string twice
						else if (typeof someInput == "string"){
							console.log(someInput + someInput);
						}
						else{
						console.log("I can't double this");
					  }
				}
			}
			//empty value
			else {
				console.log("I can't double empty value!");
			}

}
