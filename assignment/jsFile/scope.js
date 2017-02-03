console.log("Below is how many pizza each of them have ordered:");

function thePizzeria() {
    //coming value is 1
    this.michelangelo = function (value) {
        value = (value * 2);//1*2 = 2
        return value; // return 2
    };
    //  coming value (2,2)
    this.donatello = function (value, anotherValue) {
        value = anotherValue + value; //2 + 2 = 4
        anotherValue = value * anotherValue; //4*2 = 8
        return anotherValue; // return 8
    };
    //coming value 1
    this.leonardo = function (value) {
        var anotherValue = value; //=1
        value *= 4; //1*4 =4
        //theNumber = value / 2;
        return (value + anotherValue); //return 4 + 1 = 5
    };
    //coming value 3,2,2
    this.raphael = function (value, anotherValue, yetAnotherValue) {
        //value = value * anotherValue + yetAnotherValue;
        return yetAnotherValue; //return 2
    };

  }
  var theNumber = 1;
  var pizzaForMike = new thePizzeria();
  var pizzaForLeo = new thePizzeria();
  var pizzaForDon = new thePizzeria();
  var pizzaForRaph = new thePizzeria();
  console.log("Mike= " + pizzaForMike.michelangelo(theNumber));
  console.log("Leo= " + pizzaForLeo.leonardo(theNumber));
  console.log("Mike + Leo = " + (pizzaForMike.michelangelo(theNumber) + pizzaForLeo.leonardo(theNumber)) );
  theNumber = theNumber*2;
  console.log("Don= " + pizzaForDon.donatello(theNumber,2));
  console.log("Raph= " + pizzaForRaph.raphael(3, 2, theNumber));
  console.log("Don - Raph = " + (pizzaForDon.donatello(theNumber,2) - pizzaForRaph.raphael(3, 2, theNumber)) );

  //ANALYSIS:
  //    you CAN'T call the methods outside the function. All scope of these functions
  //    michelangelo, leonardo, donatello, raphael and variable theNumber are declared inside and not able
  //    to console log outside thePizzeria() function. It you console log outside the function, it will show errors of 'undefined'
  //    objects or variable.
  //EDIT:
  // 1. bring var theNumber = 1; outside the function and declare it globally
  // 2. change the VAR on these 4 functions to THIS so you could console log your answer when you make an object
  // 3. create new OBJECTs for these four with thePizzeria prototype
  // 4. Use these new OBJECTS to call methods in order to retreive the value outside the function.
  // 5. line 21: Do not need the 'theNumber = value / 2' in leonardo function so comment it out
  // 6. line 26: Do not need this 'value = value * anotherValue + yetAnotherValue' in raphael this 'value' serves no purpose
