// My Mnemonic
// Write a function myMnemonic that accepts up to four strings. myMnemonic should return a new string of the first characters for each string argument.

// Note that the user may not pass in all four strings!

// Example:
// myMnemonic('Must', 'Accept', 'Sugar', 'Happiness'); // => MASH
// myMnemonic('We', 'Eat', 'Eggs'); // => WEE

// YOUR CODE BELOW
function myMnemonic (str1, str2, str3, str4){
    let mnemonic = '';

    if(str1){
        mnemonic += str1[0];
    }

    if(str2){
        mnemonic += str2[0];
    }

    if(str3){
        mnemonic += str3[0];
    }

    if(str4){
        mnemonic += str4{0};
    }
}
// Do not change the code below this line
module.exports = { myMnemonic };
