// let isbn13 = (str: string | Array<any>) =>{

    
//     let strContainer =[]
    
//     str = "978" + str.slice(0,9);
//     str = str.split("");

//     let weightBool:boolean = false
//     if(str.length){
    
//         for (let index = 0;str.length > index; index++){
//             weightBool = !weightBool
//             strContainer[index] =  parseInt(str[index]) * (weightBool ? 1:3)
            
//         }                
        
//     }


//     let c = strContainer.reduce((a,b)=> a + b);
//     let check_digit = (10 - (c % 10)) % 10
    
    
//    str = str.join().replace(/,/g,"")
//     return str + check_digit.toString();

// }

// console.log(isbn13('3866155239'));


// isbn13('817450494X')
// isbn13('3866155239')
// isbn13('0316066524')
// isbn13('0345453747')
// isbn13('9783876155237')
// isbn13('031606652X')
// isbn13('9780345453747')
// isbn13('9783866155237')
// function isbn13(str) {
//     str = str.split("");
//    let isbn10Matcher = [10,9,8,7,6,5,4,3,2,1];
//    let isbn13Matcher = [1,3,1,3,1,3,1,3,1,3,1,3,1];
//    let isbn10result = []; let isbn13result = [];
   
//    let isISBN = null;
//    if (str.length === 10){
//    for (let i = 0; str.length > i;i++){
//        str[i] === "X" ? str[i] = 10: null;
//        isbn10result[i] = parseInt(str[i]) * isbn10Matcher[i];
//    }	
//        isISBN = isbn10result.reduce((a,b) => a + b) % 11 === 0
       
//    }
   
//    if (str.length === 13){
//    for (let i = 0; str.length > i;i++){
//        isbn13result[i] = parseInt(str[i]) * isbn13Matcher[i];
//    }	
//        isISBN = isbn13result.reduce((a,b) => a + b) % 10 === 0
       
//    }
   
//    return isISBN ? "Valid": "Invalid";
// }

// console.log(isbn13('9780345453747'))

// let isbn13 = (str) =>{

    
//     str = "978" + str.slice(0,9);
//     str = str.split("");
//     let weightBool = false
//     if(str.length == 12){
//     let strContainer =[]
// 		let strContainer10 = [];
//         for (let index = 0;str.length > index; index++){
//             weightBool = !weightBool
//             strContainer[index] =  parseInt(str[index]) * (weightBool ? 1:3)
            
//         }                      
// 			var c = strContainer.reduce((a,b)=> a + b);
// 			  let check_digit = (10 - (c % 10)) % 10
// 				str = str.join().replace(/,/g,"")
// 			 str = str + check_digit.toString();
			 
// 			return c % 10 === 0 ? str  : "Invalid";
//     }
	
// 	if(str.length  === 9){
// 			console.log(str.length)
// 			str = "978" + str.slice(0,9);
// 			str = str.split("");
// 			let reverseIndex = 9;
// 			for(let index = 0;str.length > index;index ++,reverseIndex){
// 			strContainer10[index] =  parseInt(str[index]) * reverseIndex
// 			}
// 			console.log(strContainer10)
			
// 		}
	    
// }