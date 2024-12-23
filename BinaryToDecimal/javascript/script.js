// creating variable for the click button
convertButton = document.getElementById("submit");

// creating an event istener for when the button is clicked
convertButton.addEventListener("click", convert);

// creating a function that converts the value
function convert()
{
    // creating variables from the html file
    binaryElement = document.getElementById("binaryValue");
    binaryString = binaryElement.value;
    decimalElement = document.getElementById("decimalValue");

    // check if input is valid
    let validInput = checkValidy(binaryString);

    if (!validInput)
    {
        binaryElement.value = "";
    } // end of if

    // now the conversion of binary to decimal
    let decimalValue = convertToDecimal(binaryString);
    //console.log(binaryString)
    //console.log(decimalValue)

    // putting this value in the output box
    decimalElement.value = decimalValue;

} // end of convert()

// the following function checks if the user input is valid
function checkValidy(binaryString)
{
    let entryValidity = true;

    if(binaryString.length > 8)
    {
        window.alert("Make sure the string has the length of 8 characters or below!")
        entryValidity = false
    } // end of if
    
    
    for (let i = 0; i < binaryString.length; i++)
    {
        // now checking if the values are only 0's and 1's
        if (binaryString[i] !== '0' && binaryString[i] !== '1')
        {
            entryValidity = false;
        } // end of if
    
    } // end of for
    
    if(!entryValidity)
    {
        window.alert("Please enter only 0's and 1's")
    } // end of if

    return entryValidity;

} // end of checkvalidity


// function used to convert binary values to decimal
function convertToDecimal(binaryValue)
{
    // sum variable to hold the total
    let sum = 0;

    for(let i = 0; i < binaryValue.length; i++)
    {
        if(binaryValue[i] === "1")
        {
            sum += 2**(binaryValue.length - 1 - i);
            
        } // end of if

    } // end of for

    return sum;

} // end of convert to decimal