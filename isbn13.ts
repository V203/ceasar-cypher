export const isbn13 = (str: string | Array<any> | any) => {
    
    let isValid = false;
    if (str.length === 13) {
        str = str.split("");
        str = str.map((el: any) => parseInt(el)).map((el: any, index: any) => el * (index % 2 == 0 ? 1 : 3));
        isValid = str.reduce((a: any, b: any) => a + b, 0) % 10 === 0;
        return isValid ? "Valid" : "Invalid";

    } else if (str.length === 10  ) {
         // Remove any hyphens from ISBN-10
         let counterFake = 10;
         str = str.split("");

        
        str[str.length-1] === "X" ? str[str.length-1] = 10 :null;
         str = str.map(Number)
        
         

        if( str.map((el: any) =>  parseInt(el) * counterFake--).reduce((a: any, b: any) => a + b) % 11 === 0){
  console.log(str);
  str = str.join().replace(/,/g,"");
    // Add the prefix "978" to the beginning
    const isbn13Prefix = "978";
    
    
    const isbn13 = isbn13Prefix + str.slice(0, 9);
//   console.log(isbn13);
  
    const checkDigit = calculateCheckDigit(isbn13);
  
    return isbn13 + checkDigit;

    }else{
        return "Invalid"
    }
};

}

const calculateCheckDigit = (isbn: string) => {
    const digitArray = isbn.split("").map(Number); // Convert ISBN string to an array of digits
    
    // Multiply each digit by its corresponding weight (1 or 3)
    const weightedDigits = digitArray.map((digit: number, index: number) => digit * (index % 2 === 0 ? 1 : 3));
    
    // Calculate the sum of all the weighted digits
    const sum = weightedDigits.reduce((a, b) => a + b);
    
    // Calculate the check digit
    const checkDigit = (10 - (sum % 10)) % 10;
  
    return checkDigit.toString()
    }


