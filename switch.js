/* 
    const expr = "Papayas";
    switch (expr) {
    case "Oranges":
        console.log("Oranges are $0.59 a pound.");
        break;
    case "Mangoes":
    case "Papayas":
        console.log("Mangoes and papayas are $2.79 a pound.");
        // Expected output: "Mangoes and papayas are $2.79 a pound."
        break;
    default:
        console.log(`Sorry, we are out of ${expr}.`);
    }
*/

const productName = "Jackfruite";
switch (productName){
    case "orange": 
        console.log('Oranges are 40 BDT')
        break;
    case "Lichi":
        console.log('litchi is 10 BDT');
        break;
    case "Apple":
    case "Malta":
    case "Date": 
        console.log('Apple malta and date per kg is 229 BDT')
        break;
    case "Jackfruite":
        console.log('Jackfruite is 500 BDT');
        break; 
    default:
        console.log(`Sorry, we are out of ${productName}`);

}



