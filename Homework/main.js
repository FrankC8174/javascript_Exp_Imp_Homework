// Notice double passed in first then name in curly braces.
// import {double, name} from './utils.js';

// console.log(double(5)) //expected 10 in console.
// console.log(name); //expected Frank in console


// :::::::::::::::::: Change Name :::::::::::::::::::::::

// I can chnange the name of my double function
// this helps reduce the chance of error in the 
// case of multiple module imports, shaing a name.
// import {double as utilsDouble, name} from './utils.js';

// console.log(utilsDouble(100)) //expected 10 in console.

// console.log(name); //expected Frank in console

// // I should get a reference error.
// // console.log(double(5));





// ::::::::::::::::::::import all::::::::::::::::::::::
// this allows to import multiple things without
// having to {,,,,,,,}.
// import * as utils from './utils.js';

// // using this method console log then must be 

// console.log(utils.double(100));
// console.log(utils.name);

//::::::::::::::::::::: Default Import:::::::::::::::::::

//import { default as car } from './utils.js';

// Another way
import car from './utils.js';






// call
car();
