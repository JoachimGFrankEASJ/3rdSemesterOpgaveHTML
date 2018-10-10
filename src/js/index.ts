interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person): string {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user: Person = { firstName: "John", lastName: "Doe" };

/**
 * name
 */
function convertToGram(Amount: number): string {
 
    return Amount * 28.3495231 + " Gram";
}
function convertToOunces(Amount:number): string{
    return Amount * 0.0352739619 + " Ounces"
}


function CTG(): void
{
    let InputConverter: HTMLInputElement = <HTMLInputElement> document.getElementById("InputConverter");
   let tal: number = Number(InputConverter.value); 
   let FNumber: string = convertToGram(tal)
   //let OutputField:HTMLOutputElement = <HTMLOutputElement> document.getElementById("Output")
   
   document.getElementById("Output").innerHTML = FNumber;
}

function CTO(): void
{ 
    let InputConverter: HTMLInputElement = <HTMLInputElement> document.getElementById("InputConverter");
  let tal: number = Number(InputConverter.value); 
  let FNumber: string = convertToOunces(tal)
  document.getElementById("Output").innerHTML = FNumber;


}





let toGramButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("ConvertToGram");
toGramButton.addEventListener("click", CTG);
let toOuncesButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("ConvertToOunces");
toOuncesButton.addEventListener("click", CTO);

